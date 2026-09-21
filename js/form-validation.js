// Script de Validação de Formulário e Feedback Visual
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");
    
    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault(); // Evita o recarregamento padrão da página
            
            const campoNome = document.getElementById("nome");
            const campoEmail = document.getElementById("email");
            
            if (campoNome && campoNome.value.trim() === "") {
                exibirFeedback("Por favor, preencha o campo de nome.", "erro");
                campoNome.focus();
                return;
            }
            
            if (campoEmail && campoEmail.value.trim() === "") {
                exibirFeedback("Por favor, insira um e-mail válido.", "erro");
                campoEmail.focus();
                return;
            }
            
            // Sucesso na validação
            exibirFeedback("Cadastro realizado com sucesso! Obrigado por apoiar a ONG.", "sucesso");
            formulario.reset();
        });
    }
});

function exibirFeedback(mensagem, tipo) {
    let containerFeedback = document.getElementById("feedback-msg");
    
    if (!containerFeedback) {
        containerFeedback = document.createElement("div");
        containerFeedback.id = "feedback-msg";
        document.body.appendChild(containerFeedback);
    }
    
    containerFeedback.textContent = mensagem;
    containerFeedback.className = tipo === "erro" ? "alerta-erro" : "alerta-sucesso";
    
    // Remove a mensagem após 4 segundos
    setTimeout(() => {
        containerFeedback.textContent = "";
        containerFeedback.className = "";
    }, 4000);
}