# 💈 Barbearia DH Gentlemen Club

<div align="center">

[![Live Demo](https://img.shields.io/badge/DEMO-Ver%20Site%20Online-22c55e?style=for-the-badge&logo=google-chrome&logoColor=white)](https://carvalhonathan.github.io/BarbeariaDH/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![WCAG 2.1 AAA](https://img.shields.io/badge/WCAG%202.1-AAA-success?style=for-the-badge)
![AOS Animation](https://img.shields.io/badge/AOS-Scroll%20Reveal-orange?style=for-the-badge)

</div>

---

> 🚀 **Demonstração Online:** Acesse o projeto ao vivo no GitHub Pages: **[https://carvalhonathan.github.io/BarbeariaDH/](https://carvalhonathan.github.io/BarbeariaDH/)**

---

Este repositório apresenta o redesign completo da interface web para a **Barbearia DH Gentlemen Club** (Santos / Gonzaga - Canal 3). O projeto foi concebido com o objetivo de modernizar a presença digital da marca, elevar a experiência do usuário (UX/UI) a um patamar altamente premium e garantir **100% de conformidade com as diretrizes de acessibilidade digital (A11y)**, atendendo rigorosamente aos padrões da **WCAG (Web Content Accessibility Guidelines)** e WAI-ARIA.

![Screenshot da página inicial](./assets/images/print-home.png)

---

## 📌 Sumário de Navegação

- 🌟 [Recursos Interativos & Redesign 2.0](#-recursos-interativos--redesign-20)
- ♿ [Painel de Acessibilidade (FAB) & VLibras](#-painel-de-acessibilidade-fab--vlibras)
- 📱 [Visão Geral das Páginas do Projeto](#-visão-geral-das-páginas-do-projeto)
- 📐 [Engenharia e Arquitetura DRY](#-engenharia-e-arquitetura-dry-dont-repeat-yourself)
- 📂 [Estrutura de Arquivos](#-estrutura-de-arquivos-do-projeto)
- ♿ [Validação de Acessibilidade & Qualidade](#-validação-de-acessibilidade--qualidade)
- 🚀 [Como Executar Localmente](#-como-executar-o-projeto-localmente)
- 🛠️ [Tecnologias Adotadas](#️-tecnologias-adotadas)

---

## 🌟 Recursos Interativos & Redesign 2.0

### 📊 1. Contador Numérico Animado & Ticker em Tempo Real (`CountUp.js`)
* **Contagem Progressiva Fluída:** Na barra de estatísticas (`stats-grid`), as métricas de sucesso (+10.292 Clientes, 10 Anos de Tradição, Nota 4.9 ★ no Google e 100% Atendimento VIP) iniciam uma animação de contagem numérica ao entrar na tela.
* **Live Ticker:** O número de clientes satisfeitos aumenta dinamicamente em tempo real via script (`data-live-ticker="true"`), trazendo vida e dinamismo à prova social do estabelecimento.

### ✂️ 2. Vitrine Completa com 20 Serviços & Filtro por Categoria (`services.html`)
* **Catálogo 100% Sincronizado com Trinks:** Tabela de preços e menus categorizados com duração precisa e descrições técnicas detalhadas dos 20 serviços oferecidos pelo Barbeiro Chefe **Douglas Henrique**.
* **Barra de Filtros Glass Flutuante:** Filtro responsivo em cápsula de vidro escuro (`rgba(14, 26, 17, 0.75)`) com bordas em tom âmbar (`rgba(249, 127, 44, 0.3)`), permitindo alternar instantaneamente entre as categorias:
  - 🔳 *Todos os Serviços (20)*
  - 👑 *Combos VIP*
  - ✂️ *Cabelo*
  - 🪓 *Barba* (com vetor exclusivo de Barba Viking)
  - 🧪 *Tratamentos & Alinhamentos*
  - ✦ *Estética Facial*
* **Ações Duplas nos Cards:** Cada card conta com o botão principal **"Agendar no Trinks"** integrado a um botão direto do **WhatsApp** com ícone vetorial personalizado e mensagem pré-formatada do serviço escolhido.

### 🎭 3. Animações Modernas & Micro-Interações de UX/UI
* **✨ Animação de Scroll Reveal (AOS):** Entrada suave com efeito `fade-up` e atraso escalonado (`data-aos-delay`) na rolagem de página para seções, cabeçalhos e cards.
* **🌟 Varredura de Luz (*Shimmer Sweep*):** Ao passar o mouse sobre qualquer card, um feixe translúcido de luz desliza pela superfície. Ao retirar o cursor, o efeito reseta instantaneamente sem animação reversa (`transition: none` no mouseleave).
* **⛰️ Elevação 3D & Brilho Neon Âmbar:** Cards elevam-se suavemente (`translateY(-6px)`) com iluminação de borda e sombra âmbar vibrante (`box-shadow: 0 16px 35px rgba(249, 127, 44, 0.25)`).
* **⏱️ Giro & Brilho no Badge de Duração:** As etiquetas de tempo de serviço (`1h`, `40min`, `1h 20min`) se iluminam no hover e o ícone vetorial do relógio executa um giro gracioso de 20 graus.
* **🟢 Pulso Suave no Widget Flutuante do WhatsApp:** O botão fixo do canto inferior direito conta com um ciclo de animação suave de 6 segundos, realizando um pulso discreto a cada intervalo para atração visual sem poluição.
* **🖱️ Cursor Padrão Trava-Texto:** Enforcamento de `cursor: default` nos textos de títulos, preços e descrições dos cards, evitando que a seta do mouse se transforme no cursor de seleção de texto `I-beam`.

### 🕒 4. Indicador Dinâmico de Status da Loja (`store-status.js`)
* Leitura automática do horário local do sistema para exibir em tempo real se a barbearia está **"Aberto Agora"** (com indicador verde) ou **"Fechado"** conforme o expediente comercial.

---

## ♿ Painel de Acessibilidade (FAB) & VLibras

Para garantir uma navegação democrática e inclusiva, o site conta com um ecossistema completo de recursos de acessibilidade injetados dinamicamente e persistidos automaticamente entre todas as páginas.

### 🌟 Recursos do Painel Flutuante (FAB)
* **Aumentar / Diminuir Fonte:** Ajuste dinâmico e proporcional de todas as fontes do site em passos de 15% (70% a 145%) com redimensionamento responsivo.
* **Alto Contraste AAA:** Inversão para fundo preto absoluto (`#000000`), textos e bordas em amarelo vibrante (`#ffff00`) e links destacados em ciano (`#00ffff`), garantindo aprovação máxima em testes de legibilidade.
* **Modo Claro (Premium Cozy Theme):** Inversão acolhedora em tom linho suave (`#f5f2eb`), cartões em branco puro (`#ffffff`), textos em cinza-carvão (`#1e1e1e`) e detalhes em cobre terroso (`#e26918`).
* **Destacar Links:** Fundo amarelo brilhante, texto preto, sublinhado duplo e contornos fortes de foco.
* **Pausar Animações:** Interrompe imediatamente todas as transições e animações cíclicas do CSS para navegação segura contra cinetose ou sensibilidade a movimento.
* **Resetar:** Restaura a identidade estética original da barbearia.

### 🤟 Tradutor de Libras (VLibras)
* Widget oficial do **VLibras** integrado assincronamente e posicionado de forma simétrica abaixo do botão FAB no meio vertical da tela (a `30%` do topo), sem sobreposições.

---

## 📱 Visão Geral das Páginas do Projeto

| Página | Arquivo | Principais Funcionalidades & Conteúdos |
| :--- | :--- | :--- |
| **Início** | `index.html` | Hero split com outdoor, contador animado de estatísticas, diferenciais glass, galeria HD e serviços signature com agendamento direto |
| **Serviços & Produtos** | `services.html` | Vitrine completa com 20 serviços divididos em 6 categorias com filtro interativo, marcas de luxo (Keune/Baboon) e ações para Trinks/WhatsApp |
| **Sobre Nós** | `about.html` | História da barbearia desde 2016, filosofia de visagismo sob medida com Douglas Henrique, comodidades do lounge bar e localização no Gonzaga |
| **Agendamento** | `schedule.html` | Formulário de agendamento inteligente com máscara de telefone, seleção de serviço/horário e integração com a API do Trinks |
| **Localização** | `location.html` | Mapa interativo do Google Maps no Canal 3, endereço completo, horários de funcionamento e rotas de acesso |
| **Sucesso** | `success.html` | Tela de confirmação de agendamento concluído com resumo dos dados da reserva e atalho de retorno à página principal |

---

## 📐 Engenharia e Arquitetura DRY (Don't Repeat Yourself)

* **Injeção Dinâmica via `a11y.js`:** A estrutura do FAB, do Menu de Opções e do VLibras são injetados programaticamente no `<body>` de cada página durante o carregamento.
* **Persistência de Estado (`localStorage`):** O estado de acessibilidade é mantido sob a chave `"a11y-state"`. Ao navegar entre páginas, os estilos são reaplicados instantaneamente, eliminando piscadas visuais (*FOUC*).
* **Usabilidade por Teclado (WCAG/WAI-ARIA):** Suporte completo à navegação por `Tab`, setas direcionais ($\uparrow$/$\downarrow$), `Home`/`End` e gerenciamento de foco preso no menu suspenso.

---

## 📂 Estrutura de Arquivos do Projeto

```text
BarbeariaDH/
├── assets/
│   ├── css/
│   │   ├── about.css       # Estilos específicos da página "Sobre Nós"
│   │   ├── location.css    # Estilos específicos da página "Localização"
│   │   ├── main.css        # Variáveis CSS, grid global, glassmorphism e temas de Acessibilidade
│   │   ├── schedule.css    # Estilos do formulário de Agendamento
│   │   └── services.css    # Estilos da vitrine de Serviços, Filtro de Categorias e Cards
│   ├── images/             # Fotos otimizadas (ex: logo-outdoor.jpg, espelho-barbearia.jpg, cortes)
│   └── js/
│       ├── a11y.js          # Core de Acessibilidade, Loop de Foco e Injeção do VLibras
│       ├── schedule.js      # Validação de formulário, máscara de telefone e horários dinâmicos
│       ├── service-filter.js# Filtro interativo de categorias e transições animadas
│       └── store-status.js  # Indicador em tempo real de loja aberta/fechada
├── about.html              # Página "Sobre Nós" (História, Visagismo e Lounge)
├── index.html              # Página Inicial (Hero Banner Split, Métricas, Galeria e Serviços Signature)
├── location.html           # Página de Localização e Mapa Interativo (Gonzaga / Canal 3)
├── schedule.html           # Formulário de Agendamento Inteligente
├── services.html           # Vitrine Completa dos 20 Serviços & Produtos
├── success.html            # Confirmação de Agendamento Concluído
└── README.md               # Documentação Oficial
```

---

## ♿ Validação de Acessibilidade & Qualidade

O site foi homologado com nota máxima nos principais validadores do mercado:

1. **[WAVE Evaluation Tool (WebAIM)](https://wave.webaim.org/):** **0 Erros de Acessibilidade, 0 Erros de Contraste** e 100% de Elementos Estruturais Corretos.
2. **[AccessMonitor](https://accessmonitor.acessibilidade.gov.pt/):** Conformidade estrita com o padrão **WCAG 2.1 AAA**.
3. **Leitores de Tela:** Testado manualmente em leitores por voz (**NVDA** no desktop e **TalkBack** no Android/iOS).

---

## 🚀 Como Executar o Projeto Localmente

Por se tratar de uma aplicação web estática nativa em HTML5, CSS3 e JavaScript Vanilla, não há necessidade de instalar dependências ou gerenciadores de pacotes (`npm`/`yarn`).

1. Clone o repositório ou baixe o zip do código.
2. Abra a pasta raiz do projeto.
3. Dê duplo clique no arquivo `index.html` para abrir diretamente no navegador ou utilize a extensão **Live Server** no VS Code para desenvolvimento com hot reload.

---

## 🛠️ Tecnologias Adotadas
* **Marcação Semântica:** HTML5 com atributos WAI-ARIA.
* **Estilização:** Vanilla CSS3, Custom Properties (Variáveis CSS), Flexbox & CSS Grid Layout.
* **Lógica & Manipulação DOM:** JavaScript ES6+ nativo e modular.
* **Bibliotecas Externas:** [AOS Library](https://michalsnik.github.io/aos/) (Scroll Reveal) e [CountUp.js](https://inorganik.github.io/countUp.js/) (Contador Animado).
* **Ícones Vetoriais:** SVGs inline personalizados e otimizados ([Lucide Icons](https://lucide.dev/)).

---

<div align="center">

*Projeto desenvolvido para a **Barbearia DH Gentlemen Club** - Santos/SP.*

</div>
