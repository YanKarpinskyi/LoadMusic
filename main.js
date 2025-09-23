const burgerToggle = document.getElementById("burgerToggle");
const nav = document.getElementById("nav");

function toggleMenu() {
    burgerToggle.classList.toggle("active");
    nav.classList.toggle("toggle");
}

burgerToggle.addEventListener("click", toggleMenu);

burgerToggle.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu();
    }
});