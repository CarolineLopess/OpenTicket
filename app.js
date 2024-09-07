function Buscar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas para facilitar a comparação
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa === "") {
      // Se estiver vazio, exibe uma mensagem de erro na seção de resultados
      section.innerHTML = "Por favor, digite o nome do evento!";
      // Interrompe a função
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada evento nos dados
    for (let dado of dados) {
      // Converte o título e a descrição do evento para minúsculas para facilitar a comparação
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
  
      // Verifica se o título ou a descrição contém o termo pesquisado
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        // Se encontrar um resultado, adiciona o HTML de um item de resultado à string de resultados
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="data-local">Data: ${dado.data} | Local: ${dado.local}</p>
            <a href=${dado.link}"https://www.instagram.com/universoparalello/" target="_blank">Mais informações, acesse</a>
          </div>`;
      }
    }
  
    // Se nenhum resultado for encontrado, exibe uma mensagem informando
    if (!resultados) {
      resultados = "<p>Nada Foi encontrado!</p>";
    }
  
    // Atualiza o conteúdo da seção de resultados com os resultados da pesquisa
    section.innerHTML = resultados;
  }