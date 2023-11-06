function ligaEnergia1(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "purple";
    comodo.style.color = "black";
    comodo.style.border = "2px solid black";
}

function desligaEnergia1(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "black";
    comodo.style.color = "purple";
    comodo.style.border = "2px solid purple";
}

function ligaEnergia() {
    ligaEnergia1('sala');
    ligaEnergia1('cozinha');
    ligaEnergia1('quarto');
    ligaEnergia1('quarto2');
    ligaEnergia1('banheiro');
}

function desligaEnergia() {
    desligaEnergia1('sala');
    desligaEnergia1('cozinha');
    desligaEnergia1('quarto');
    desligaEnergia1('quarto2');
    desligaEnergia1('banheiro');
}


document.getElementById("liga-sala").addEventListener("click", function () {
    ligaEnergia1("sala");
});

document.getElementById("desliga-sala").addEventListener("click", function () {
    desligaEnergia1("sala");
});

document.getElementById("liga-cozinha").addEventListener("click", function () {
    ligaEnergia1("cozinha");
});

document.getElementById("desliga-cozinha").addEventListener("click", function () {
    desligaEnergia1("cozinha");
});

document.getElementById("liga-quarto2").addEventListener("click", function () {
    ligaEnergia1("quarto2");
});

document.getElementById("desliga-quarto2").addEventListener("click", function () {
    desligaEnergia1("quarto2");
});

document.getElementById("liga-quarto").addEventListener("click", function () {
    ligaEnergia1("quarto");
});

document.getElementById("desliga-quarto").addEventListener("click", function () {
    desligaEnergia1("quarto");
});

document.getElementById("liga-banheiro").addEventListener("click", function () {
    ligaEnergia1("banheiro");
});

document.getElementById("desliga-banheiro").addEventListener("click", function () {
    desligaEnergia1("banheiro");
});