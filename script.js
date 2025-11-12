
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


function showContent() {
    let temp = 
    document.getElementsByTagName("template")[0];
 
}

initParticles();


   