let bolinha = [1, 1, 1, 1, 1];

let pBolinha = new Array(2);
pBolinha[0] = 0;
pBolinha[1] = 0;

var comecou = false;

function jogar() {
  document.getElementById("caixa").remove();
  player = Math.floor(Math.random() * 2);
  playAtualizar(player);
  comecou = true;
  document.getElementById("bolinhas").style.cssText =
    "display: flex !important";
  console.log(document.getElementById("bolinhas"));
}

function encerraJogo(pBolinha, player) {
  if (pBolinha[0] + pBolinha[1] == 15) {
    let comeco = document.getElementById("bolinhas");
    let reiniciar = document.createElement("div");
    reiniciar.id = "caixa";
    comeco.appendChild(reiniciar);

    let reco = document.getElementById("caixa");
    reco.innerHTML =
      '<a id="jogar" class="btn btn-primary mt-2" onmousedown="reiniciarJogo()" role="button">Recomeça</a>';
    document.getElementById("vezDeQuem").textContent =
      "O jogo acabou. O Jogador " + (player + 1) + " venceu!";

    return true;
  }
}

function playAtualizar(player) {
  document.getElementById("vezDeQuem").textContent =
    "Vez do jogador " + (player + 1);
}

function bolinAtualizar(atBolinha) {
  // document.getElementById("pontos" + atBolinha).textContent =
  //   "Bolinhas removidas: " + pBolinha[atBolinha];
}

function pintaBolinha(tabColuna, tabLinha) {
  for (let i = bolinha[tabColuna]; i <= tabLinha; i++) {
    document.getElementById("img-" + tabColuna + i).src = "/images/bola.png";
    document.getElementById("img-" + tabColuna + i).style.backgroundColor =
      "#0000ff";
  }
}

function despintaBolinha(tabColuna, tabLinha) {
  for (let i = bolinha[tabColuna]; i <= tabLinha; i++) {
    document.getElementById("img-" + tabColuna + i).src = "/images/bola.png";
    document.getElementById("img-" + tabColuna + i).style.backgroundColor =
      "transparent";
  }
}

function removeBolinha(tabColuna, tabLinha) {
  if (comecou) {
    let numeroBolinha = 0;
    for (let i = bolinha[tabColuna]; i <= tabLinha; i++) {
      let atuBolinha = document.getElementById("img-" + tabColuna + i);

      atuBolinha.src = "/images/sem.png";
      atuBolinha.id = "vazio-" + tabColuna + i;
      atuBolinha.style.backgroundColor = "transparent";
      atuBolinha.disabled = true;

      bolinha[tabColuna]++;
      numeroBolinha++;
    }

    pBolinha[player] += numeroBolinha;
    bolinAtualizar(player);
    if (!encerraJogo(pBolinha, player)) {
      if (numeroBolinha != 0) {
        if (player == 0) player = 1;
        else player = 0;
      }
      playAtualizar(player);
      console.log(player);
    }
  }
}

function reiniciarJogo() {
  for (let i = 0; i < bolinha.length; i++) {
    for (let j = 1; j < bolinha[i]; j++) {
      let atuBolinha = document.getElementById("vazio-" + i + j);

      atuBolinha.id = "img-" + i + j;

      atuBolinha.src = "/images/bola.png";
    }
  }

  bolinha = [1, 1, 1, 1, 1];
  pBolinha[0] = 0;
  pBolinha[1] = 0;

  document.getElementById("caixa").remove();
  // document.getElementById("pontos0").textContent = "Bolinhas removidas: 0";
  // document.getElementById("pontos1").textContent = "Bolinhas removidas: 0";

  player = Math.floor(Math.random() * 2);
  playAtualizar(player);
}
