// js/email.js
function sendEmail(e) {
    e.preventDefault();

    // Get form values
    const name = document.querySelector("#contact-name").value;
    const email = document.querySelector("#contact-email-input").value;
    const subject = document.querySelector("#contact-subject").value;
    const message = document.querySelector("#contact-message").value;
    
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
    
    // Show loading message
    showAlert('Sending message...', 'info');

    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        reply_to: email
    };

    emailjs.send("service_xhvggu9", "template_exd4ty3", templateParams, "DrqrI2ZmtdW8SZu4N")
        .then(response => {
            console.log('EmailJS SUCCESS!', response);
            // Clear any existing alerts first
            const existingAlert = document.querySelector('.alert');
            if (existingAlert) {
                existingAlert.remove();
            }
            showAlert('Your message has been sent!', 'success');
            document.getElementById("contact-form").reset();
        })
        .catch(error => {
            console.error("EmailJS error:", error);
            // Clear any existing alerts first
            const existingAlert = document.querySelector('.alert');
            if (existingAlert) {
                existingAlert.remove();
            }
            showAlert('Failed to send message. Please try again later.', 'danger');
        });
}

// Attach to form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", sendEmail);
    }
});

// Helper functions
function showAlert(message, type) {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    // Add close button
    const closeButton = document.createElement('span');
    closeButton.className = 'close-btn';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
        alertDiv.remove();
    };
    
    alertDiv.appendChild(closeButton);
    
    // Find contact form container
    const contactForm = document.getElementById('contact-form');
    const contactContainer = contactForm.parentElement;
    
    // Insert alert before the form
    contactContainer.insertBefore(alertDiv, contactForm);
    
    // Auto remove after 5 seconds for success messages
    if (type === 'success' || type === 'info') {
        setTimeout(function() {
            alertDiv.remove();
        }, 5000);
    }
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
