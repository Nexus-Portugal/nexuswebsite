#!/usr/bin/env node
/* Servidor de desenvolvimento local. Uso: node serve.mjs [porta] */

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

    if (pathname.endsWith('/')) pathname += 'index.html';
    const safe = normalize(pathname).replace(/^([/\\]|\.\.)+/, '');
    let file = join(ROOT, safe);

    // Permite /servico/nmail em vez de /servico/nmail.html, como em produção.
    if (!extname(file)) file += '.html';

    if (!file.startsWith(ROOT)) {
      res.writeHead(403); res.end('Forbidden'); return;
    }

    const body = await readFile(file);

    // Aponta o fh.js remoto para a cópia local (o URL de produção vinha da cache do browser).
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
