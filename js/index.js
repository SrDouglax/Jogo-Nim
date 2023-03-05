let bolinha = [1, 1, 1, 1, 1];

let pBolinha = new Array(2);
pBolinha[0] = 0;
pBolinha[1] = 0;

var comecou = false;

function jogar() {
  document.getElementById("jogar").remove();
  player = Math.floor(Math.random() * 2);
  playAtualizar(player);
  comecou = true;
  document.getElementById("bolinhas").style.cssText =
    "display: flex !important";
  console.log(document.getElementById("bolinhas"));
  document.getElementById("vezDeQuem").style.display = "flex";
  document.getElementById("play1").style.display = "flex";
  document.getElementById("play2").style.display = "flex";
  document.body.className = "started";
}

function encerraJogo(pBolinha, player) {
  if (pBolinha[0] + pBolinha[1] == 15) {
    let container = document.querySelector(".container");
    let reiniciar = document.createElement("div");
    container.appendChild(reiniciar);
    reiniciar.outerHTML = '<a id="jogar" class="btn btn-primary mt-2" onmousedown="reiniciarJogo()" role="button">Recomeçar</a>';

    document.getElementById("vezDeQuem").textContent =
      "O jogo acabou. O Jogador " + (player + 1) + " venceu!";
    document.getElementById("bolinhas").style.cssText =
      "display: none !important";
    return true;
  }
}

function playAtualizar(player) {
  document.getElementById("vezDeQuem").textContent =
    "Vez do jogador " + (player + 1);
}

function bolinAtualizar(atBolinha) {
  document.getElementById("pontos" + atBolinha).textContent =
    "Bolinhas removidas: " + pBolinha[atBolinha];
}

function pintaBolinha(tabColuna, tabLinha) {
  for (let i = bolinha[tabColuna]; i <= tabLinha; i++) {
    document.getElementById("img-" + tabColuna + i).src = "/images/bola.png";
    document.getElementById("img-" + tabColuna + i).style.cssText =
      "background-color: #dd300c; outline: 4px solid #fff;";
  }
}

function despintaBolinha(tabColuna, tabLinha) {
  for (let i = bolinha[tabColuna]; i <= tabLinha; i++) {
    document.getElementById("img-" + tabColuna + i).style.cssText =
      "";
  }
}

function removeBolinha(tabColuna, tabLinha) {
  if (comecou) {
    let numeroBolinha = 0;
    for (let i = bolinha[tabColuna]; i <= tabLinha; i++) {
      let atuBolinha = document.getElementById("img-" + tabColuna + i);

      atuBolinha.id = "vazio-" + tabColuna + i;
      atuBolinha.style.cssText =
        "background-color: transparent; outline: none; box-shadow: none;";
      atuBolinha.children[0].style.cssText =
        "background-color: transparent; outline: none; box-shadow: none;";
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

      atuBolinha.style.cssText =
        "";
      atuBolinha.children[0].style.cssText =
        "";
      atuBolinha.disabled = true;
    }
  }

  bolinha = [1, 1, 1, 1, 1];
  pBolinha[0] = 0;
  pBolinha[1] = 0;

  document.getElementById("jogar").remove();
  document.getElementById("bolinhas").style.cssText =
    "display: flex !important";

  player = Math.floor(Math.random() * 2);
  playAtualizar(player);
}
