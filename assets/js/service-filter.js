/**
 * service-filter.js - Barbearia DH Gentlemen Club
 * Filtro interativo com animações de transição rápida (scale, opacity & stagger).
 */
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.services-filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    if (!filterButtons.length || !serviceCards.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.getAttribute('data-filter');

            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            let visibleIndex = 0;

            serviceCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const isMatch = filterValue === 'all' || category === filterValue;

                if (isMatch) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.92) translateY(15px)';

                    const delay = visibleIndex * 35;
                    visibleIndex++;

                    setTimeout(() => {
                        card.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1) translateY(0)';
                    }, delay);
                } else {
                    card.style.transition = 'all 0.18s ease-in';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.94) translateY(8px)';

                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 180);
                }
            });
        });
    });
});
