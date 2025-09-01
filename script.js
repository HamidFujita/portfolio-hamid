// Função para gerenciar as abas
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Função para alternar as abas
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe "active" de todas as abas e conteúdos
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Adiciona "active" para a aba e o conteúdo clicado
        button.classList.add('active');
        document.getElementById(button.getAttribute('data-tab')).classList.add('active');
    });
});

// Exibe a saudação ao clicar no botão
const saudacaoButton = document.getElementById('saudacaoButton');
const saudacao = document.getElementById('saudacao');

saudacaoButton.addEventListener('click', () => {
    saudacao.style.display = 'block';
});
