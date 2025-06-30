import React from 'react';
import './Cookies.css';

const Cookies = () => {
  return (
    <div className="content">
      <div className="cookies-container">
        <h1 className="cookies-title">Política de Cookies</h1>
        
        <section className="cookies-section">
          <h2>1. Introdução</h2>
          <p>A Nexus Solutions (referida como "Nexus", "NexusPT", "NexusWeb", "nós" ou "nosso") utiliza cookies e tecnologias semelhantes nos nossos websites e aplicações. Esta Política de Cookies explica o que são cookies, como os utilizamos, as suas escolhas relativamente a cookies e outras informações importantes.</p>
          <p>Ao continuar a navegar ou a utilizar os nossos serviços, concorda com a utilização de cookies conforme descrito nesta política. Esta política deve ser lida em conjunto com a nossa <a href="/privacidade">Política de Privacidade</a>.</p>
        </section>
        
        <section className="cookies-section">
          <h2>2. O que são Cookies?</h2>
          <p>Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo (computador, tablet, smartphone) quando visita um website. Os cookies são amplamente utilizados para fazer os websites funcionarem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.</p>
          <p>Além dos cookies, também podemos utilizar outras tecnologias semelhantes, como web beacons, pixels de rastreamento, armazenamento local (localStorage e sessionStorage) e outras tecnologias que ajudam a melhorar a sua experiência online.</p>
        </section>
        
        <section className="cookies-section">
          <h2>3. Tipos de Cookies que Utilizamos</h2>
          <p>Utilizamos diferentes tipos de cookies nos nossos websites e serviços, que podem ser categorizados da seguinte forma:</p>
          
          <div className="cookie-types">
            <div className="cookie-type">
              <h4><i className="fas fa-cog"></i> Cookies Essenciais</h4>
              <p>Estes cookies são necessários para o funcionamento básico dos nossos websites e serviços. Permitem-lhe navegar no site e utilizar as suas funcionalidades, como acesso a áreas seguras. Sem estes cookies, os serviços solicitados não podem ser fornecidos.</p>
            </div>
            
            <div className="cookie-type">
              <h4><i className="fas fa-chart-bar"></i> Cookies Analíticos</h4>
              <p>Estes cookies ajudam-nos a entender como os visitantes interagem com os nossos websites, recolhendo e relatando informações anonimamente. Permitem-nos melhorar continuamente a estrutura, conteúdo e funcionalidade dos nossos sites.</p>
            </div>
            
            <div className="cookie-type">
              <h4><i className="fas fa-bullseye"></i> Cookies de Publicidade</h4>
              <p>Estes cookies são utilizados para mostrar publicidade relevante para si, tanto nos nossos websites como em websites de terceiros. São também utilizados para limitar o número de vezes que vê um anúncio e para ajudar a medir a eficácia das campanhas publicitárias.</p>
            </div>
            
            <div className="cookie-type">
              <h4><i className="fas fa-user-cog"></i> Cookies de Funcionalidade</h4>
              <p>Estes cookies permitem que o website forneça funcionalidades e personalização melhoradas. Podem ser definidos por nós ou por fornecedores terceiros cujos serviços adicionámos às nossas páginas.</p>
            </div>
            
            <div className="cookie-type">
              <h4><i className="fas fa-shield-alt"></i> Cookies de Segurança</h4>
              <p>Utilizamos cookies de segurança para autenticar utilizadores, prevenir o uso fraudulento de credenciais de login e proteger os dados dos utilizadores de terceiros não autorizados.</p>
            </div>
            
            <div className="cookie-type">
              <h4><i className="fas fa-globe"></i> Cookies de Terceiros</h4>
              <p>Alguns cookies são colocados por serviços de terceiros que aparecem nas nossas páginas. Estes cookies permitem a integração com serviços externos e fornecem funcionalidades adicionais para melhorar a sua experiência.</p>
            </div>
          </div>
        </section>
        
        <section className="cookies-section">
          <h2>4. Cookies Específicos que Utilizamos</h2>
          <p>A tabela abaixo fornece detalhes sobre os cookies específicos utilizados nos nossos websites:</p>
          
          <div style={{overflowX: 'auto'}}>
            <table className="cookies-table">
              <thead>
                <tr>
                  <th>Nome do Cookie</th>
                  <th>Fornecedor</th>
                  <th>Finalidade</th>
                  <th>Duração</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_cf_bm</td>
                  <td>Cloudflare</td>
                  <td>Utilizado para distinguir entre humanos e bots e mitigar ataques.</td>
                  <td>30 minutos</td>
                  <td>Essencial</td>
                </tr>
                <tr>
                  <td>__cf_turnstile</td>
                  <td>Cloudflare</td>
                  <td>Verifica se o tráfego é legítimo e serve como alternativa ao CAPTCHA.</td>
                  <td>1 dia</td>
                  <td>Essencial</td>
                </tr>
                <tr>
                  <td>_ga, _gid, _gat</td>
                  <td>Google Analytics</td>
                  <td>Cookies utilizados para distinguir utilizadores e regular a taxa de solicitações.</td>
                  <td>2 anos, 24 horas, 1 minuto</td>
                  <td>Analítico</td>
                </tr>
                <tr>
                  <td>_hjid, _hjSessionUser</td>
                  <td>Hotjar</td>
                  <td>Define um ID único para a sessão para recolher dados sobre a visita do utilizador (tv.nexuspt.eu).</td>
                  <td>1 ano, 1 ano</td>
                  <td>Analítico</td>
                </tr>
                <tr>
                  <td>MUID, CLARITY</td>
                  <td>Microsoft Clarity</td>
                  <td>Utilizados para análise de sessão e geração de mapas de calor.</td>
                  <td>1 ano, sessão</td>
                  <td>Analítico</td>
                </tr>
                <tr>
                  <td>Various</td>
                  <td>AdCash</td>
                  <td>Utilizados para gerir e personalizar anúncios publicitários.</td>
                  <td>Variável</td>
                  <td>Publicidade</td>
                </tr>
                <tr>
                  <td>hc_accessibility</td>
                  <td>hCaptcha</td>
                  <td>Utilizado para verificar se o utilizador é humano.</td>
                  <td>Sessão</td>
                  <td>Essencial</td>
                </tr>
                <tr>
                  <td>_GRECAPTCHA</td>
                  <td>Google reCAPTCHA</td>
                  <td>Fornece proteção contra spam e abuso.</td>
                  <td>6 meses</td>
                  <td>Essencial</td>
                </tr>
                <tr>
                  <td>Cookie de Sessão</td>
                  <td>Nexus</td>
                  <td>Mantém o estado de autenticação do utilizador nos serviços Nexus.</td>
                  <td>Variável</td>
                  <td>Essencial</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>Esta lista pode ser atualizada periodicamente à medida que melhoramos os nossos serviços ou introduzimos novos parceiros.</p>
        </section>
        
        <section className="cookies-section">
          <h2>5. Serviços de Terceiros e Cookies</h2>
          <p>Utilizamos diversos serviços de terceiros nos nossos websites que podem definir seus próprios cookies. Estes serviços incluem:</p>
          
          <ul>
            <li><strong>Cloudflare:</strong> Para DNS, Turnstile (verificação de segurança), Rocket Loader e entrega de fontes.</li>
            <li><strong>AdCash:</strong> Para monetização através de publicidade em alguns dos nossos sites.</li>
            <li><strong>Microsoft Clarity:</strong> Para análise de comportamento dos utilizadores, incluindo mapas de calor.</li>
            <li><strong>Hotjar:</strong> Para inquéritos e feedback dos utilizadores (apenas em tv.nexuspt.eu).</li>
            <li><strong>hCaptcha/reCAPTCHA:</strong> Para verificar que os utilizadores são humanos e não robots.</li>
            <li><strong>Google Analytics:</strong> Para análise de tráfego e comportamento do utilizador.</li>
          </ul>
          
          <p>Cada um destes serviços tem a sua própria política de cookies e privacidade. Recomendamos que consulte as políticas de privacidade destes fornecedores para obter informações mais detalhadas sobre como utilizam os cookies:</p>
          
          <ul>
            <li><a href="https://www.cloudflare.com/cookie-policy/">Cloudflare Cookie Policy</a></li>
            <li><a href="https://www.adcash.com/legal/privacy-policy/">AdCash Privacy Policy</a></li>
            <li><a href="https://privacy.microsoft.com/en-us/privacystatement">Microsoft Privacy Statement</a></li>
            <li><a href="https://www.hotjar.com/legal/policies/cookie-information/">Hotjar Cookie Information</a></li>
            <li><a href="https://www.hcaptcha.com/privacy">hCaptcha Privacy Policy</a></li>
            <li><a href="https://policies.google.com/privacy">Google Privacy Policy</a></li>
          </ul>
        </section>
        
        <section className="cookies-section">
          <h2>6. Gestão de Cookies</h2>
          <p>Você tem o direito de decidir se aceita ou rejeita cookies. A maioria dos navegadores está configurada para aceitar cookies por padrão, mas você pode modificar as suas configurações para bloquear cookies se preferir. No entanto, bloquear todos os cookies terá um impacto negativo na usabilidade de muitos websites, incluindo o nosso.</p>
          
          <h3>6.1. Configurações do Navegador</h3>
          <p>Pode controlar e gerir cookies através das configurações do seu navegador. Aqui está como você pode fazê-lo nos navegadores mais populares:</p>
          
          <ul>
            <li><strong>Google Chrome:</strong> Menu &gt; Configurações &gt; Privacidade e segurança &gt; Cookies e outros dados do site</li>
            <li><strong>Mozilla Firefox:</strong> Menu &gt; Opções &gt; Privacidade e Segurança &gt; Cookies e dados do site</li>
            <li><strong>Safari:</strong> Preferências &gt; Privacidade &gt; Cookies e dados do website</li>
            <li><strong>Microsoft Edge:</strong> Menu &gt; Configurações &gt; Cookies e permissões do site &gt; Cookies</li>
          </ul>
          
          <h3>6.2. Banner de Consentimento de Cookies</h3>
          <p>Quando visita os nossos websites pela primeira vez, será apresentado um banner de consentimento de cookies que lhe permitirá aceitar ou rejeitar cookies não essenciais. Pode alterar as suas preferências a qualquer momento clicando no link "Configurações de Cookies" no rodapé dos nossos websites.</p>
          
          <h3>6.3. Exclusão de Cookies</h3>
          <p>Você também pode excluir cookies que já estão armazenados no seu dispositivo. O processo varia dependendo do navegador, mas geralmente pode ser feito através das mesmas configurações mencionadas acima.</p>
        </section>
        
        <section className="cookies-section">
          <h2>7. Impacto da Desativação de Cookies</h2>
          <p>Desativar certos cookies pode afetar a funcionalidade dos nossos websites. Alguns dos possíveis impactos incluem:</p>
          
          <ul>
            <li>Não conseguir iniciar sessão ou manter-se conectado às áreas de conta</li>
            <li>Funcionalidades específicas do site podem não funcionar corretamente</li>
            <li>Preferências e personalizações não serão lembradas entre visitas</li>
            <li>Os serviços de segurança como CAPTCHA podem tornar-se mais intrusivos</li>
            <li>Pode ver anúncios menos relevantes (se optar por desativar cookies de publicidade)</li>
          </ul>
        </section>
        
        <section className="cookies-section">
          <h2>8. Tecnologias Semelhantes</h2>
          <p>Além dos cookies, também utilizamos outras tecnologias para recolher e armazenar informações, incluindo:</p>
          
          <ul>
            <li><strong>Armazenamento Local HTML5:</strong> Semelhante aos cookies, mas pode armazenar maiores volumes de informação.</li>
            <li><strong>Web Beacons:</strong> Pequenas imagens transparentes que permitem-nos, por exemplo, saber se abriu um e-mail enviado por nós.</li>
            <li><strong>Pixels de rastreamento:</strong> Pequenos gráficos que permitem-nos monitorizar comportamentos em websites e campanhas.</li>
            <li><strong>Identificadores de dispositivo:</strong> Informações únicas sobre o seu dispositivo que podem ser utilizadas para rastreamento.</li>
          </ul>
          <p>Estas tecnologias são geridas de forma semelhante aos cookies e são cobertas pelas opções de gestão descritas acima.</p>
        </section>
        
        <section className="cookies-section">
          <h2>9. Alterações a Esta Política</h2>
          <p>Podemos atualizar esta Política de Cookies periodicamente para refletir, por exemplo, alterações nos cookies que utilizamos ou por outros motivos operacionais, legais ou regulamentares. Recomendamos que visite regularmente esta página para estar a par de quaisquer alterações. A data da última atualização será sempre indicada no final desta política.</p>
        </section>
        
        <section className="cookies-section">
          <h2>10. Contacto</h2>
          <p>Se tiver alguma questão sobre a nossa utilização de cookies ou outras tecnologias de rastreamento, por favor contacte-nos:</p>
          
          <div className="contact-info">
            <i className="fas fa-envelope"></i>
            <span>Email: <a href="mailto:dados@nexuspt.eu">dados@nexuspt.eu</a></span>
          </div>
          
          <p className="last-update">Última atualização: 12 de março de 2025</p>
        </section>
      </div>
    </div>
  );
};

export default Cookies; 