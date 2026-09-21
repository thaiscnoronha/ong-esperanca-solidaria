// Script de Persistência de Dados com localStorage
function salvarDadosFormulario(evento) {
    evento.preventDefault();
    
    const nome = document.getElementById("nome") ? document.getElementById("nome").value : "";
    const email = document.getElementById("email") ? document.getElementById("email").value : "";
    
    if (!nome || !email) {
        alert("Por favor, preencha todos os campos antes de salvar.");
        return;
    }
    
    // Cria o objeto com os dados do usuário
    const dadosUsuario = {
        nomeDoDoador: nome,
        emailDoDoador: email,
        dataRegistro: new Date().toLocaleDateString()
    };
    
    // Salva no localStorage convertendo para texto (JSON)
    localStorage.setItem("ong_cadastro_usuario", JSON.stringify(dadosUsuario));
    
    alert("Dados salvos com sucesso no localStorage!");
}

// Função para recuperar os dados salvos (se precisar exibir depois)
function carregarDadosSalvos() {
    const dadosSalvos = localStorage.getItem("ong_cadastro_usuario");
    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }
    return null;
}