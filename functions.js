 /* -----------------------------------------------------
/                      CARD                            /
-----------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

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

 /* -----------------------------------------------------
/              NAVBAR ACTIVE STATE                     /
-----------------------------------------------------*/
const navLinks = document.querySelectorAll(".navbar a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});