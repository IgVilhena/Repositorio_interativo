// --- 1. DADOS DO RELATÓRIO (Checklist agora em Array) ---
const stepsData = [
    {
        id: "passo1",
        btnTitle: "1. Preparação",
        title: "Etapa 1: Desligar Tudo e Baixar o App",
        detail: "Verifique e Desligue: Desconecte o cabo de energia e o cabo Ethernet do seu roteador e modem antigos. Aguarde 30 segundos. Baixe o App: Instale o aplicativo oficial do fabricante no seu smartphone.",
        checklist: ["Cabos desligados", "App instalado"] // <-- Agora é um Array
    },
    {
        id: "passo2",
        btnTitle: "2. Conexão Principal",
        title: "Etapa 2: Conectar o Nó Principal",
        detail: "Modem ao Mesh: Use o cabo Ethernet para ligar o nó principal diretamente ao seu modem de internet. Ligar: Conecte o cabo de energia apenas ao modem e ao nó principal. Aguarde as luzes estabilizarem.",
        checklist: ["Conexão Ethernet feita", "Unidades ligadas"]
    },
    {
        id: "passo3",
        btnTitle: "3. Configuração Inicial",
        title: "Etapa 3: Criar a Rede (SSID)",
        detail: "Acesso ao App: Abra o aplicativo e siga o assistente de configuração. Configuração: O app deve detectar o nó principal. Defina o Nome da Rede (SSID) e a Senha.",
        checklist: ["Nome e Senha definidos"]
    },
    {
        id: "passo4",
        btnTitle: "4. Adicionar Satélites",
        title: "Etapa 4: Posicionar e Sincronizar os Nós",
        detail: "Posicionamento: Coloque os nós satélites em locais estratégicos. Sincronização: Ligue-os à tomada. No app, clique em 'Adicionar novo nó' e aguarde a sincronização.",
        checklist: ["Nós satélites posicionados", "Sincronização concluída"]
    },
    {
        id: "passo5",
        btnTitle: "5. Teste Final",
        title: "Etapa 5: Verificar a Cobertura e Finalizar",
        detail: "Verificação: Use o recurso de 'teste de sinal' do app ou faça um teste de velocidade em diferentes cômodos. Extras: Explore recursos como Rede de Convidados e Controle Parental.",
        checklist: ["Teste de velocidade ok", "Recursos explorados"]
    }
];

// --- 2. FUNÇÕES DE INTERATIVIDADE E CHECKLIST ---

// Função para criar o checklist de checkboxes
function createChecklist(stepId, items) {
    const checklistContainer = document.getElementById('checklist-items');
    checklistContainer.innerHTML = ''; // Limpa o checklist anterior

    items.forEach((item, index) => {
        const itemId = `${stepId}-check-${index}`; // ID único para o item
        
        // Cria a div, checkbox e label
        const itemDiv = document.createElement('div');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');

        checkbox.type = 'checkbox';
        checkbox.id = itemId;
        checkbox.name = itemId;
        label.htmlFor = itemId;
        label.textContent = item.trim();

        // 3. Persistência: Verifica o localStorage para manter o estado
        if (localStorage.getItem(itemId) === 'true') {
            checkbox.checked = true;
            label.classList.add('checked');
        }

        // 4. Event Listener: Salva o estado quando clicado
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                localStorage.setItem(itemId, 'true');
                label.classList.add('checked');
            } else {
                localStorage.setItem(itemId, 'false');
                label.classList.remove('checked');
            }
        });
        
        itemDiv.appendChild(checkbox);
        itemDiv.appendChild(label);
        checklistContainer.appendChild(itemDiv);
    });
}

// Função para exibir o conteúdo da etapa selecionada
function displayStep(step) {
    document.getElementById('step-title').innerText = step.title;
    document.getElementById('step-detail').innerHTML = step.detail.replace(/\n/g, '<br>');
    
    // Chama a nova função para criar os checkboxes
    createChecklist(step.id, step.checklist); 
    
    // Atualiza o estado dos botões
    document.querySelectorAll('#step-navigation button').forEach(button => {
        button.classList.remove('active');
        if (button.id === step.id) {
            button.classList.add('active');
        }
    });
}

// Função para inicializar a navegação (cria os botões)
function initializeNavigation() {
    const navContainer = document.getElementById('step-navigation');
    
    stepsData.forEach(step => {
        const button = document.createElement('button');
        button.innerText = step.btnTitle;
        button.id = step.id;
        button.classList.add('step-button'); 
        
        button.addEventListener('click', () => {
            displayStep(step);
        });
        
        navContainer.appendChild(button);
    });
    
    // Exibe o primeiro passo ao carregar a página
    displayStep(stepsData[0]);
}

// Inicializa a aplicação quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', initializeNavigation);