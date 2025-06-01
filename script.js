document.querySelectorAll('.nav__links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed nav
            behavior: 'smooth'
        });
    });
});

const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    },
    {threshold: 0.2}
);

cards.forEach(card => {
    observer.observe(card);
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('highlighted'));
        card.classList.add('highlighted');
    });
});