/* CARD */
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".about-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        observer.observe(card);
    });
});


/* NAVBAR */
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.letterSpacing = "1.5px";
        });

        link.addEventListener("mouseleave", () => {
            link.style.letterSpacing = "0.5px";
        });
    });
});