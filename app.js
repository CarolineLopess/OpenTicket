function Buscar() {
    let sectionResultados = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa");
    let valorCampoPesquisa = campoPesquisa.value.toLowerCase();

    // Limpa os resultados anteriores e esconde a seção de resultados imediatamente
    sectionResultados.innerHTML = "";
    sectionResultados.classList.remove("visible"); // Remove a classe 'visible'
    
    // Remove a classe 'visible' de qualquer mensagem de feedback anterior
    const mensagemFeedbackAntiga = document.querySelector('.mensagem-feedback.visible');
    if (mensagemFeedbackAntiga) {
        mensagemFeedbackAntiga.classList.remove('visible');
    }

    if (valorCampoPesquisa === "") {
        // Se o campo estiver vazio, exibe a mensagem de erro e não exibe os resultados
        sectionResultados.innerHTML = "<p class='mensagem-feedback'>Por favor, digite o nome do evento!</p>";
        // Adiciona um pequeno atraso para a animação da mensagem de feedback
        setTimeout(() => {
            const novaMensagemFeedback = sectionResultados.querySelector('.mensagem-feedback');
            if (novaMensagemFeedback) {
                novaMensagemFeedback.classList.add('visible');
            }
        }, 10); // Pequeno atraso para a transição funcionar
        return; // Interrompe a função aqui
    }
 
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let eventoEncontrado = false;
 
    // Itera sobre cada evento nos dados
    for (let dado of dados) {
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
 
      if (titulo.includes(valorCampoPesquisa) || descricao.includes(valorCampoPesquisa)) {
            eventoEncontrado = true;
            resultados += `
                <div class="item-resultado">
                    ${dado.imagem ? `<img src="${dado.imagem}" alt="Imagem do evento ${dado.titulo}" class="imagem-evento">` : ''}
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="data-local">Data: ${dado.data} | Local: ${dado.local}</p>
                    <button class="botao-mais-info" onclick="abrirModal('${dado.titulo}')">Ver Ingressos</button>
                </div>`;
        }
    }

    if (!eventoEncontrado) {
        resultados = "<p class='mensagem-feedback'>Nenhum resultado foi encontrado! Tente refinar sua pesquisa.</p>";
        sectionResultados.innerHTML = resultados;
        // Adiciona um pequeno atraso para a animação da mensagem de feedback
        setTimeout(() => {
            const novaMensagemFeedback = sectionResultados.querySelector('.mensagem-feedback');
            if (novaMensagemFeedback) {
                novaMensagemFeedback.classList.add('visible');
            }
        }, 10);
    } else {
        sectionResultados.innerHTML = resultados;
        // Adiciona a classe 'visible' para exibir e animar os resultados
        setTimeout(() => {
            sectionResultados.classList.add("visible");
        }, 10); // Pequeno atraso para a transição funcionar
    }

    campoPesquisa.value = ""; // Limpa o campo de busca
}