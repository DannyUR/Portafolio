// Toggle del tema oscuro/claro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking a link
            if(document.querySelector('.nav-links').classList.contains('active')) {
                document.querySelector('.nav-links').classList.remove('active');
            }
        }
    });
});

// Animate Skill Bars on Scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const toolBars = document.querySelectorAll('.tool-skill-progress');
    
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(barPosition < screenPosition) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        }
    });
    
    toolBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(barPosition < screenPosition) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 100) {
        if(body.getAttribute('data-theme') === 'dark') {
            header.style.backgroundColor = 'rgba(30, 30, 50, 0.95)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
        header.style.backdropFilter = 'blur(10px)';
    } else {
        if(body.getAttribute('data-theme') === 'dark') {
            header.style.backgroundColor = 'rgba(30, 30, 50, 0.95)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Efecto de partículas flotantes
const floatingContainer = document.querySelector('.floating-elements');
for (let i = 0; i < 8; i++) {
    const element = document.createElement('div');
    element.classList.add('floating-element');
    element.style.top = `${Math.random() * 100}%`;
    element.style.left = `${Math.random() * 100}%`;
    element.style.width = `${20 + Math.random() * 40}px`;
    element.style.height = element.style.width;
    element.style.animationDelay = `${Math.random() * 10}s`;
    element.style.animationDuration = `${15 + Math.random() * 10}s`;
    floatingContainer.appendChild(element);
}