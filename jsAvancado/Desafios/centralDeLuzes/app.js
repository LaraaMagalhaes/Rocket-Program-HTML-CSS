const central = CentralDeLuzes.getInstance();
const botoes = document.querySelectorAll('button[data-comodo]');
const statusEl = document.getElementById('status');

function atualizarUI(comodo) {
  const divComodo = document.getElementById(comodo);

  if (central.estaLigada(comodo)) {
    divComodo.classList.add('acesa');                   
    statusEl.textContent = `Luz do ${comodo} ligada`;
  } else {
    divComodo.classList.remove('acesa');
    statusEl.textContent = `Luz do ${comodo} desligada`;
  }
}

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const comodo = botao.dataset.comodo;               
    if (central.estaLigada(comodo)) {
      central.desligar(comodo);
    } else {
      central.ligar(comodo);
    }
    atualizarUI(comodo);                                   
  });
});
