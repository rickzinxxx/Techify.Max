// Atualização em tempo real do editor HTML
const htmlInput = document.getElementById('html-input');
const htmlPreview = document.getElementById('html-preview');

function updatePreview() {
    const html = htmlInput.value;
    const preview = htmlPreview.contentWindow.document;
    preview.open();
    preview.write(html);
    preview.close();
}

// Atualiza ao digitar
htmlInput.addEventListener('input', updatePreview);

// Atualiza ao carregar a página
updatePreview();

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Destaque na navegação baseado na seção visível
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.style.color = '#fff';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = '#e44d26';
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNav);

// Animação de entrada dos cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Mensagem de boas-vindas no console
console.log('%c🎉 Bem-vindo ao Aprenda HTML!', 'color: #e44d26; font-size: 20px; font-weight: bold;');
console.log('%cComece editando o código no editor em tempo real!', 'color: #666; font-size: 14px;');

// Função para abrir roteiros de vídeo
function abrirRoteiro(arquivo) {
    const caminho = 'videos/' + arquivo;
    window.open(caminho, '_blank');
}

// Adicionar animação nos cards de vídeo também
document.querySelectorAll('.video-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});
