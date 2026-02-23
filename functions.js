document.addEventListener("DOMContentLoaded", () => {
    const titolo = document.querySelector(".titolo-animato");
    const sottotitolo = document.querySelector(".sottotitolo-animato");

    setTimeout(() => {
        titolo.classList.add("attivo");
        sottotitolo.classList.add("attivo");
    }, 300);
});