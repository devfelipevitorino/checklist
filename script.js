var listaAtividades = [];
let atividadesEl = document.querySelector(".atividade");

function utilLimparInput() {
  document.querySelector("#nome").value = "";
  document.querySelector("#data").value = "";
  document.querySelector("#observacos").value = "";
}

function utilFormatarData(dataISO) {
  const data = new Date(dataISO);
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function cadastrarAtividade() {
  let nomeAtividade = document.querySelector("#nome").value;
  let dataAtividade = document.querySelector("#data").value;
  let observacoesAtividade = document.querySelector("#observacos").value;

  if (nomeAtividade && dataAtividade) {
    var atividade = {
      nome: nomeAtividade,
      data: dataAtividade,
      observacoes: observacoesAtividade,
      finalizado: false,
    };
    listaAtividades.push(atividade);
    atualizarAtividades();
  } else {
    console.log("Campos Inválidos!");
  }
  utilLimparInput();
}

function atualizarAtividades() {
  atividadesEl.innerHTML = "";
  listaAtividades.forEach((element) => {
    if (element.nome && element.data) {
      atividadesEl.innerHTML += `
        <div class="item-atividade">
          <div class="item-topo">
            <div class="esquerda">
              <input type="checkbox" ${element.finalizado ? "checked" : ""}>
              <span class="nome">${element.nome}</span>
            </div>
            <div class="direita">
              <span class="data">${utilFormatarData(element.data)}</span>
            </div>
          </div>
          <div class="item-observacao">${element.observacoes}</div>
        </div>
      `;
    }
  });
}
