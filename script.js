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
        // При клике на бургер добавляем/убираем класс active
        burger.onclick = (e) => {
            e.stopPropagation(); // Чтобы клик не улетал дальше
            nav.classList.toggle('active');
        };

        // Закрываем меню, если кликнули на любую ссылку внутри него
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });

        // Закрываем меню, если кликнули в любое место сайта вне меню
        document.onclick = (e) => {
            if (!nav.contains(e.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        };
    }
});