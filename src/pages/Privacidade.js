import React from 'react';
import './Privacidade.css';

const Privacidade = () => {
  return (
    <div className="content">
      <div className="privacy-container">
        <h1 className="privacy-title">Política de Privacidade</h1>
        
        <section className="privacy-section">
          <h2>1. Introdução</h2>
          <p>A Nexus Solutions (referida como "Nexus", "NexusPT", "NexusWeb", "nós" ou "nosso") valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade descreve como recolhemos, utilizamos, processamos e armazenamos as suas informações pessoais quando utiliza os nossos serviços, incluindo os nossos websites, aplicações e plataformas.</p>
          <p>Ao aceder ou utilizar qualquer um dos nossos serviços, concorda com os termos e práticas descritos nesta Política de Privacidade. Se não concordar com qualquer parte desta política, por favor não utilize os nossos serviços.</p>
        </section>
        
        <section className="privacy-section">
          <h2>2. Dados que Recolhemos</h2>
          <p>Recolhemos vários tipos de informações através dos nossos serviços para melhorar a sua experiência e oferecer funcionalidades adequadas. Estas informações podem incluir:</p>
          
          <h3>2.1. Informações que nos fornece diretamente</h3>
          <ul>
            <li><strong>Informações de conta:</strong> Nome de utilizador, endereço de e-mail e credenciais de autenticação para criação de conta e acesso aos nossos serviços.</li>
            <li><strong>Informações de perfil:</strong> Dados adicionais que opta por incluir no seu perfil ou conta.</li>
            <li><strong>Comunicações:</strong> Informações que nos fornece quando contacta o nosso suporte, responde a inquéritos ou interage connosco através de outros canais.</li>
          </ul>
          
          <h3>2.2. Informações recolhidas automaticamente</h3>
          <ul>
            <li><strong>Dados de utilização:</strong> Informações sobre como interage com os nossos serviços, incluindo páginas visitadas, recursos utilizados e tempo gasto.</li>
            <li><strong>Informações do dispositivo:</strong> Dados sobre o seu dispositivo, incluindo modelo, sistema operativo, navegador, idioma e identificadores únicos.</li>
            <li><strong>Dados de localização:</strong> Informações de localização geográfica baseadas no seu endereço IP ou outras tecnologias.</li>
            <li><strong>Registos e análises:</strong> Registos de atividades, erros e outras estatísticas de uso para melhorar os nossos serviços.</li>
          </ul>
        </section>
        
        <section className="privacy-section">
          <h2>3. Serviços de Terceiros</h2>
          <p>Utilizamos diversos serviços de terceiros para melhorar a funcionalidade, segurança e desempenho dos nossos websites e aplicações. Cada um destes serviços recolhe e processa dados de acordo com as suas próprias políticas de privacidade.</p>
          
          <div className="service-list">
            <div className="service-item">
              <h4><i className="fas fa-shield-alt"></i> Cloudflare</h4>
              <p>Utilizamos os serviços da Cloudflare para DNS, Turnstile (verificação de segurança), Rocket Loader e entrega de fontes. A Cloudflare pode recolher endereços IP e outras informações técnicas para fornecer os seus serviços de segurança e otimização.</p>
            </div>
            
            <div className="service-item">
              <h4><i className="fas fa-ad"></i> AdCash</h4>
              <p>Em alguns dos nossos sites, utilizamos AdCash para monetização através de publicidade. Este serviço pode utilizar cookies e tecnologias semelhantes para apresentar anúncios relevantes e rastrear o desempenho das campanhas publicitárias.</p>
            </div>
            
            <div className="service-item">
              <h4><i className="fas fa-chart-line"></i> Microsoft Clarity</h4>
              <p>Utilizamos o Microsoft Clarity em quase todos os nossos sites para analisar o comportamento dos utilizadores, incluindo mapas de calor e gravações de sessões anónimas, ajudando-nos a entender como os utilizadores interagem com as nossas páginas.</p>
            </div>
            
            <div className="service-item">
              <h4><i className="fas fa-comments"></i> Hotjar</h4>
              <p>Apenas no site tv.nexuspt.eu, utilizamos o Hotjar para inquéritos e feedback dos utilizadores, permitindo-nos recolher informações sobre a experiência do utilizador e obter sugestões de melhoria.</p>
            </div>
            
            <div className="service-item">
              <h4><i className="fas fa-robot"></i> hCaptcha</h4>
              <p>Utilizamos o hCaptcha para verificar que os utilizadores são humanos e não robots, protegendo os nossos formulários e funcionalidades contra abusos automatizados.</p>
            </div>
            
            <div className="service-item">
              <h4><i className="fas fa-check-circle"></i> reCAPTCHA</h4>
              <p>Em algumas situações, utilizamos o Google reCAPTCHA para verificação de utilizadores e proteção contra spam e abusos automatizados.</p>
            </div>
            
            <div className="service-item">
              <h4><i className="fas fa-analytics"></i> Google Analytics</h4>
              <p>Utilizamos o Google Analytics para recolher informações sobre como os utilizadores interagem com os nossos sites, incluindo páginas visitadas, tempo de permanência e dados demográficos básicos.</p>
            </div>
          </div>
          
          <p>Cada um destes serviços opera de acordo com as suas próprias políticas de privacidade, e encorajamos os utilizadores a consultarem essas políticas para obterem informações mais detalhadas sobre as suas práticas de recolha e processamento de dados.</p>
        </section>
        
        <section className="privacy-section">
          <h2>4. Como Utilizamos as Suas Informações</h2>
          <p>Utilizamos as informações recolhidas para os seguintes fins:</p>
          
          <ul>
            <li><strong>Fornecer e melhorar os serviços:</strong> Para operar, manter e melhorar as nossas plataformas e serviços.</li>
            <li><strong>Autenticação e segurança:</strong> Para verificar a sua identidade, proteger as suas contas e garantir a segurança dos nossos serviços.</li>
            <li><strong>Personalização:</strong> Para personalizar a sua experiência e oferecer conteúdo e funcionalidades relevantes.</li>
            <li><strong>Análise e otimização:</strong> Para analisar tendências de utilização, monitorizar o desempenho e otimizar a experiência do utilizador.</li>
            <li><strong>Comunicações:</strong> Para responder às suas solicitações, fornecer suporte e enviar notificações relacionadas com o serviço.</li>
            <li><strong>Cumprimento legal:</strong> Para cumprir obrigações legais e regulamentares aplicáveis.</li>
            <li><strong>Deteção e prevenção de fraudes:</strong> Para identificar, investigar e prevenir atividades fraudulentas ou violações dos nossos termos de serviço.</li>
          </ul>
        </section>
        
        <section className="privacy-section">
          <h2>5. Partilha de Informações</h2>
          <p>Podemos partilhar as suas informações com:</p>
          
          <ul>
            <li><strong>Fornecedores de serviços:</strong> Empresas que nos ajudam a fornecer e melhorar os nossos serviços, como os mencionados na secção "Serviços de Terceiros".</li>
            <li><strong>Parceiros de negócios:</strong> Em alguns casos, podemos partilhar informações com parceiros de negócios para fornecer serviços específicos ou ofertas conjuntas.</li>
            <li><strong>Quando exigido por lei:</strong> Para cumprir com obrigações legais, responder a processos legais ou proteger os nossos direitos e segurança.</li>
            <li><strong>Com o seu consentimento:</strong> Em outras circunstâncias, com o seu consentimento explícito.</li>
          </ul>
          
          <p>Não vendemos as suas informações pessoais a terceiros para fins de marketing.</p>
        </section>
        
        <section className="privacy-section">
          <h2>6. Os Seus Direitos e Escolhas</h2>
          <p>De acordo com o Regulamento Geral de Proteção de Dados (RGPD) e outras leis de privacidade aplicáveis, pode ter os seguintes direitos:</p>
          
          <ul>
            <li><strong>Acesso:</strong> Solicitar acesso às suas informações pessoais que processamos.</li>
            <li><strong>Retificação:</strong> Solicitar a correção de informações imprecisas ou incompletas.</li>
            <li><strong>Eliminação:</strong> Solicitar a eliminação das suas informações pessoais em determinadas circunstâncias.</li>
            <li><strong>Restrição:</strong> Solicitar a restrição do processamento das suas informações pessoais.</li>
            <li><strong>Oposição:</strong> Opor-se ao processamento das suas informações pessoais para determinados fins.</li>
            <li><strong>Portabilidade de dados:</strong> Solicitar uma cópia das suas informações pessoais num formato estruturado e legível por máquina.</li>
            <li><strong>Revogação do consentimento:</strong> Revogar qualquer consentimento que tenha dado anteriormente.</li>
          </ul>
          
          <p>Para exercer qualquer um destes direitos, entre em contacto connosco através do endereço de e-mail fornecido abaixo.</p>
        </section>
        
        <section className="privacy-section">
          <h2>7. Segurança dos Dados</h2>
          <p>Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger as suas informações pessoais contra perda acidental, acesso não autorizado, utilização indevida, alteração e divulgação. No entanto, nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta das suas informações.</p>
        </section>
        
        <section className="privacy-section">
          <h2>8. Retenção de Dados</h2>
          <p>Mantemos as suas informações pessoais apenas pelo tempo necessário para cumprir os fins para os quais foram recolhidas, incluindo para satisfazer requisitos legais, contabilísticos ou de relatórios. Os critérios utilizados para determinar os nossos períodos de retenção incluem:</p>
          
          <ul>
            <li>O período durante o qual temos uma relação contínua consigo</li>
            <li>Se existe uma obrigação legal à qual estamos sujeitos</li>
            <li>Se a retenção é aconselhável à luz da nossa posição legal</li>
          </ul>
        </section>
        
        <section className="privacy-section">
          <h2>9. Transferências Internacionais</h2>
          <p>As suas informações pessoais podem ser transferidas para, e processadas em, países diferentes do seu país de residência. Estes países podem ter leis de proteção de dados diferentes das do seu país. Quando transferimos informações para fora do Espaço Económico Europeu (EEE), garantimos que existem salvaguardas adequadas em vigor para proteger os seus dados.</p>
        </section>
        
        <section className="privacy-section">
          <h2>10. Crianças</h2>
          <p>Os nossos serviços não se destinam a crianças menores de 16 anos, e não recolhemos intencionalmente informações pessoais de crianças. Se descobrirmos que recolhemos informações pessoais de uma criança menor de 16 anos sem verificação do consentimento parental, tomaremos medidas para remover essas informações dos nossos servidores.</p>
        </section>
        
        <section className="privacy-section">
          <h2>11. Alterações a Esta Política</h2>
          <p>Podemos atualizar esta Política de Privacidade periodicamente para refletir alterações nas nossas práticas de informação ou alterações legislativas. Encorajamos a revisão periódica desta política para se manter informado sobre como protegemos as suas informações. Publicaremos quaisquer alterações a esta política no nosso website e, se as alterações forem significativas, forneceremos um aviso mais proeminente.</p>
        </section>
        
        <section className="privacy-section">
          <h2>12. Contacto</h2>
          <p>Se tiver dúvidas, preocupações ou comentários sobre esta Política de Privacidade ou as nossas práticas de dados, entre em contacto connosco:</p>
          
          <div className="contact-info">
            <i className="fas fa-envelope"></i>
            <span>Email: <a href="mailto:dados@nexuspt.eu">dados@nexuspt.eu</a></span>
          </div>
          
          <p>Responderemos ao seu pedido o mais rapidamente possível, normalmente dentro de um mês.</p>
          <p className="last-update">Última atualização: 12 de março de 2025</p>
        </section>
      </div>
    </div>
  );
};

export default Privacidade; 