document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach((el) => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // Active Navbar Link update on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Typing Effect
    const dynamicText = document.querySelector('.dynamic-text');
    if (dynamicText) {
        const textToType = "Sushma Chowdary";
        let i = 0;
        dynamicText.textContent = ''; // clear initially
        
        function typeWriter() {
            if (i < textToType.length) {
                dynamicText.textContent += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 120);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    }
});
