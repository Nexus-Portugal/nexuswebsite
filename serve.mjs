#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────
   NexusPT — servidor de desenvolvimento local
   Serve os ficheiros do site e faz rewrite do fh.js remoto
   (kikalabs-server.nexuspt.eu/js/site-nxweb/fh.js) para a
   cópia local, para poderes testar alterações ao fh.js.

   Uso: node serve.mjs [porta]   (por omissão 5173)
   ───────────────────────────────────────────────────────────── */

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('.', import.meta.url));
const PORT = Number(process.argv[2]) || 5173;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

const REMOTE_FH = /\/js\/site-nxweb\/fh\.js(\?.*)?$/;

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let pathname = decodeURIComponent(url.pathname);

    // Rewrite: fh.js "remoto" → cópia local
    if (REMOTE_FH.test(pathname)) {
      const body = await readFile(join(ROOT, 'fh.js'));
      res.writeHead(200, {
        'Content-Type': MIME['.js'],
        'Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(body);
      return;
    }

    // Ficheiro local
    if (pathname.endsWith('/')) pathname += 'index.html';
    const safe = normalize(pathname).replace(/^([/\\]|\.\.)+/, '');
    const file = join(ROOT, safe);

    if (!file.startsWith(ROOT)) {
      res.writeHead(403); res.end('Forbidden'); return;
    }

    const body = await readFile(file);

    // HTML: apontar o fh.js para a cópia local (o URL absoluto de produção
    // vinha da cache do browser e nunca chegava ao rewrite acima)
    let out = body;
    if (extname(file).toLowerCase() === '.html') {
      out = Buffer.from(
        body.toString('utf8').replace(
          /https:\/\/kikalabs-server\.nexuspt\.eu\/js\/site-nxweb\/fh\.js/g,
          '/js/site-nxweb/fh.js'
        )
      );
    }

    res.writeHead(200, {
      'Content-Type': MIME[extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    });
    res.end(out);
  } catch (err) {
    res.writeHead(err.code === 'ENOENT' ? 404 : 500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.code === 'ENOENT' ? '404 Not Found' : '500 Internal Server Error');
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`NexusPT dev server → http://127.0.0.1:${PORT}/  (fh.js local, Ctrl+C para parar)`);
});
