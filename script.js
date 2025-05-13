var listaAtividades = [];
let atividadesEl = document.querySelector(".atividade");

function cadastrarAtividade() {
  let nomeAtividade = document.querySelector("#nome").value;
  let dataAtividade = document.querySelector("#data").value;

  var atividade = {
    nome: nomeAtividade,
    data: dataAtividade,
    finalizado: false,
  };
  listaAtividades.push(atividade);

  atualizarAtividades();
}

function atualizarAtividades() {
  atividadesEl.innerHTML = "";
  listaAtividades.forEach((element) => {
    if (element.nome && element.data) {
      atividadesEl.innerHTML += `
      <input type="checkbox" ${element.finalizado ? "checked" : ""}>
      <span>${element.nome}</span> | 
      <span>${element.data}</span>
      <br>
    `;
    }
  });
}
