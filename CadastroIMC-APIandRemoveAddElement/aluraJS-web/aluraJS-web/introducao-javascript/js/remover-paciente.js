var tabela = document.querySelector("table");
var pacientes = document.querySelector(".paciente");

tabela.addEventListener("dblclick", function(event){


var alvo = event.target; // event.target -> onde o evento aconteceu = onde foi clicado
var paiDoAlvo = alvo.parentNode; // TR: paciente
paiDoAlvo.classList.add("fadeout"); // METODO QUE FAZ A ANIMAÇÃO DE REMOVER

setTimeout(function() {

    paiDoAlvo.remove();
},700 );


});