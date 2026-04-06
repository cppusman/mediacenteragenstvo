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

const burger = document.getElementById('burger-menu');
const nav = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.menu a');

if (burger) {
    burger.addEventListener('click', () => {
        // Переключаем класс active: это и открывает меню, и превращает полоски в крестик
        nav.classList.toggle('active');
        
        // Блокируем скролл страницы, когда меню открыто (чтобы "фигня" не дергалась)
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
}

// Закрываем меню при клике на любую ссылку
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});