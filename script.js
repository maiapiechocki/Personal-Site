function initParticles() {
            particlesJS('particles-js', {
                "particles": {
                    "number": { "value": 80, "density": { "enable": true, "value_area": 900 } },
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
                        "onclick": { "enable": false, "mode": "push" },
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
        initParticles();

        
        document.addEventListener('DOMContentLoaded', () => {
            
            const mainNav = document.getElementById('main-nav');
            const projectPanel = document.getElementById('project-panel');
            const contactPanel = document.getElementById('contact-panel');

            const showProjectsBtn = document.getElementById('show-projects');
            const showContactBtn = document.getElementById('show-contact');

            const backFromProjectsBtn = document.getElementById('back-from-projects');
            const backFromContactBtn = document.getElementById('back-from-contact');

            function showMainNav() {
                mainNav.classList.remove('hidden');
                projectPanel.classList.add('hidden');
                contactPanel.classList.add('hidden');
            }

            function showProjects() {
                mainNav.classList.add('hidden');
                projectPanel.classList.remove('hidden');
                contactPanel.classList.add('hidden');
            }
            
            function showContact() {
                mainNav.classList.add('hidden');
                projectPanel.classList.add('hidden');
                contactPanel.classList.remove('hidden');
            }

            showProjectsBtn.addEventListener('click', showProjects);
            showContactBtn.addEventListener('click', showContact);
            
            backFromProjectsBtn.addEventListener('click', showMainNav);
            backFromContactBtn.addEventListener('click', showMainNav);
        });