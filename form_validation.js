// Form validation and popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('popupModal');
    const popupMessage = document.getElementById('popupMessage');
    const closeBtn = document.querySelector('.popup-close');

    // Close modal when clicking X
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Check if all fields are filled
        if (!name || !email || !message) {
            showPopup('Please fill in all fields (Name, Email, and Message) before sending.', 'error');
            return;
        }
        
        // Check if email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showPopup('Please enter a valid email address.', 'error');
            return;
        }
        
        // If all validation passes, show success message
        showPopup('Message sent! Thank you! We will reach back to you shortly!', 'success');
        
        // Clear the form
        form.reset();
    });

    function showPopup(message, type) {
        popupMessage.innerHTML = message;
        popupMessage.className = type;
        modal.style.display = "block";
        
        // Auto-hide success messages after 3 seconds
        if (type === 'success') {
            setTimeout(function() {
                modal.style.display = "none";
            }, 3000);
        }
    }
}); 