document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Particles
    function initParticles() {
        // Check if particles.js library is loaded and the element exists
        if (typeof particlesJS == 'function' && document.getElementById('particles-js')) {
            particlesJS('particles-js', {
                "particles": {
                    "number": { "value": 90, "density": { "enable": true, "value_area": 900 } },
                    "color": { "value": "#000000" },
                    "shape": { "type": "circle" },
                    "opacity": { "value": 0.5, "random": false },
                    "size": { "value": 3, "random": true },
                    "line_linked": {
                        "enable": true,
                        "distance": 200,
                        "color": "#000000",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": { "enable": true, "mode": "repulse" },
                        "onclick": { "enable": true, "mode": "push" },
                        "resize": true
                    },
                    "modes": {
                        "repulse": {
                            "distance": 100
                        }
                    }
                }
            });
        }
    }
    
    initParticles(); 

    // 2. Get all elements
    const mainNav = document.getElementById('main-nav');
    const projectPanel = document.getElementById('project-panel');
    const contactPanel = document.getElementById('contact-panel');

    const showProjectsBtn = document.getElementById('show-projects');
    const showContactBtn = document.getElementById('show-contact');

    const backFromProjectsBtn = document.getElementById('back-from-projects');
    const backFromContactBtn = document.getElementById('back-from-contact');

    // 3. Define navigation functions
    function showMainNav() {
        if (mainNav) mainNav.classList.remove('hidden');
        if (projectPanel) projectPanel.classList.add('hidden');
        if (contactPanel) contactPanel.classList.add('hidden');
    }

    function showProjects() {
        if (mainNav) mainNav.classList.add('hidden');
        if (projectPanel) projectPanel.classList.remove('hidden');
        if (contactPanel) contactPanel.classList.add('hidden');
    }
    
    function showContact() {
        if (mainNav) mainNav.classList.add('hidden');
        if (projectPanel) projectPanel.classList.add('hidden');
        if (contactPanel) contactPanel.classList.remove('hidden');
    }

    // 4. Attach navigation listeners (with checks)
    if (showProjectsBtn) {
        showProjectsBtn.addEventListener('click', showProjects);
    }
    if (showContactBtn) {
        showContactBtn.addEventListener('click', showContact);
    }
    if (backFromProjectsBtn) {
        backFromProjectsBtn.addEventListener('click', showMainNav);
    }
    if (backFromContactBtn) {
        backFromContactBtn.addEventListener('click', showMainNav);
    }

    // 5. Attach email copy listener (with check)
    
    // --- THIS IS THE FIX ---
    // It's 'myInput' (capital I), not 'myinput'
    const emailElement = document.getElementById('myInput'); 
    if (emailElement) {
        emailElement.addEventListener('click', () => {
            
            // 1. Get the text to copy
            const emailSpan = emailElement.querySelector('.email-address');
            if (!emailSpan) return; // Safety check
            
            const emailText = emailSpan.innerText;

            // 2. Store the ORIGINAL HTML, not just the text
            const originalHTML = emailElement.innerHTML;

            // 3. Copy to clipboard
            navigator.clipboard.writeText(emailText)
                .then(() => {
                    // 4. Set temporary "Copied!" message (this is fine)
                    emailElement.innerText = 'Copied!';

                    // 5. Restore the ORIGINAL HTML
                    setTimeout(() => {
                        emailElement.innerHTML = originalHTML;
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        });
    }
});