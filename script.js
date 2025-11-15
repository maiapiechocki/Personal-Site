document.addEventListener('DOMContentLoaded', () => {
    
    function initParticles() {
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

    const mainNav = document.getElementById('main-nav');
    const projectPanel = document.getElementById('project-panel');
    const contactPanel = document.getElementById('contact-panel');

    const showProjectsBtn = document.getElementById('show-projects');
    const showContactBtn = document.getElementById('show-contact');

    const backFromProjectsBtn = document.getElementById('back-from-projects');
    const backFromContactBtn = document.getElementById('back-from-contact');

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

    
    const emailElement = document.getElementById('myInput'); 
    if (emailElement) {
        emailElement.addEventListener('click', () => {
            
            const emailSpan = emailElement.querySelector('.email-address');
            if (!emailSpan) return; 
            
            const emailText = emailSpan.innerText;

            const originalHTML = emailElement.innerHTML;

            navigator.clipboard.writeText(emailText)
                .then(() => {
                    emailElement.innerText = 'Copied!';

                    
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