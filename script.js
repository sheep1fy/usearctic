document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.3 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = '0'; 
        section.style.transform = 'translateY(20px)'; 

      
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

});
