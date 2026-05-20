document.addEventListener("DOMContentLoaded", function() {
    const a11yToggle = document.getElementById("a11y-toggle");
    const a11yMenu = document.getElementById("a11y-menu");
    const htmlElement = document.documentElement;
    const body = document.body;
    
    // 1. Controle de abrir/fechar o menu flutuante
    if (a11yToggle) {
        a11yToggle.addEventListener("click", function() {
            const isHidden = a11yMenu.classList.contains("hidden");
            a11yMenu.classList.toggle("hidden");
            a11yToggle.setAttribute("aria-expanded", !isHidden);
        });
    }

    // ==========================================
    // 2. CARREGAR CONFIGURAÇÕES SALVAS (LOCALSTORAGE)
    // ==========================================
    
    // Carrega a fonte (se não existir, o padrão é 100)
    let currentFontSize = localStorage.getItem('a11y-fontSize') ? parseInt(localStorage.getItem('a11y-fontSize')) : 100;
    htmlElement.style.fontSize = currentFontSize + "%";

    // Carrega as classes visuais (verifica se estão salvas como 'true')
    if (localStorage.getItem('a11y-highContrast') === 'true') body.classList.add("high-contrast");
    if (localStorage.getItem('a11y-darkMode') === 'true') body.classList.add("dark-mode");
    if (localStorage.getItem('a11y-highlightLinks') === 'true') body.classList.add("highlight-links");
    if (localStorage.getItem('a11y-pauseAnimations') === 'true') body.classList.add("pause-animations");


    // ==========================================
    // 3. AÇÕES DOS BOTÕES E SALVAMENTO
    // ==========================================

    // Controle de tamanho de fonte
    document.getElementById("btn-increase-font").addEventListener("click", () => {
        if (currentFontSize < 150) {
            currentFontSize += 10;
            htmlElement.style.fontSize = currentFontSize + "%";
            localStorage.setItem('a11y-fontSize', currentFontSize); // Salva o novo valor
        }
    });

    document.getElementById("btn-decrease-font").addEventListener("click", () => {
        if (currentFontSize > 70) {
            currentFontSize -= 10;
            htmlElement.style.fontSize = currentFontSize + "%";
            localStorage.setItem('a11y-fontSize', currentFontSize); // Salva o novo valor
        }
    });

    // Controle de classes visuais
    document.getElementById("btn-high-contrast").addEventListener("click", () => {
        body.classList.toggle("high-contrast");
        body.classList.remove("dark-mode"); // Remove escuro para não dar conflito
        
        // Salva os estados atuais no LocalStorage
        localStorage.setItem('a11y-highContrast', body.classList.contains("high-contrast"));
        localStorage.setItem('a11y-darkMode', 'false');
    });

    document.getElementById("btn-dark-mode").addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.remove("high-contrast"); // Remove contraste para não dar conflito
        
        // Salva os estados atuais no LocalStorage
        localStorage.setItem('a11y-darkMode', body.classList.contains("dark-mode"));
        localStorage.setItem('a11y-highContrast', 'false');
    });

    document.getElementById("btn-highlight-links").addEventListener("click", () => {
        body.classList.toggle("highlight-links");
        localStorage.setItem('a11y-highlightLinks', body.classList.contains("highlight-links"));
    });

    document.getElementById("btn-pause-animations").addEventListener("click", () => {
        body.classList.toggle("pause-animations");
        localStorage.setItem('a11y-pauseAnimations', body.classList.contains("pause-animations"));
    });

    // ==========================================
    // 4. FUNÇÃO DE RESETAR TUDO
    // ==========================================
    document.getElementById("btn-reset").addEventListener("click", () => {
        // Reseta as variáveis e o visual
        currentFontSize = 100;
        htmlElement.style.fontSize = "100%";
        body.classList.remove("high-contrast", "dark-mode", "highlight-links", "pause-animations");
        
        // Limpa as chaves salvas no LocalStorage
        localStorage.removeItem('a11y-fontSize');
        localStorage.removeItem('a11y-highContrast');
        localStorage.removeItem('a11y-darkMode');
        localStorage.removeItem('a11y-highlightLinks');
        localStorage.removeItem('a11y-pauseAnimations');
    });
});