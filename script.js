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
    if (indicators.length > 0) {
        indicators.forEach((indicator, index) => {
            if (indicator) {
                indicator.addEventListener('click', () => {
                    stopCarousel();
                    showSlide(index);
                    startCarousel();
                });
            }
        });
    }
    
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
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Hamburger menu toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking on a link
if (navMenu && hamburger && navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

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

// Créer les particules seulement si l'élément existe
if (document.getElementById('particles')) {
    createParticles();
}

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

// Exclure .problem-card et .not-service-item car le CSS gère déjà le hover avec animations
const cards = document.querySelectorAll('.service-card, .prestation-card, .why-card');

if (cards.length > 0) {
    cards.forEach(card => {
        if (card && !card.classList.contains('problem-card') && !card.classList.contains('not-service-item')) {
            card.addEventListener('mouseenter', function() {
                // Ne pas modifier si le CSS gère déjà le hover
                if (!this.classList.contains('problem-card') && !this.classList.contains('not-service-item')) {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                // Ne pas modifier si le CSS gère déjà le hover
                if (!this.classList.contains('problem-card') && !this.classList.contains('not-service-item')) {
                    this.style.transform = 'translateY(0) scale(1)';
                }
            });
        }
    });
}

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

if (buttons.length > 0) {
    buttons.forEach(button => {
        if (button) {
            button.addEventListener('mousemove', function(e) {
                try {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    this.style.setProperty('--mouse-x', `${x}px`);
                    this.style.setProperty('--mouse-y', `${y}px`);
                } catch (e) {
                    // Ignorer les erreurs
                }
            });
        }
    });
}

// ============================================
// VALIDATION DU FORMULAIRE AMÉLIORÉE
// ============================================

const contactForm = document.querySelector('.contact-form');
const contactFormNew = document.querySelector('.contact-form-new');
const contactFormCreative = document.querySelector('.contact-form-creative');

function validateField(field) {
    const value = field.value.trim();
    const fieldGroup = field.closest('.form-group-new') || field.closest('.form-group-creative') || field.closest('.form-group');
    let isValid = true;
    let errorMessage = '';

    // Supprimer les messages d'erreur existants
    const existingError = fieldGroup.querySelector('.field-error');
    if (existingError) existingError.remove();
    
    field.classList.remove('error', 'success');

    // Validation selon le type de champ
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Ce champ est obligatoire';
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Veuillez entrer une adresse email valide';
        }
    } else if (field.type === 'tel' && value) {
        const phoneRegex = /^[0-9]{10}$/;
        const cleaned = value.replace(/\s/g, '');
        if (!phoneRegex.test(cleaned)) {
            isValid = false;
            errorMessage = 'Veuillez entrer un numéro de téléphone valide (10 chiffres)';
        }
    }

    // Afficher le résultat
    if (!isValid) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = errorMessage;
        fieldGroup.appendChild(errorDiv);
    } else if (value) {
        field.classList.add('success');
    }

    return isValid;
}

// Validation en temps réel
function initFormValidation(form) {
    if (!form) return;
    
    const fields = form.querySelectorAll('input, textarea, select');
    
    fields.forEach(field => {
        // Validation au blur
        field.addEventListener('blur', () => validateField(field));
        
        // Validation en temps réel pour email et tel
        if (field.type === 'email' || field.type === 'tel') {
            field.addEventListener('input', () => {
                if (field.value.trim()) {
                    validateField(field);
                }
            });
        }
    });

    // Validation à la soumission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isFormValid = true;
        fields.forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }

        // Animation de succès
        const submitButton = form.querySelector('button[type="submit"]');
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
                form.reset();
                fields.forEach(f => f.classList.remove('success', 'error'));
            }, 3000);
        }, 1500);
    });
}

// Initialiser les validations
if (contactForm) initFormValidation(contactForm);
if (contactFormNew) initFormValidation(contactFormNew);
if (contactFormId) initFormValidation(contactFormId);
if (contactFormCreative) initFormValidation(contactFormCreative);

// ============================================
// EXIT-INTENT POPUP
// ============================================

let exitIntentShown = false;

function initExitIntent() {
    const popup = document.getElementById('exitIntentPopup');
    const closeBtn = document.getElementById('closeExitPopup');
    
    if (!popup) return;

    // Vérifier si déjà affiché dans cette session
    if (sessionStorage.getItem('exitIntentShown') === 'true') {
        exitIntentShown = true;
        return;
    }

    // Détecter la sortie de la souris vers le haut
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0 && !exitIntentShown) {
            popup.classList.add('active');
            exitIntentShown = true;
            sessionStorage.setItem('exitIntentShown', 'true');
        }
    });

    // Fermer le popup
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            popup.classList.remove('active');
        });
    }

    popup.addEventListener('click', function(e) {
        if (e.target === popup || e.target.classList.contains('exit-popup-overlay')) {
            popup.classList.remove('active');
        }
    });
}

// ============================================
// CTA FLOTTANT - AFFICHAGE AU SCROLL
// ============================================

function initFloatingCTA() {
    const floatingCTA = document.getElementById('floatingCTA');
    if (!floatingCTA) return;

    let lastScrollTop = 0;
    let isVisible = true;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Afficher après 300px de scroll
        if (scrollTop > 300) {
            if (!isVisible) {
                floatingCTA.style.display = 'block';
                isVisible = true;
            }
        } else {
            if (isVisible) {
                floatingCTA.style.display = 'none';
                isVisible = false;
            }
        }
        
        lastScrollTop = scrollTop;
    });

    // Masquer initialement
    floatingCTA.style.display = 'none';
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

if (icons.length > 0) {
    icons.forEach(icon => {
        if (icon) {
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2) rotate(10deg)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        }
    });
}

// ============================================
// EFFET DE RÉVÉLATION AU SCROLL
// ============================================

function revealOnScroll() {
    try {
        const reveals = document.querySelectorAll('[data-aos]');
        
        if (reveals.length > 0) {
            reveals.forEach(element => {
                if (element) {
                    const windowHeight = window.innerHeight;
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < windowHeight - elementVisible) {
                        element.classList.add('aos-animate');
                    }
                }
            });
        }
    } catch (e) {
        console.log('Erreur revealOnScroll:', e);
    }
}

// Effets d'apparition latéraux améliorés
function initLateralAnimations() {
    try {
        const lateralElements = document.querySelectorAll('[data-aos="fade-left"], [data-aos="fade-right"], [data-aos="slide-in-left"], [data-aos="slide-in-right"]');
        
        if (lateralElements.length > 0 && 'IntersectionObserver' in window) {
            const lateralObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target) {
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
                if (el) lateralObserver.observe(el);
            });
        }
    } catch (e) {
        console.log('Erreur initLateralAnimations:', e);
    }
}

// Initialiser les animations latérales
document.addEventListener('DOMContentLoaded', () => {
    try {
        initLateralAnimations();
    } catch (e) {
        console.log('Erreur initialisation animations:', e);
    }
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
// EFFET DE VAGUE SUR LES SECTIONS (OPTIONNEL - DÉSACTIVÉ)
// ============================================

// Désactivé pour éviter les problèmes de performance
// function createWaveEffect() {
//     const sections = document.querySelectorAll('section');
//     
//     sections.forEach(section => {
//         const wave = document.createElement('div');
//         wave.className = 'wave';
//         wave.style.cssText = `
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             width: 100%;
//             height: 100px;
//             background: linear-gradient(to right, transparent, rgba(181, 97, 57, 0.1), transparent);
//             clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
//             pointer-events: none;
//             opacity: 0;
//             transition: opacity 0.5s ease;
//         `;
//         section.appendChild(wave);
//         
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     wave.style.opacity = '1';
//                 } else {
//                     wave.style.opacity = '0';
//                 }
//             });
//         }, { threshold: 0.5 });
//         
//         observer.observe(section);
//     });
// }

// createWaveEffect();

// ============================================
// PERFORMANCE: LAZY LOADING DES IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    try {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img && img.dataset && img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        if (lazyImages.length > 0) {
            lazyImages.forEach(img => {
                if (img) imageObserver.observe(img);
            });
        }
    } catch (e) {
        console.log('Lazy loading non disponible');
    }
}

// ============================================
// INITIALISATION
// ============================================

// Initialiser le carrousel au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier que les éléments existent avant d'initialiser
    try {
        initCarousel();
    } catch (e) {
        console.log('Carousel non présent sur cette page');
    }
    
    try {
        initExitIntent();
    } catch (e) {
        console.log('Exit intent non initialisé');
    }
    
    try {
        initFloatingCTA();
    } catch (e) {
        console.log('Floating CTA non initialisé');
    }
});

// ============================================
// CONSOLE MESSAGE (FUN)
// ============================================

console.log('%c🌸 Site créé avec passion pour Claire Stehlin 🌸', 'color: #b56139; font-size: 16px; font-weight: bold;');
console.log('%cDéléguez. Respirez.', 'color: #56463b; font-size: 12px;');
