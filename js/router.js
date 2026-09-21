// Função principal que gerencia as rotas da SPA
function navegarPara(rota) {
    history.pushState({}, "", rota);
    renderizarConteudo(rota);
}

function renderizarConteudo(rota) {
    const containerPrincipal = document.getElementById('app-container');
    if (!containerPrincipal) return;
    
    containerPrincipal.innerHTML = ''; // Limpa o conteúdo alvo
    
    // Injeta o novo fragmento HTML conforme a rota
    if (rota === '/projetos') {
        containerPrincipal.innerHTML = '<h2>Nossos Projetos</h2><p>Conteúdo carregado dinamicamente via SPA.</p>';
    } else {
        containerPrincipal.innerHTML = '<h2>Início</h2><p>Bem-vindo à página principal da ONG Esperança Solidária.</p>';
    }
}