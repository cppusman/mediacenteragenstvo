(function() {
    // Анимация появления
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight - 80 && rect.bottom > 0) {
                el.classList.add('show');
            }
        });
    }

    // Анимация карточек и круга
    function animateCardsAndRing() {
        const cardsContainer = document.getElementById('cardsContainer');
        if (!cardsContainer) return;
        const rect = cardsContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 100 && rect.bottom > 100) {
            const bloggerCard = document.getElementById('cardBlogger');
            const customerCard = document.getElementById('cardCustomer');
            const ring = document.getElementById('irregularRing');
            
            if (bloggerCard && !bloggerCard.classList.contains('show-card')) {
                setTimeout(() => bloggerCard.classList.add('show-card'), 150);
                setTimeout(() => customerCard.classList.add('show-card'), 400);
                setTimeout(() => { 
                    if (ring) ring.classList.add('show-ring');
                }, 650);
            }
        }
    }

    window.addEventListener('scroll', () => {
        checkFade();
        animateCardsAndRing();
    });
    
    window.addEventListener('load', () => {
        checkFade();
        animateCardsAndRing();
    });
    
    setTimeout(() => {
        checkFade();
        animateCardsAndRing();
    }, 200);
    
    // БУРГЕР МЕНЮ
    const burger = document.getElementById('burgerMenu');
    const nav = document.getElementById('navBar');
    const menuLinks = document.querySelectorAll('.menu a');
    
    if (burger && nav) {
        burger.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active');
            burger.classList.toggle('open');
            
            const spans = burger.children;
            if (burger.classList.contains('open')) {
                if (spans[0]) spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                if (spans[1]) spans[1].style.opacity = '0';
                if (spans[2]) spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                if (spans[0]) spans[0].style.transform = 'none';
                if (spans[1]) spans[1].style.opacity = '1';
                if (spans[2]) spans[2].style.transform = 'none';
            }
        });
        
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                burger.classList.remove('open');
                const spans = burger.children;
                if (spans[0]) spans[0].style.transform = 'none';
                if (spans[1]) spans[1].style.opacity = '1';
                if (spans[2]) spans[2].style.transform = 'none';
            });
        });
        
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('active') && !nav.contains(e.target)) {
                nav.classList.remove('active');
                burger.classList.remove('open');
                const spans = burger.children;
                if (spans[0]) spans[0].style.transform = 'none';
                if (spans[1]) spans[1].style.opacity = '1';
                if (spans[2]) spans[2].style.transform = 'none';
            }
        });
    }
    
    // КНОПКИ
    const allJoinBtns = document.querySelectorAll('.join');
    allJoinBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('✨ Добро пожаловать! Связь с заказчиками и доступ к проектам.');
        });
    });
    
    const getAccessBtn = document.querySelector('.neon');
    const learnMoreBtn = document.querySelector('.ghost');
    if (getAccessBtn) {
        getAccessBtn.addEventListener('click', () => alert('📢 Вы получите доступ к базе коммерческих и бартерных заказов!'));
    }
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => alert('🔍 Подробнее: агрегатор собирает 4000+ проектов, 15+ новых еженедельно.'));
    }
    
    // Корректировка круга на мобилке
    function fixMobileRing() {
        const ring = document.getElementById('irregularRing');
        if (window.innerWidth <= 600 && ring) {
            ring.style.width = '260px';
            ring.style.height = '260px';
        } else if (ring) {
            ring.style.width = '420px';
            ring.style.height = '420px';
        }
    }
    window.addEventListener('resize', fixMobileRing);
    fixMobileRing();
    
    setTimeout(() => {
        const bloggerCard = document.getElementById('cardBlogger');
        if (bloggerCard && !bloggerCard.classList.contains('show-card')) {
            const rect = document.querySelector('.about')?.getBoundingClientRect();
            if (rect && rect.top < window.innerHeight - 50) {
                bloggerCard.classList.add('show-card');
                document.getElementById('cardCustomer')?.classList.add('show-card');
                document.getElementById('irregularRing')?.classList.add('show-ring');
            }
        }
    }, 500);
})();