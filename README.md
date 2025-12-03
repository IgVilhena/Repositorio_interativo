🏡 Guia Interativo de Instalação: Whole Home Mesh Wi-Fi System

Este é um relatório digital e interativo construído em HTML, CSS e JavaScript para guiar o usuário, passo a passo, na instalação e configuração de um sistema Wi-Fi Mesh de cobertura total.
🎯 Funcionalidades e Propósito

O objetivo principal deste projeto é transformar um manual de instruções estático em uma experiência dinâmica e controlada, ideal para suporte técnico ou documentação de produto.

    Navegação Interativa: O usuário pode clicar nos botões de etapa para exibir o conteúdo relevante.

    Progressão Controlada: O projeto implementa uma regra de bloqueio, permitindo que o usuário avance para a Próxima Etapa apenas se todos os itens do Checklist da etapa atual estiverem marcados como concluídos.

    Persistência de Dados: O estado do checklist (o que foi marcado) é salvo localmente no navegador (localStorage), garantindo que o progresso seja mantido mesmo se a página for recarregada.

    Estilo Retrô: A interface utiliza um tema visual inspirado em sistemas operacionais antigos (Retro Computing / Windows 95) para um visual único e focado.

⚙️ Tecnologias Utilizadas
Tecnologia	Função
HTML5 (index.html)	Estrutura básica do relatório e dos elementos de navegação.
CSS3 (style.css)	Estilização retrô (fontes monoespaçadas, efeitos de botão 3D e cores limitadas).
JavaScript (main.js)	Lógica de interatividade, controle de fluxo (bloqueio da próxima etapa) e persistência (localStorage).
🚀 Como Visualizar

    Clone este repositório:
    Bash

    git clone [LINK-DO-SEU-REPOSITORIO]

    Navegue até a pasta do projeto.

    Abra o arquivo index.html diretamente no seu navegador.

A navegação sequencial será controlada pelos botões "Próximo" e "Anterior" que se habilitam conforme o checklist é completado.
