// ============================================
// CARROUSEL HERO
// ============================================

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let carouselInterval;

function initCarousel() {
    if (slides.length === 0) return; // Pas de carrousel sur cette page
    
    // Afficher la première slide
    showSlide(0);
    
    // Auto-play
    startCarousel();
    
    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', () => {
        stopCarousel();
        prevSlide();
        startCarousel();
    });
    
    if (nextBtn) nextBtn.addEventListener('click', () => {
        stopCarousel();
        nextSlide();
        startCarousel();
    });
    
    // Indicateurs
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopCarousel();
            showSlide(index);
            startCarousel();
        });
    });
    
    // Pause au survol
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopCarousel);
        carousel.addEventListener('mouseleave', startCarousel);
    }
}

function showSlide(index) {
    // Masquer toutes les slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Afficher la slide courante
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
    
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function startCarousel() {
    stopCarousel();
    carouselInterval = setInterval(nextSlide, 5000); // Change toutes les 5 secondes
}

function stopCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

// ============================================
// NAVIGATION DYNAMIQUE
// ============================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// PARTICULES ANIMÉES
// ============================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(181, 97, 57, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            animation: floatParticle ${Math.random() * 20 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Ajouter l'animation CSS pour les particules
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
        }
        25% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.2);
            opacity: 0.6;
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0.8);
            opacity: 0.4;
        }
        75% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.1);
            opacity: 0.5;
        }
    }
`;
document.head.appendChild(style);

createParticles();

// ============================================
// ANIMATIONS AU SCROLL (AOS - Animate On Scroll)
// ============================================

const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px 0px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            // Ne pas unobserver pour garder les éléments visibles
        } else {
            // Garder visible même hors viewport
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observer tous les éléments avec data-aos
document.querySelectorAll('[data-aos]').forEach(el => {
    // S'assurer qu'ils sont visibles dès le départ
    el.style.opacity = '1';
    observer.observe(el);
});

// ============================================
// EFFET PARALLAXE - SUPPRIMÉ (ne pas faire disparaître le contenu)
// ============================================

// ============================================
// ANIMATION DES CARTES AU HOVER
// ============================================

const cards = document.querySelectorAll('.problem-card, .service-card, .prestation-card, .why-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// ANIMATION DU TEXTE "CLAIRE" RÉPÉTÉ
// ============================================

const claireTexts = document.querySelectorAll('.claire-text');
claireTexts.forEach((text, index) => {
    setInterval(() => {
        text.style.animation = 'none';
        setTimeout(() => {
            text.style.animation = `popIn 0.6s ease forwards`;
        }, 10);
    }, 3000 + (index * 500));
});

// ============================================
// EFFET TYPING POUR LE HERO TAGLINE
// ============================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ============================================
// COMPTEUR ANIMÉ POUR LES STATISTIQUES
// ============================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ============================================
// EFFET GLOW SUR LES BOUTONS
// ============================================

const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-prestation');

buttons.forEach(button => {
    button.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ============================================
// VALIDATION DU FORMULAIRE
// ============================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Animation de succès
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;
        
        // Simulation d'envoi (à remplacer par vraie logique)
        setTimeout(() => {
            submitButton.textContent = '✓ Message envoyé !';
            submitButton.style.background = '#4caf50';
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.background = '';
                this.reset();
            }, 3000);
        }, 1500);
    });
}

// ============================================
// EFFET DE SCROLL SMOOTH AVEC EASING
// ============================================

function smoothScrollTo(target, duration = 1000) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
    
    requestAnimationFrame(animation);
}

// ============================================
// ANIMATION DES ICÔNES
// ============================================

const icons = document.querySelectorAll('.card-icon, .feature-icon, .why-icon');

icons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ============================================
// EFFET DE RÉVÉLATION AU SCROLL
// ============================================

function revealOnScroll() {
    const reveals = document.querySelectorAll('[data-aos]');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('aos-animate');
        }
    });
}

// Effets d'apparition latéraux améliorés
function initLateralAnimations() {
    const lateralElements = document.querySelectorAll('[data-aos="fade-left"], [data-aos="fade-right"], [data-aos="slide-in-left"], [data-aos="slide-in-right"]');
    
    const lateralObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                entry.target.classList.add('aos-animate');
                lateralObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    lateralElements.forEach(el => {
        lateralObserver.observe(el);
    });
}

// Initialiser les animations latérales
document.addEventListener('DOMContentLoaded', () => {
    initLateralAnimations();
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Appel initial

// ============================================
// EFFET CURSOR PERSONNALISÉ (OPTIONNEL)
// ============================================

const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid #b56139;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    display: none;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// Agrandir le curseur sur les éléments interactifs
const interactiveElements = document.querySelectorAll('a, button, .problem-card, .service-card, .prestation-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// ============================================
// ANIMATION DE CHARGEMENT (OPTIONNEL)
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animation d'entrée pour le hero
    const heroElements = document.querySelectorAll('.hero-title, .claire-repetition, .hero-subtitle, .hero-message, .hero-cta');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// ============================================
// EFFET DE VAGUE SUR LES SECTIONS
// ============================================

function createWaveEffect() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const wave = document.createElement('div');
        wave.className = 'wave';
        wave.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100px;
            background: linear-gradient(to right, transparent, rgba(181, 97, 57, 0.1), transparent);
            clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.5s ease;
        `;
        section.appendChild(wave);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    wave.style.opacity = '1';
                } else {
                    wave.style.opacity = '0';
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(section);
    });
}

createWaveEffect();

// ============================================
// PERFORMANCE: LAZY LOADING DES IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// INITIALISATION
// ============================================

// Initialiser le carrousel au chargement
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});

// ============================================
// CONSOLE MESSAGE (FUN)
// ============================================

console.log('%c🌸 Site créé avec passion pour Claire Stehlin 🌸', 'color: #b56139; font-size: 16px; font-weight: bold;');
console.log('%cDéléguez. Respirez.', 'color: #56463b; font-size: 12px;');
