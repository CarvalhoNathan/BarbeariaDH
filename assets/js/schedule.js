document.addEventListener("DOMContentLoaded", function () {
    // 1. População dinâmica dos horários disponíveis (10h às 19h)
    const selectHorario = document.getElementById("horario");
    if (selectHorario) {
        for (let h = 10; h <= 19; h++) {
            ["00", "30"].forEach(m => selectHorario.add(new Option(`${h}:${m}`, `${h}:${m}`)));
        }
    }

    // 2. Data mínima para agendamento igual ao dia atual
    const inputData = document.getElementById("data");
    if (inputData) {
        const hoje = new Date().toISOString().split("T")[0];
        inputData.setAttribute("min", hoje);
    }

    // 3. Máscara de telefone reativa: (13) 12345-6789
    const inputTelefone = document.getElementById("telefone");
    if (inputTelefone) {
        inputTelefone.addEventListener("input", function (e) {
            let valor = e.target.value.replace(/\D/g, "");
            valor = valor.substring(0, 11);
            let formatado = "";

            if (valor.length > 0) {
                formatado = "(" + valor;
            }
            if (valor.length > 2) {
                formatado = "(" + valor.substring(0, 2) + ") " + valor.substring(2);
            }
            if (valor.length > 7) {
                formatado = "(" + valor.substring(0, 2) + ") " + valor.substring(2, 7) + "-" + valor.substring(7);
            }
            e.target.value = formatado;
        });
    }
    // 4. Lógica da Janela Flutuante (Pop-up Oficial Trinks - Padrão Widget /framebusca)
    const btnTrinksPopup = document.getElementById("btn-trinks-popup");
    if (btnTrinksPopup) {
        btnTrinksPopup.addEventListener("click", function () {
            const width = Math.min(980, window.innerWidth - 40);
            const height = Math.min(640, window.innerHeight - 40);
            const left = Math.max(0, (window.innerWidth - width) / 2 + window.screenX);
            const top = Math.max(0, (window.innerHeight - height) / 2 + window.screenY);

            const url = "https://www.trinks.com/dh-gentlemen-club/framebusca";
            window.open(
                url,
                "AgendamentoTrinksDH",
                `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,status=no`
            );
        });
    }

    // 5. Lógica de Tela Cheia Opcional para a Prévia do Trinks
    const btnFullscreen = document.getElementById("btn-fullscreen");
    const trinksContainer = document.getElementById("trinks-container");
    const fullscreenText = document.getElementById("fullscreen-text");

    if (trinksContainer) {
        const toggleFullscreen = (forceState) => {
            const isFull = typeof forceState === "boolean" 
                ? trinksContainer.classList.toggle("is-fullscreen", forceState)
                : trinksContainer.classList.toggle("is-fullscreen");

            document.body.style.overflow = isFull ? "hidden" : "";

            if (fullscreenText) {
                fullscreenText.textContent = isFull ? "Sair da Tela Cheia ✕" : "Expandir Tela Cheia";
            }
        };

        if (btnFullscreen) {
            btnFullscreen.addEventListener("click", function () {
                toggleFullscreen();
            });
        }

        // Fechar ao pressionar a tecla Escape
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && trinksContainer.classList.contains("is-fullscreen")) {
                toggleFullscreen(false);
            }
        });
    }
});
