// JS BÁSICO - SEM ACESSIBILIDADE, SÓ EFEITO SUAVE

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Clique na imagem para abrir maior
const img = document.querySelector('.imagem-container img');
if (img) {
    img.addEventListener('click', () => {
        window.open(img.src, '_blank');
    });
}

console.log("Site Visão e Luz carregado - tons azul escuro");
