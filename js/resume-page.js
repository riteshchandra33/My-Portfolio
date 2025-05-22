// DOM Elements
const currentYearSpan = document.getElementById('current-year');
const resumeFrame = document.getElementById('resume-frame');
const printResumeBtn = document.getElementById('print-resume');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Navigation toggle
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

// No resume upload functionality needed

// Print resume
printResumeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // Focus the iframe and print its contents
    resumeFrame.contentWindow.focus();
    resumeFrame.contentWindow.print();
});

// No localStorage functionality needed

// Update page with user data from config
document.addEventListener('DOMContentLoaded', function() {
    // This will be called after the config.js file is loaded
    if (typeof userData !== 'undefined') {
        updatePageWithUserData(userData);
    }
});

// Function to update page with user data
function updatePageWithUserData(data) {
    // Update name in header and footer
    document.getElementById('resume-name').textContent = data.fullName || data.name;
    document.getElementById('footer-name').textContent = data.name;
    
    // Update social links in footer
    if (data.social.github) {
        document.getElementById('footer-github').href = data.social.github;
    }
    
    if (data.social.linkedin) {
        document.getElementById('footer-linkedin').href = data.social.linkedin;
    }
    
    if (data.social.twitter) {
        document.getElementById('footer-twitter').href = data.social.twitter;
    }
}
