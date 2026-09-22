# 💚 ONG Esperança Solidária

Aplicação web desenvolvida no formato **SPA (Single Page Application)** para a **ONG Esperança Solidária**, criada com foco na acessibilidade digital, estrutura semântica limpa em HTML5, estilização moderna e um sistema robusto de rotas e formulários.

Aceso ao projeto em produção: [ong-esperanca-solidaria.vercel.app](https://ong-esperanca-solidaria.vercel.app)

---

## 🚀 Sobre o Projeto
Este projeto tem como objetivo principal dar visibilidade às iniciativas da ONG, facilitando o acesso da comunidade aos projetos sociais, canais de contacto e apoios prestados. A aplicação foi construída a pensar na inclusão de todos os utilizadores, respeitando rigorosos padrões de acessibilidade.

---

## 🛠️ Tecnologias Utilizadas
O projeto foi desenvolvido nativamente utilizando as seguintes tecnologias e ferramentas:
* **HTML5:** Estrutura semântica orientada às boas práticas de acessibilidade.
* **CSS3:** Estilização responsiva e moderna.
* **JavaScript (ES6+):** Lógica de navegação dinâmica em SPA e validação de formulários.
* **Git & GitHub:** Controlo de versões e versionamento de código.
* **Vercel:** Plataforma de alojamento e integração contínua (CI/CD) para o ambiente de produção.

---

## ♿ Acessibilidade (WCAG 2.1)
O desenvolvimento seguiu diretrizes essenciais de acessibilidade para garantir uma experiência inclusiva:
* Contraste visual adequado entre textos e fundos.
* Utilização correta de tags semânticas (como `<header>`, `<nav>`, `<main>`, `<footer>`) para suporte a leitores de ecrã.
* Atributos descritivos `alt` em elementos visuais.

---

## ⚙️ Configuração de Rotas SPA (`vercel.json`)
Como se trata de uma aplicação do tipo *Single Page Application*, o projeto conta com um ficheiro de configuração `vercel.json` na raiz para gerir o encaminhamento dinâmico das páginas e evitar erros de rota (*Erro 404*) em ambiente de produção na nuvem:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
