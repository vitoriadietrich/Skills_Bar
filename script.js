// Seleciona todos os itens de habilidade
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    const fill = item.querySelector('.progress-bar-fill');
    const tooltip = item.querySelector('.tooltip');
    
    // Pega o valor final definido no atributo 'style' do HTML (ex: 90%)
    const targetWidth = fill.style.width;
    
    // Reseta para 0 antes de começar a animação
    fill.style.width = '0%';
    tooltip.style.left = '0%';
    
    // Pequeno delay para garantir que o navegador registre o estado "0"
    setTimeout(() => {
        // Aplica a transição suave via CSS (opcional, mas recomendado)
        fill.style.transition = 'width 1.5s ease-in-out';
        tooltip.style.transition = 'left 1.5s ease-in-out';
        
        // Define o valor final para disparar o movimento
        fill.style.width = targetWidth;
        
        // Ajusta o tooltip para seguir a ponta da barra
        // O "- 13px" é para centralizar o balão sobre a ponta
        tooltip.style.left = `calc(${targetWidth} - 13px)`;
    }, 100);
});