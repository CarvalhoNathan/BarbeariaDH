/**
 * counter.js - Barbearia DH Gentlemen Club
 * Animação de contagem inicial + Live Ticker incremental em tempo real com pulso de iluminação.
 */
(function () {
    function startCounters() {
        const elements = document.querySelectorAll('.stat-number');
        if (!elements.length) return;

        elements.forEach((el) => {
            if (el.dataset.countStarted === 'true') return;
            el.dataset.countStarted = 'true';

            let target = parseFloat(el.getAttribute('data-counter')) || 0;
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';
            const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
            const isLiveTicker = el.getAttribute('data-live-ticker') === 'true';

            const formatVal = (val) => {
                if (decimals > 0) {
                    return val.toFixed(decimals).replace('.', ',');
                }
                const integerVal = Math.floor(val);
                return integerVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            };

            const onComplete = () => {
                el.textContent = prefix + formatVal(target) + suffix;

                // Se o elemento for um Live Ticker (ex: Clientes Satisfeitos), simula agendamento/atendimento em tempo real!
                if (isLiveTicker) {
                    scheduleNextIncrement(el, target, prefix, suffix, formatVal);
                }
            };

            // Tentar usar biblioteca oficial CountUp.js caso o CDN esteja disponível
            const CountUpConstructor = (window.countUp && window.countUp.CountUp) || window.CountUp;
            if (typeof CountUpConstructor === 'function') {
                const options = {
                    startVal: 0,
                    decimalPlaces: decimals,
                    duration: 2.2,
                    prefix: prefix,
                    suffix: suffix,
                    decimal: ',',
                    separator: '.'
                };
                const instance = new CountUpConstructor(el, target, options);
                if (!instance.error) {
                    instance.start(onComplete);
                    return;
                }
            }

            // Fallback nativo ultra-fluido com curva cubic ease-out
            const duration = 2000;
            const startTime = performance.now();

            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Cubic ease-out
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                const current = target * easeProgress;

                el.textContent = prefix + formatVal(current) + suffix;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    onComplete();
                }
            }
            requestAnimationFrame(animate);
        });
    }

    // Função de incremento ao vivo (+1 cliente atendido/agendado)
    function scheduleNextIncrement(el, initialVal, prefix, suffix, formatVal) {
        let currentCount = initialVal;

        function triggerIncrement() {
            // Intervalo randômico entre 6 e 12 segundos
            const randomDelay = Math.floor(Math.random() * (12000 - 6000 + 1)) + 6000;

            setTimeout(() => {
                currentCount += 1;
                el.textContent = prefix + formatVal(currentCount) + suffix;

                // Ativa efeito visual de pulso e brilho âmbar
                el.classList.add('stat-pulse-up');
                setTimeout(() => {
                    el.classList.remove('stat-pulse-up');
                }, 650);

                // Continua o ticker dinâmico
                triggerIncrement();
            }, randomDelay);
        }

        // Primeira adição após 4 segundos do encerramento da contagem inicial
        setTimeout(triggerIncrement, 4000);
    }

    function initMotion() {
        const statsGrid = document.querySelector('.stats-grid');
        if (!statsGrid) {
            startCounters();
            return;
        }

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startCounters();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(statsGrid);
        } else {
            startCounters();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMotion);
    } else {
        initMotion();
    }
})();
