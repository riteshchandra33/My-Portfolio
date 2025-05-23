// DOM Elements
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-links li a');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');
const scrollToTop = document.querySelector('.scroll-to-top');
const sections = document.querySelectorAll('section');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contact-form');
const currentYearSpan = document.getElementById('current-year');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Update page with user data from config.js
document.addEventListener('DOMContentLoaded', function () {
    if (typeof userData !== 'undefined' && typeof updatePageWithUserData === 'function') {
        updatePageWithUserData(userData);
    }
});

// Navigation
function toggleNav() {
    nav.classList.toggle('nav-active');
    navItems.forEach((link, index) => {
        link.style.animation = link.style.animation ? '' : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
    burger.classList.toggle('toggle');
}

burger.addEventListener('click', toggleNav);
navLinks.forEach(link => link.addEventListener('click', () => {
    if (nav.classList.contains('nav-active')) toggleNav();
}));

// Scroll events
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        scrollToTop.classList.add('active');
    } else {
        header.classList.remove('scrolled');
        scrollToTop.classList.remove('active');
    }

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
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

scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show all projects
projectCards.forEach(card => card.style.display = 'block');

// Contact form
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email-input').value;
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value;

        if (!name || !email || !subject || !message) {
            showAlert('Please fill in all fields', 'danger');
            return;
        }

        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email', 'danger');
            return;
        }

        showAlert('Sending message...', 'info');

        const templateParams = {
            name: name,
            email: email,
            title: subject,
            message: message,
            reply_to: email
        };

        console.log('Attempting to send email with params:', templateParams);
        emailjs.send('service_xhvggu9', 'template_exd4ty3', templateParams)
            .then(function (response) {
                console.log('EmailJS SUCCESS!', response);
                const existingAlert = document.querySelector('.alert');
                if (existingAlert) existingAlert.remove();
                showAlert('Your message has been sent!', 'success');
                contactForm.reset();
            })
            .catch(function (error) {
                console.error('EmailJS error:', error);
                alert('Failed to send: ' + JSON.stringify(error));
                const existingAlert = document.querySelector('.alert');
                if (existingAlert) existingAlert.remove();
                showAlert('Failed to send message. Check console or alert for more info.', 'danger');
            });
    });
}

// Helper functions
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${type}`;
    alertDiv.appendChild(document.createTextNode(message));
    const formContainer = document.querySelector('.contact-form-container');
    formContainer.insertBefore(alertDiv, contactForm);
    setTimeout(() => {
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) existingAlert.remove();
    }, 3000);
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Typing effect
document.addEventListener('DOMContentLoaded', function () {
    const professionElement = document.getElementById('profession');
    const cursor = document.querySelector('.cursor');
    const professions = ['a Data Engineer', 'a Data Analyst', 'a Business Analyst', 'an ETL Developer', 'a Developer'];

    let professionIndex = 0, charIndex = 0, isDeleting = false, typingDelay = 200;

    function typeNextChar() {
        const currentProfession = professions[professionIndex];

        if (isDeleting) {
            professionElement.textContent = currentProfession.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 100;
        } else {
            professionElement.textContent = currentProfession.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 200;
        }

        if (!isDeleting && charIndex === currentProfession.length) {
            isDeleting = true;
            typingDelay = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
        }

        setTimeout(typeNextChar, typingDelay);
    }

    typeNextChar();
});

// AOS initialization
if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 1000, once: true });
}
