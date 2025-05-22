// DOM Elements
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-links li a');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');
const scrollToTop = document.querySelector('.scroll-to-top');
const sections = document.querySelectorAll('section');
// Filter buttons removed
// const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contact-form');
const currentYearSpan = document.getElementById('current-year');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Update page with user data from config.js
document.addEventListener('DOMContentLoaded', function() {
    if (typeof userData !== 'undefined' && typeof updatePageWithUserData === 'function') {
        updatePageWithUserData(userData);
    }
});

// Navigation
function toggleNav() {
    // Toggle nav
    nav.classList.toggle('nav-active');
    
    // Animate links
    navItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger animation
    burger.classList.toggle('toggle');
}

burger.addEventListener('click', toggleNav);

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            toggleNav();
        }
    });
});

// Scroll events
window.addEventListener('scroll', () => {
    // Header scroll effect
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        scrollToTop.classList.add('active');
    } else {
        header.classList.remove('scrolled');
        scrollToTop.classList.remove('active');
    }
    
    // Active nav link based on scroll position
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll to top button
scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Project filters - removed since filter buttons were removed
// Now all projects will be displayed without filtering
projectCards.forEach(card => {
    card.style.display = 'block';
});

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !subject || !message) {
            showAlert('Please fill in all fields', 'danger');
            return;
        }
        
        // Email validation
        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email', 'danger');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For this demo, we'll just show a success message
        showAlert('Your message has been sent!', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Helper functions
function showAlert(message, type) {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${type}`;
    alertDiv.appendChild(document.createTextNode(message));
    
    // Insert before form
    const formContainer = document.querySelector('.contact-form-container');
    formContainer.insertBefore(alertDiv, contactForm);
    
    // Remove after 3 seconds
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// New improved typing effect for hero section
document.addEventListener('DOMContentLoaded', function() {
    const professionElement = document.getElementById('profession');
    const cursor = document.querySelector('.cursor');
    
    // Define the professional titles to cycle through
    const professions = [
        'a Data Engineer',
        'a Data Analyst', 
        'a Business Analyst', 
        'an ETL Developer',
        'a Developer'
    ];
    
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 200;
    
    // Function to handle the typing effect
    function typeNextChar() {
        const currentProfession = professions[professionIndex];
        
        if (isDeleting) {
            // Remove a character
            professionElement.textContent = currentProfession.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 100;
        } else {
            // Add a character
            professionElement.textContent = currentProfession.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 200;
        }
        
        // If word is complete, start deleting after delay
        if (!isDeleting && charIndex === currentProfession.length) {
            isDeleting = true;
            typingDelay = 1500; // Longer pause at end of word
        }
        
        // If word is deleted, move to next word
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
        }
        
        // Schedule the next character update
        setTimeout(typeNextChar, typingDelay);
    }
    
    // Start the typing effect
    typeNextChar();
});

// Initialize AOS (Animate on Scroll) if available

// Initialize AOS (Animate on Scroll) if available
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true
    });
}

// Update page with user data from config
document.addEventListener('DOMContentLoaded', function() {
    // This will be called after the config.js file is loaded
    if (typeof userData !== 'undefined') {
        updatePageWithUserData(userData);
    }
});
