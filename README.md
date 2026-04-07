# 💈 Barbearia DH Gentlemen Club - Website Redesign

> **Status do Projeto:** Em desenvolvimento 🚧 (Fase de Planejamento Técnico e Acessibilidade)

Este projeto é um trabalho acadêmico de redesenho (redesign) da interface web para a barbearia **DH Gentlemen Club**. O objetivo principal é modernizar a presença digital do negócio, melhorando a experiência do usuário (UX) e a interface visual (UI), mantendo a essência e o logotipo original da marca.

## 🎯 Objetivo do Projeto
Criar uma landing page focada em conversão (agendamento de cortes), transmitindo a atmosfera clássica e premium da barbearia através de um design limpo, totalmente responsivo e com alto rigor de acessibilidade digital (A11Y).

## 🎨 UI/UX Design (Regal Green & Brass)
As escolhas visuais foram baseadas na fachada física da barbearia, misturando o estilo *Vintage/Clássico* com uma navegação moderna.
* **Tipografia:** Fonte **Inter** (foco em legibilidade e limpeza visual).
* **Fundo e Base:** Preto Carvão (`#1A1A1A`) e Verde Militar (`#304430`).
* **Destaques e Textos:** Dourado Antigo (`#D4AF37`) e Branco Sujo (`#F5F5F5`).
* **Call to Action (CTA):** Vermelho Queimado (`#A52A2A`).

## ♿ Acessibilidade e Qualidade (Ferramenta: WAVE)
O desenvolvimento deste site está sendo guiado e validado através da extensão **WAVE (Web Accessibility Evaluation Tool)**, garantindo que o código final atenda aos padrões da WCAG, oferecendo navegação inclusiva para todos os usuários.

---

## 🗺️ Roadmap e Priorização de Desenvolvimento

Para otimizar o fluxo de trabalho da equipe, as tarefas de implementação foram divididas por ordem de criticidade técnica e valor para o cliente.

### 🔴 Alta Prioridade (Obrigatório para o Core do Projeto)
Estas são as bases do site. Sem isso, o site não funciona corretamente para o cliente final nem passa nos testes básicos de acessibilidade.

- [x] **HTML Semântico:** Estruturar o documento corretamente (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) para que os robôs de busca e leitores de tela entendam a página.
- [ ] **Responsividade (Mobile-First):** O site deve funcionar perfeitamente em telas pequenas. Implementar o menu hambúrguer com atributos corretos (`aria-expanded`).
- [x] **Configuração de Cores e Contraste:** Ajustar os tons de verde e dourado para garantir que passem na validação de contraste do WAVE (mínimo 4.5:1).

### 🟡 Média Prioridade (Boas Práticas e Qualidade de Código)
Estas implementações elevam o nível técnico do projeto e melhoram muito a experiência do usuário (UX).

- [x] **Variáveis CSS (Custom Properties):** Estruturar a paleta de cores usando o `:root` do CSS para facilitar a manutenção e preparar o terreno para um futuro botão de "Alto Contraste".
- [x] **Link "Skip to Content" (Pular para o conteúdo):** Criar um link invisível no topo da página que só aparece ao navegar com a tecla `Tab`, permitindo ao usuário pular o cabeçalho.
- [x] **Focus States Visíveis (Navegação por teclado):** Garantir que todos os links e botões tenham um `outline` claro quando navegados via teclado.
- [x] **Embed do Google Maps (Localização):** Inserir o mapa na seção de contato com o respectivo atributo `title` para validação no WAVE.

### 🟢 Baixa Prioridade (Melhorias de Conversão e Detalhes)
Funcionalidades extras que agregam valor ao negócio do cliente, mas podem ser feitas após a estrutura principal estar 100% pronta.

- [ ] **Textos Alternativos (Alt Text):** Preencher detalhadamente as descrições nas imagens do portfólio de cortes.

---

## 🛠️ Ferramentas Utilizadas
* **Figma:** Wireframing e Prototipação UI/UX.
* **WAVE (WebAIM):** Testes e validação de acessibilidade.
* **HTML5, CSS3, JavaScript** (Desenvolvimento Front-end).

---
*Projeto desenvolvido para fins acadêmicos.*
