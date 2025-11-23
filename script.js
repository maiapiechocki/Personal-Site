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
                        "enable": true, "distance": 200, "color": "#000000", "opacity": 0.4, "width": 1
                    },
                    "move": {
                        "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out"
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": { "enable": true, "mode": "repulse" },
                        "onclick": { "enable": true, "mode": "push" },
                        "resize": true
                    },
                    "modes": { "repulse": { "distance": 100 } }
                }
            });
        }
    }
    initParticles();

    const mainNav = document.getElementById('main-nav');
    const projectPanel = document.getElementById('project-panel');
    const contactPanel = document.getElementById('contact-panel');
    const aboutPanel = document.getElementById('about-panel');

    const showProjectsBtn = document.getElementById('show-projects');
    const showContactBtn = document.getElementById('show-contact');
    const showAboutBtn = document.getElementById('show-about');

    const backFromProjectsBtn = document.getElementById('back-from-projects');
    const backFromContactBtn = document.getElementById('back-from-contact');
    const backFromAboutBtn = document.getElementById('back-from-about');

    function showMainNav() {
        if (mainNav) mainNav.classList.remove('hidden');
        if (projectPanel) projectPanel.classList.add('hidden');
        if (contactPanel) contactPanel.classList.add('hidden');
        if (aboutPanel) aboutPanel.classList.add('hidden');
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

    function showAbout() {
        if (mainNav) mainNav.classList.add('hidden');
        if (projectPanel) projectPanel.classList.add('hidden');
        if (contactPanel) contactPanel.classList.add('hidden');
        if (aboutPanel) aboutPanel.classList.remove('hidden');
    }

    if (showProjectsBtn) showProjectsBtn.addEventListener('click', showProjects);
    if (showContactBtn) showContactBtn.addEventListener('click', showContact);
    if (showAboutBtn) showAboutBtn.addEventListener('click', showAbout);
    if (backFromProjectsBtn) backFromProjectsBtn.addEventListener('click', showMainNav);
    if (backFromContactBtn) backFromContactBtn.addEventListener('click', showMainNav);
    if (backFromAboutBtn) backFromAboutBtn.addEventListener('click', showMainNav);

    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.panel-project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectItems.forEach(item => {
                const categories = item.getAttribute('data-category');
                if (filterValue === 'all') {
                    item.classList.remove('hidden-item');
                } else {
                    if (categories && categories.includes(filterValue)) {
                        item.classList.remove('hidden-item');
                    } else {
                        item.classList.add('hidden-item');
                    }
                }
            });
            
            const scrollContainer = document.querySelector('#project-panel .panel-content-scrollable');
            if(scrollContainer) scrollContainer.scrollTop = 0;
        });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);
            const action = form.action;
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerText;

            submitButton.disabled = true;
            submitButton.innerText = 'sending...';

            fetch(action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    form.reset();
                    submitButton.innerText = 'sent!';
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.innerText = originalButtonText;
                    }, 2000);
                } else {
                    submitButton.disabled = false;
                    submitButton.innerText = originalButtonText;
                    alert('Oops! There was a problem submitting your form.');
                }
            }).catch(error => {
                submitButton.disabled = false;
                submitButton.innerText = originalButtonText;
                alert('Oops! A network error occurred.');
            });
        });
    }

    const emailElement = document.getElementById('myInput');
    if (emailElement) {
        emailElement.addEventListener('click', () => {
            const emailSpan = emailElement.querySelector('.email-address');
            if (!emailSpan) return;
            const emailText = emailSpan.innerText;
            const originalHTML = emailElement.innerHTML;
            navigator.clipboard.writeText(emailText).then(() => {
                emailElement.innerText = 'copied!';
                setTimeout(() => {
                    emailElement.innerHTML = originalHTML;
                }, 2000);
            }).catch(err => console.error('Failed to copy text: ', err));
        });
    }

    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('expanded-img');
    const closeModalBtn = document.querySelector('.close-modal');
    const projectThumbnails = document.querySelectorAll('.project-thumbnail');

    projectThumbnails.forEach(img => {
        img.addEventListener('click', function() {
            if (modal && modalImg) {
                modal.classList.remove('hidden');
                modalImg.src = this.src; 
            }
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
});