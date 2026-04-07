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

// Функция переключения меню
burger.addEventListener('click', () => {
    // Просто переключаем класс active у родителя (.nav)
    nav.classList.toggle('active');
});

// Закрываем меню при клике на любую ссылку (удобно для лендингов)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Дополнительно: закрытие меню при клике вне его области
document.addEventListener('click', (e) => {
    const isClickInside = nav.contains(e.target);
    if (!isClickInside && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});