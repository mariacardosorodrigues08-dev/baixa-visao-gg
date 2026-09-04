// Rolagem suave no menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Se a imagem não carregar, avisa o motivo
const imagem = document.querySelector('.imagem-container img');
if (imagem) {
    imagem.addEventListener('error', () => {
        console.log("ERRO: A imagem não foi encontrada. Verifique se o nome do arquivo é EXATAMENTE: WhatsApp Image 2026-09-04 at 09.14.51.jpeg e se está na mesma pasta do index.html");
        alert("A imagem não abriu porque o nome não está igual. Renomeie para: WhatsApp Image 2026-09-04 at 09.14.51.jpeg");
    });
    
    // Clique abre em tela cheia
    imagem.addEventListener('click', () => {
        window.open(imagem.src, '_blank');
    });
}

console.log("Site carregado - tema branco com azul escuro");
