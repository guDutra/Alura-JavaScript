
var titulo = document.querySelector(".titulo");
titulo.textContent = "Tabela dos Cria";

var pacientes = document.querySelectorAll(".paciente"); // tr

for(var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    
    var tdPeso = paciente.querySelector(".info-peso"); // td que tem o peso
var peso = tdPeso.textContent; // texto que tem no tdPeso

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");


var alturaValida = validaAltura(altura);
var pesoValido = validaPeso(peso);

if (pesoValido == false) {
    console.log("Peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido"
 ///   paciente.style.backgroundColor = "lightcoral"
 paciente.classList.add("paciente-invalido");
} 

if (alturaValida == false) {
  
    
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido"); /// classList = adiciona uma classe a o objeto/ neste caso ao TR(linha da tabala) a classe paciente invalida
   // paciente.style.backgroundColor = "lightcoral" /// No CSS é escrito background-color: / mas no JS prevalece a regra de quando a uma nova palavra usar letra maiscula
}

if(alturaValida && pesoValido ) {

var imc = calculaImc(peso,altura);

tdImc.textContent = imc;


}
}



function calculaImc(peso, altura) {

    var imc = 0;
    imc = peso/ (altura*altura);

    return imc.toFixed(2);  /// toFixed = determina o numero de casa decimais que deve aparecer da váriavel

}


function validaPeso(peso) {
   if(peso.length > 0) {
    if (peso > 0 && peso <= 500) {
        
        return true;

    }  else {

        return false;
    }
} else {

    return true;
}
}

function validaAltura(altura) {

    if(altura.length > 0) {
    if (altura > 0 && altura < 2.50) {
       
        return true;

    } else {

        return false;
    }

} else {
    return true;
}

}




/// querySelectorAll = sleciona todos daquela propriedade