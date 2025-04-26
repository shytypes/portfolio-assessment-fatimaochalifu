document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Log to console
        console.log('--- New Form Submission ---');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // form reset 
        form.reset();
    });
});
