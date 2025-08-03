// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');

mobileNavToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add class on scroll for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections that should fade in
const fadeElements = document.querySelectorAll('.section');
fadeElements.forEach(element => observer.observe(element));

// Add project navigation buttons
const projectNavButtons = document.querySelectorAll('.project-nav');
projectNavButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const projectCards = document.querySelectorAll('.project-card');
        const currentCard = e.target.closest('.project-card');
        const currentIndex = Array.from(projectCards).indexOf(currentCard);
        
        let nextIndex = currentIndex + 1;
        if (e.target.classList.contains('prev')) {
            nextIndex = currentIndex - 1;
        }
        
        if (nextIndex >= 0 && nextIndex < projectCards.length) {
            projectCards[nextIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
});
