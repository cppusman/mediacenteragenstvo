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

// script.js (в конец)

const burgerMenu = document.getElementById('burger-menu');
const nav = document.querySelector('.nav');

if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active'); // Вешаем/снимаем класс 'active' на .nav
    });
}