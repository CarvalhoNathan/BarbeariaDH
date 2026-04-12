# 💈 Barbearia DH Gentlemen Club

Este projeto é um trabalho acadêmico de redesign da interface web para a **Barbearia DH Gentlemen Club**. O objetivo principal foi modernizar a presença digital do negócio, melhorando a experiência do usuário (UX) e a interface visual (UI), mantendo a essência e o logotipo original da marca, e com foco total na implementação de **acessibilidade digital (A11Y)**.

## 📑 Sumário
- [🎯 Objetivos do Projeto](#-objetivos-do-projeto)
- [🎨 UI/UX Design](#-uiux-design-verde-escuro--laranja)
- [♿ Acessibilidade e Qualidade](#-acessibilidade-e-qualidade)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto-localmente)
- [🗺️ Roadmap Concluído](#️-etapas-concluídas-roadmap-de-desenvolvimento)
- [🛠️ Ferramentas Utilizadas](#️-ferramentas-utilizadas)

---

## 🎯 Objetivos do Projeto

- **Landing Page Focada em Conversão:** Criar uma estrutura focada em agendamento de cortes, transmitindo a atmosfera clássica e premium da barbearia através de um design limpo e totalmente responsivo.
- **Acessibilidade Digital (A11Y):** Implementar e garantir que o site seja acessível para todos os usuários, incluindo pessoas com deficiência física ou visual, atendendo às mais rigorosas validações de acessibilidade.

## 🎨 UI/UX Design (Verde Escuro & Laranja)
As escolhas visuais foram baseadas na fachada física da barbearia, misturando o estilo *Vintage/Clássico* com uma navegação moderna.
* **Tipografia:** Fontes **Inter** e **Luxurious Roman**.
* **Fundo e Base:** Preto (`#000000`) e tons de Verde Escuro (`#08370B`, `#102B13`).
* **Destaques e Textos:** Laranja (`#F97F2C`) e Branco / Off-White (`#F5F5F5`, `#F5FAFB`).
* **Call to Action (CTA):** Laranja Vibrante Acessível (`#FF6600`).

## ♿ Acessibilidade e Qualidade
O desenvolvimento deste site foi totalmente guiado e validado garantindo que o código final atenda aos padrões exigidos pela **WCAG**. A navegação inclusiva foi garantida por meio de testes usando relatórios do **WAVE** e do **AccessMonitor**.

---

## 🗺️ Etapas Concluídas (Roadmap de Desenvolvimento)

Nesta versão final de entrega, todas as tarefas de implementação e ajustes do código focadas em acessibilidade foram validadas e concluídas com sucesso:

### 🔴 Alta Prioridade (Core do Projeto)
- [x] **HTML Semântico:** Estruturação correta do documento (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) para perfeita compreensão de robôs de busca e leitores de tela.
- [x] **Responsividade (Mobile-First):** Funcionamento perfeito em telas pequenas, incluindo um menu responsivo agora com interatividade nativa via teclado e controle real de estado (`aria-expanded`).
- [x] **Contraste Acessível:** Ajuste assertivo e definitivo dos tons de verde e laranja para garantir aprovação na validação de contraste (mínimo 4.5:1).

### 🟡 Média Prioridade (Boas Práticas e Qualidade de Código)
- [x] **Variáveis CSS (Custom Properties):** Paleta de cores padronizada via `:root` do CSS para facilitar a escalabilidade.
- [x] **Link "Skip to Content" (Pular para o conteúdo):** Criação de atalho invisível no topo da página focado em agilizar a navegação de quem usa teclado.
- [x] **Focus States Visíveis e Nítidos:** Implementação de `outline` sob medida (Laranja) e regras de `:focus-visible` em todos os links e botões para os usuários de acessibilidade motora.
- [x] **Embed do Google Maps Acessível:** Uso correto do atributo `title` no iFrame de localização.

### 🟢 Baixa Prioridade (Melhorias de Conversão e Detalhes)
- [x] **Textos Alternativos e Descritivos:** Inclusão detalhada de textos alternativos (`alt`) nas imagens (`<img>`) e inserção semântica de atributos (`aria-label`) para contextualizar links focados em ações ("Agendar" e "Comprar").

---

## 🚀 Como Executar o Projeto Localmente

Este é um projeto estático e nativo em HTML/CSS/JS, não requer frameworks pesados ou instalação de pacotes via terminal.

1. Faça o clone deste repositório ou baixe os arquivos em formato compacto (`.zip`).
2. Extraia os arquivos (se necessário) e navegue até a pasta principal do projeto.
3. Dê duplo clique no arquivo `index.html` para abri-lo de forma imediata no seu navegador padrão.
   *Dica: Ou abra a pasta em uma IDE (como o VS Code) e utilize a extensão **Live Server** para testar as alterações de código com carregamento automático ("Hot Reload").*

---

## 🛠️ Ferramentas Utilizadas
* **[Figma](https://www.figma.com/):** Wireframing e Prototipação UI/UX.
* **[WAVE (WebAIM)](https://wave.webaim.org/):** Testes profundos e validação de acessibilidade digital.
* **[AccessMonitor](https://accessmonitor.acessibilidade.gov.pt/):** Testes em português e validação restrita de acessibilidade.
* **HTML5, CSS3, JS Vanilla:** Tecnologias adotadas pro Redesign.

---
*Projeto desenvolvido para fins acadêmicos.*
