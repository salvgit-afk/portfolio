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

 /* -----------------------------------------------------
/                      HAMBURGER MENU                  /
-----------------------------------------------------*/
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("nav-overlay");

if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("open");
        overlay.classList.toggle("open");
        hamburger.classList.toggle("open");
        const icon = hamburger.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });

    overlay.addEventListener("click", () => {
        navbar.classList.remove("open");
        overlay.classList.remove("open");
        hamburger.classList.remove("open");
        const icon = hamburger.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });

    const menuLinks = document.querySelectorAll(".navbar a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("open");
            overlay.classList.remove("open");
            hamburger.classList.remove("open");
            const icon = hamburger.querySelector("i");
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
        });
    });
}

 /* -----------------------------------------------------
/        FOOTER CHE SI AGGIORNA AUTOMATICAMENTE        /
-----------------------------------------------------*/
const year = new Date().getFullYear();
document.getElementById('footer').innerHTML = `© ${year} — Portfolio di Salvatore Mannina`;
