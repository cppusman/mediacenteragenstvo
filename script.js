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

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('#burger-menu');
    const nav = document.querySelector('.nav');

    if (burger && nav) {
        burger.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active');
            console.log('Клик по бургеру');
        });

        // Закрываем при клике на любую ссылку в меню
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => nav.classList.remove('active'));
        });
    }
});