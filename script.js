const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      card.style.transform = "translateY(0)";
      card.style.opacity = "1";
    }
  });
});

const elements = document.querySelectorAll('.fade-in');

function showOnScroll() {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;

        if (pos < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);

window.addEventListener('load', () => {
    showOnScroll();
});

const burger = document.querySelector('#burger-menu');
const nav = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.menu a');

// Открыть/закрыть
burger.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('active');
});

// Закрыть при клике на ссылку
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Закрыть при клике в любое другое место
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
        nav.classList.remove('active');
    }
});