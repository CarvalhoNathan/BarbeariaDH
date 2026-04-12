document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("menu-btn");
    const nav = document.querySelector("nav");

    if (hamburger) {
        hamburger.addEventListener("click", function() {
            const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
            hamburger.setAttribute("aria-expanded", !isExpanded);
            nav.classList.toggle("menu-open");
        });
    }
});
