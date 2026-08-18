document.addEventListener("DOMContentLoaded", function() {
    // ==========================================
    // 1. EXISTENTE: Menu Mobile (Hamburger)
    // ==========================================
    const hamburger = document.getElementById("menu-btn");
    const nav = document.querySelector("nav");
    const menuLinks = nav ? nav.querySelectorAll("a") : [];

    const closeMenu = () => {
        if (hamburger) {
            hamburger.setAttribute("aria-expanded", "false");
            nav.classList.remove("menu-open");
            hamburger.focus();
        }
    };

    if (hamburger && nav) {
        hamburger.addEventListener("click", function() {
            const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
            hamburger.setAttribute("aria-expanded", !isExpanded);
            nav.classList.toggle("menu-open");
        });
    }
    
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && nav && nav.classList.contains("menu-open")) {
            closeMenu();
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (nav && nav.classList.contains("menu-open")) {
                closeMenu();
            }
        });
    });

    // ==========================================
    // 2. NOVO: Injeção do Botão Flutuante (FAB) & Menu A11y
    // ==========================================
    const injectAccessibilityFAB = () => {
        const fabContainer = document.createElement("div");
        fabContainer.className = "a11y-fab-container";
        fabContainer.innerHTML = `
            <div class="a11y-menu" id="a11y-menu" role="region" aria-label="Menu de Acessibilidade" aria-hidden="true">
                <div class="a11y-menu-options" role="menu">
                    <button class="a11y-option-btn" data-action="font-increase" role="menuitem" aria-label="Aumentar tamanho do texto">
                        <span class="a11y-icon">
                            <svg viewBox="0 0 24 24"><path d="M5 9v6h2v-6h2V7H3v2h2zm11-2H9v2h3v8h2V9h3V7zm4 4v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2z"/></svg>
                        </span>
                        <span>Aumentar Fonte</span>
                    </button>
                    <button class="a11y-option-btn" data-action="font-decrease" role="menuitem" aria-label="Diminuir tamanho do texto">
                        <span class="a11y-icon">
                            <svg viewBox="0 0 24 24"><path d="M5 9v6h2v-6h2V7H3v2h2zm11-2H9v2h3v8h2V9h3V7zm4 4v-2h-6v2h6z"/></svg>
                        </span>
                        <span>Diminuir Fonte</span>
                    </button>
                    <button class="a11y-option-btn" data-action="contrast" role="menuitem" aria-label="Alternar Alto Contraste">
                        <span class="a11y-icon">
                            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-15v14c3.31 0 6-2.69 6-6s-2.69-6-6-6z"/></svg>
                        </span>
                        <span>Alto Contraste</span>
                    </button>
                    <button class="a11y-option-btn" data-action="light-mode" role="menuitem" aria-label="Alternar Modo Claro">
                        <span class="a11y-icon">
                            <svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.01c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>
                        </span>
                        <span>Modo Claro</span>
                    </button>
                    <button class="a11y-option-btn" data-action="highlight-links" role="menuitem" aria-label="Alternar Destacar Links">
                        <span class="a11y-icon">
                            <svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
                        </span>
                        <span>Destacar Links</span>
                    </button>
                    <button class="a11y-option-btn" data-action="pause-animations" role="menuitem" aria-label="Alternar Pausar Animações">
                        <span class="a11y-icon">
                            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                        </span>
                        <span>Pausar Animações</span>
                    </button>
                    <button class="a11y-option-btn" data-action="reset" role="menuitem" aria-label="Resetar todas as configurações de acessibilidade">
                        <span class="a11y-icon">
                            <svg viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>
                        </span>
                        <span>Resetar</span>
                    </button>
                </div>
            </div>
            <button class="a11y-fab-trigger" id="a11y-trigger" aria-expanded="false" aria-controls="a11y-menu" aria-label="Abrir menu de acessibilidade">
                <svg viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>
            </button>
        `;
        document.body.appendChild(fabContainer);
    };

    injectAccessibilityFAB();

    // ==========================================
    // 3. NOVO: Lógica de Controle do FAB & Estados
    // ==========================================
    const menu = document.getElementById("a11y-menu");
    const trigger = document.getElementById("a11y-trigger");
    const closeBtn = document.getElementById("a11y-close");
    const optionButtons = document.querySelectorAll(".a11y-option-btn");

    // Limites de Fontes
    const MIN_FONT_SIZE = 70;
    const MAX_FONT_SIZE = 145;
    const FONT_STEP = 15;

    // Estado padrão
    let state = {
        fontSize: 100,
        contrast: false,
        lightMode: false,
        highlightLinks: false,
        pauseAnimations: false
    };

    // Salvar estado no LocalStorage
    const saveState = () => {
        localStorage.setItem("a11y-state", JSON.stringify(state));
    };

    // Carregar estado do LocalStorage
    const loadState = () => {
        const saved = localStorage.getItem("a11y-state");
        if (saved) {
            try {
                state = { ...state, ...JSON.parse(saved) };
            } catch (e) {
                console.error("Erro ao carregar configurações de acessibilidade:", e);
            }
        }
    };

    // Aplicar estado atual ao DOM
    const applyState = () => {
        // 1. Font Size
        document.documentElement.style.fontSize = `${state.fontSize}%`;

        // 2. Alto Contraste
        if (state.contrast) {
            document.documentElement.classList.add("a11y-high-contrast");
            updateBtnActiveState("contrast", true);
        } else {
            document.documentElement.classList.remove("a11y-high-contrast");
            updateBtnActiveState("contrast", false);
        }

        // 3. Modo Claro
        if (state.lightMode) {
            document.documentElement.classList.add("a11y-light-mode");
            updateBtnActiveState("light-mode", true);
        } else {
            document.documentElement.classList.remove("a11y-light-mode");
            updateBtnActiveState("light-mode", false);
        }

        // 4. Destacar Links
        if (state.highlightLinks) {
            document.documentElement.classList.add("a11y-highlight-links");
            updateBtnActiveState("highlight-links", true);
        } else {
            document.documentElement.classList.remove("a11y-highlight-links");
            updateBtnActiveState("highlight-links", false);
        }

        // 5. Pausar Animações
        if (state.pauseAnimations) {
            document.documentElement.classList.add("a11y-pause-animations");
            updateBtnActiveState("pause-animations", true);
        } else {
            document.documentElement.classList.remove("a11y-pause-animations");
            updateBtnActiveState("pause-animations", false);
        }
    };

    // Auxiliar para atualizar estilo ativo no botão do menu
    const updateBtnActiveState = (action, isActive) => {
        const btn = document.querySelector(`.a11y-option-btn[data-action="${action}"]`);
        if (btn) {
            if (isActive) {
                btn.classList.add("is-active");
                btn.setAttribute("aria-checked", "true");
            } else {
                btn.classList.remove("is-active");
                btn.removeAttribute("aria-checked");
            }
        }
    };

    // Abrir/Fechar Menu
    const toggleA11yMenu = (shouldOpen) => {
        const isOpen = menu.classList.contains("is-active");
        const open = shouldOpen !== undefined ? shouldOpen : !isOpen;

        if (open) {
            menu.classList.add("is-active");
            trigger.setAttribute("aria-expanded", "true");
            menu.setAttribute("aria-hidden", "false");
            
            // Focar no primeiro item do menu para navegabilidade por teclado
            // (Com um pequeno delay para garantir que a transição de visibilidade ocorreu e o clique/enter não roube o foco de volta)
            setTimeout(() => {
                const firstOption = optionButtons[0];
                if (firstOption) {
                    firstOption.focus();
                }
            }, 60);
        } else {
            menu.classList.remove("is-active");
            trigger.setAttribute("aria-expanded", "false");
            menu.setAttribute("aria-hidden", "true");
            trigger.focus();
        }
    };

    // Eventos do Botão FAB e Fechar
    if (trigger) {
        trigger.addEventListener("click", () => toggleA11yMenu());
        
        // Direcionar foco do gatilho para dentro do menu ao usar Tab se o menu estiver aberto
        trigger.addEventListener("keydown", function(e) {
            const isOpen = menu.classList.contains("is-active");
            if (isOpen && e.key === "Tab") {
                const focusableElements = menu.querySelectorAll("button");
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey) { // Shift + Tab -> Foca no último item
                    if (lastElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab -> Foca no primeiro item
                    if (firstElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => toggleA11yMenu(false));
    }

    // Fechar ao clicar fora
    document.addEventListener("click", function(e) {
        if (menu && menu.classList.contains("is-active")) {
            const isClickInside = menu.contains(e.target) || trigger.contains(e.target);
            if (!isClickInside) {
                toggleA11yMenu(false);
            }
        }
    });

    // Fechar menu com a tecla Escape
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && menu && menu.classList.contains("is-active")) {
            toggleA11yMenu(false);
        }
    });

    // Armadilhar foco ao navegar via Tab dentro do menu (Keyboard Trap amigável que inclui o Gatilho no fluxo circular) e adicionar suporte a Setas, Home e End
    if (menu) {
        menu.addEventListener("keydown", function(e) {
            const focusableElements = Array.from(menu.querySelectorAll("button"));
            if (focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            // 1. Navegação via Tab
            if (e.key === "Tab") {
                if (e.shiftKey) { // Shift + Tab no primeiro item -> Foca no Gatilho (Trigger)
                    if (document.activeElement === firstElement && trigger) {
                        trigger.focus();
                        e.preventDefault();
                    }
                } else { // Tab no último item -> Foca no Gatilho (Trigger)
                    if (document.activeElement === lastElement && trigger) {
                        trigger.focus();
                        e.preventDefault();
                    }
                }
            }

            // 2. Navegação via Setas (Arrow Up / Arrow Down)
            else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                e.preventDefault();
                const currentIndex = focusableElements.indexOf(document.activeElement);
                let nextIndex = currentIndex;

                if (e.key === "ArrowDown") {
                    nextIndex = (currentIndex + 1) % focusableElements.length;
                } else {
                    nextIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
                }

                focusableElements[nextIndex].focus();
            }

            // 3. Atalhos de Início e Fim (Home / End)
            else if (e.key === "Home") {
                e.preventDefault();
                firstElement.focus();
            }
            else if (e.key === "End") {
                e.preventDefault();
                lastElement.focus();
            }
        });
    }

    // Gerenciador de ações das opções
    optionButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            const action = this.getAttribute("data-action");

            switch (action) {
                case "font-increase":
                    if (state.fontSize < MAX_FONT_SIZE) {
                        state.fontSize += FONT_STEP;
                        saveState();
                        applyState();
                    }
                    break;

                case "font-decrease":
                    if (state.fontSize > MIN_FONT_SIZE) {
                        state.fontSize -= FONT_STEP;
                        saveState();
                        applyState();
                    }
                    break;

                case "contrast":
                    state.contrast = !state.contrast;
                    saveState();
                    applyState();
                    break;

                case "light-mode":
                    state.lightMode = !state.lightMode;
                    saveState();
                    applyState();
                    break;

                case "highlight-links":
                    state.highlightLinks = !state.highlightLinks;
                    saveState();
                    applyState();
                    break;

                case "pause-animations":
                    state.pauseAnimations = !state.pauseAnimations;
                    saveState();
                    applyState();
                    break;

                case "reset":
                    state = {
                        fontSize: 100,
                        contrast: false,
                        lightMode: false,
                        highlightLinks: false,
                        pauseAnimations: false
                    };
                    saveState();
                    applyState();
                    break;
            }
        });
    });

    // Inicialização da Acessibilidade
    loadState();
    applyState();

    // ==========================================
    // 4. NOVO: Integração do VLibras (Separado)
    // ==========================================
    const initVLibras = () => {
        // 1. Criar estrutura do DOM do VLibras
        const vlibrasDiv = document.createElement("div");
        vlibrasDiv.setAttribute("vw", "");
        vlibrasDiv.className = "enabled";
        vlibrasDiv.innerHTML = `
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper>
                <div class="vw-plugin-top"></div>
            </div>
        `;
        document.body.appendChild(vlibrasDiv);

        // 2. Carregar script externamente
        const script = document.createElement("script");
        script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
        script.async = true;
        script.defer = true;
        script.onload = () => {
            if (window.VLibras) {
                new window.VLibras.Widget('https://vlibras.gov.br/app');
            }
        };
        document.body.appendChild(script);
    };

    initVLibras();

    // ==========================================
    // 5. WIDGET FLUTUANTE DO WHATSAPP (GLOBAL)
    // ==========================================
    const injectWhatsAppFloat = () => {
        const waLink = document.createElement("a");
        waLink.href = "https://api.whatsapp.com/send/?phone=5513981370797&text=Ol%C3%A1%2C+tudo+bem%3F+Gostaria+de+marcar+um+hor%C3%A1rio.&type=phone_number&app_absent=0";
        waLink.target = "_blank";
        waLink.rel = "noopener noreferrer";
        waLink.className = "whatsapp-float-widget";
        waLink.setAttribute("aria-label", "Falar com a Barbearia DH pelo WhatsApp");
        waLink.innerHTML = `
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.399.636-1.16 4.234 4.341-1.138.563.335z"/></svg>
            <span class="whatsapp-float-tooltip">Dúvidas? Fale no WhatsApp 💬</span>
        `;
        document.body.appendChild(waLink);
    };

    injectWhatsAppFloat();

    // ==========================================
    // 6. HELPER GLOBAL DE TOAST NOTIFICATION
    // ==========================================
    window.showToast = function(message) {
        let toast = document.querySelector(".toast-notification");
        if (!toast) {
            toast = document.createElement("div");
            toast.className = "toast-notification";
            document.body.appendChild(toast);
        }

        toast.innerHTML = `<span>📋</span> <span>${message}</span>`;
        toast.classList.add("is-show");

        setTimeout(() => {
            toast.classList.remove("is-show");
        }, 3000);
    };

    // ==========================================
    // 7. LÓGICA DO FAQ ACCORDION
    // ==========================================
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(btn => {
        btn.addEventListener("click", function() {
            const faqItem = this.parentElement;
            const isOpen = faqItem.classList.contains("is-open");

            // Fechar todos os outros
            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== faqItem) item.classList.remove("is-open");
            });

            // Alternar o atual
            faqItem.classList.toggle("is-open", !isOpen);
        });
    });
});

