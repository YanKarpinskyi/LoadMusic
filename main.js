const burgerToggle = document.getElementById("burgerToggle");
const nav = document.getElementById("nav");

burgerToggle.addEventListener("click", () => {
    burgerToggle.classList.toggle("active");
    nav.classList.toggle("toggle");
})