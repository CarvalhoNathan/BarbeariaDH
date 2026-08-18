/**
 * Barbearia DH Gentlemen Club - Haircut Gallery Filter Script
 * Instant, smooth filtering without layout flashing or repaint flicker.
 */
document.addEventListener("DOMContentLoaded", function () {
    const filterBtns = document.querySelectorAll(".gallery-filter-btn");
    const cards = document.querySelectorAll(".haircut-card");

    if (filterBtns.length > 0 && cards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", function () {
                const category = this.getAttribute("data-filter");

                filterBtns.forEach(b => {
                    b.classList.remove("is-active");
                    b.setAttribute("aria-selected", "false");
                });
                this.classList.add("is-active");
                this.setAttribute("aria-selected", "true");

                cards.forEach(card => {
                    const cardCat = card.getAttribute("data-category");
                    if (category === "all" || cardCat === category) {
                        card.classList.remove("is-hidden");
                    } else {
                        card.classList.add("is-hidden");
                    }
                });
            });
        });
    }
});
