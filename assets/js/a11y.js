document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("menu-btn");
    const nav = document.querySelector("nav");
    const menuLinks = nav.querySelectorAll("a");

    const closeMenu = () => {
        hamburger.setAttribute("aria-expanded", "false");
        nav.classList.remove("menu-open");
        hamburger.focus();
    };

    if (hamburger) {
        hamburger.addEventListener("click", function() {
            const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
            hamburger.setAttribute("aria-expanded", !isExpanded);
            nav.classList.toggle("menu-open");
        });
    }
    
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && nav.classList.contains("menu-open")) {
            closeMenu();
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("menu-open")) {
                closeMenu();
            }
        });
    });
});
