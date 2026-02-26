document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Scroll Observer for Entry Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-rise');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section > .container, .bento-grid, .cta-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Custom animation trigger for revealed elements
    const revealElements = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };
    const secondaryObserver = new IntersectionObserver(revealElements, observerOptions);
    document.querySelectorAll('section > .container, .bento-grid, .cta-card').forEach(el => {
        secondaryObserver.observe(el);
    });

    // 3. Edition Selector Logic
    const editionBtns = document.querySelectorAll('.edition-btn');
    const editionColors = {
        original: 'linear-gradient(135deg, silver 0%, #0044cc 100%)',
        red: 'linear-gradient(135deg, #ff0000 0%, #8b0000 100%)',
        blue: 'linear-gradient(135deg, #0000ff 0%, #00008b 100%)',
        yellow: 'linear-gradient(135deg, #ffff00 0%, #ffd700 100%)'
    };

    editionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update buttons
            editionBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update product visual (if it existed) or just color hints
            const edition = btn.dataset.edition;
            console.log(`Switching to ${edition} edition`);

            // Apply color to a temporary placeholder if needed
            const heroCan = document.querySelector('.hero-can');
            if (heroCan) {
                heroCan.style.background = editionColors[edition];
            }
        });
    });

    // 4. Parallax Effect on Scroll
    const scrollContainer = document.querySelector('.scroll-container');
    scrollContainer.addEventListener('scroll', () => {
        const scrolled = scrollContainer.scrollTop;

        // Parallax for hero can
        const heroCan = document.querySelector('.hero-can');
        if (heroCan) {
            heroCan.style.transform = `translateY(${scrolled * 0.2}px) rotate(${5 + (scrolled * 0.02)}deg)`;
        }

        // Parallax for headlines
        const heroH1 = document.querySelector('.hero h1');
        if (heroH1) {
            heroH1.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // 5. Form Submission Handling
    const regForm = document.getElementById('registration-form');
    const successMsg = document.getElementById('form-success');

    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Animation for submission
            const submitBtn = regForm.querySelector('.btn-submit');
            submitBtn.innerHTML = 'LAUNCHING...';
            submitBtn.style.opacity = '0.7';

            setTimeout(() => {
                regForm.style.display = 'none';
                successMsg.style.display = 'block';

                // Add an extra "pizzazz" for success
                successMsg.classList.add('animate-rise');
                console.log('User registered successfully.');
            }, 1500);
        });
    }

    // 6. Digital Archeology: Secret Trigger
    let keyBuffer = '';
    const secretCode = 'WINGS';

    document.addEventListener('keydown', (e) => {
        keyBuffer += e.key.toUpperCase();
        if (keyBuffer.length > 5) keyBuffer = keyBuffer.substring(1);

        if (keyBuffer === secretCode) {
            console.log("%c ASCENSION INITIATED ", "background: #D00000; color: white; font-weight: bold;");
            setTimeout(() => {
                window.location.href = 'secret.html';
            }, 500);
        }
    });

    console.log("%c RED BULL ANTIGRAVITY %c ENGINE INITIALIZED ", "background: #0D1B2A; color: white; font-weight: bold; padding: 2px 5px;", "color: #FFC300;");
    console.log("CLUE: Something is hidden in the clouds. Type the brand's true promise.");
});
