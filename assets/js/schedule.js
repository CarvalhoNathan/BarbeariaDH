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
});
