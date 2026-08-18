/**
 * Barbearia DH Gentlemen Club - Real-Time Store Status Script
 * Calculates store open/closed status dynamically based on Santos/SP timezone.
 */
document.addEventListener("DOMContentLoaded", function () {
    function getSantosDate() {
        const now = new Date();
        const utcDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        // Santos / SP timezone (UTC-3)
        return new Date(utcDate.getTime() - 3 * 3600000);
    }

    function checkStoreStatus() {
        const date = getSantosDate();
        const day = date.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, ..., 6 = Sat
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const timeInMinutes = hours * 60 + minutes;

        let isOpen = false;
        let closingTime = "";
        let nextOpenMsg = "";

        if (day >= 2 && day <= 5) {
            // Tuesday to Friday: 09:00 (540m) - 20:00 (1200m)
            if (timeInMinutes >= 540 && timeInMinutes < 1200) {
                isOpen = true;
                closingTime = "20h";
            } else if (timeInMinutes < 540) {
                nextOpenMsg = "Abre hoje às 09h";
            } else {
                nextOpenMsg = day === 5 ? "Abre amanhã (Sáb) às 10h" : "Abre amanhã às 09h";
            }
        } else if (day === 6) {
            // Saturday: 10:00 (600m) - 20:00 (1200m)
            if (timeInMinutes >= 600 && timeInMinutes < 1200) {
                isOpen = true;
                closingTime = "20h";
            } else if (timeInMinutes < 600) {
                nextOpenMsg = "Abre hoje às 10h";
            } else {
                nextOpenMsg = "Abre terça às 09h";
            }
        } else {
            // Sunday (0) or Monday (1)
            nextOpenMsg = "Abre terça-feira às 09h";
        }

        const badges = document.querySelectorAll(".store-status-badge");
        badges.forEach(badge => {
            if (isOpen) {
                badge.className = "store-status-badge is-open";
                badge.innerHTML = `<span class="pulse-dot"></span> <span>Aberto Agora • Fecha às ${closingTime}</span>`;
            } else {
                badge.className = "store-status-badge is-closed";
                badge.innerHTML = `<span class="pulse-dot closed"></span> <span>Fechado • ${nextOpenMsg}</span>`;
            }
        });
    }

    checkStoreStatus();
    setInterval(checkStoreStatus, 60000); // Re-check every minute
});
