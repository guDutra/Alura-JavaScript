
var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function(event) {

event.preventDefault();


var formulario = document.querySelector("#form-adiciona");

var paciente = pegaInfoForm(formulario);


var erros = validaPaciente(paciente);
if(erros.length > 0) {

    
  exibirMensagemErro(erros);
  console.log(erros);
  
  return;
}

var pacienteTr = montaTr(paciente);
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);


formulario.reset();
var limpaErros = document.querySelector("#mensagem-erro");
limpaErros.innerHTML = "";

});

function adicionaPacienteTabela(paciente) {

    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function pegaInfoForm(formulario) {

    var paciente = {

        nome:  formulario.nome.value,
        peso:  formulario.peso.value,
        altura:  formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr"); /// normalmente se passa o nome da tag que nós desejamos criar
    pacienteTr.classList.add("paciente");

var pesoTd = document.createElement("td");
var nomeTd  = document.createElement("td");
var gorduraTd  = document.createElement("td");
var alturaTd  = document.createElement("td");
var imcTd  = document.createElement("td");

nomeTd.textContent = paciente.nome;
pesoTd.textContent = paciente.peso;
gorduraTd.textContent = paciente.gordura;
alturaTd.textContent = paciente.altura;
imcTd.textContent = paciente.imc;

nomeTd.classList.add("info-nome");
pesoTd.classList.add("info-peso");
alturaTd.classList.add("info-altura");
imcTd.classList.add("info-imc");
gorduraTd.classList.add("info-gordura");

pacienteTr.appendChild(nomeTd); /// adiciona um filho. Neste caso TD é filho de TR
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(imcTd);





return pacienteTr;

}

function exibirMensagemErro(erros) {

    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML =  "";   //innerHTML = permite acessar o conteudo interno do seu html.
    erros.forEach(function(erro) {
        
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });


}

function validaPaciente(paciente) {

    var erros = [];
    if(!validaPeso(paciente.peso))  erros.push("Peso Invalido");
    if(!validaAltura(paciente.altura))  erros.push(" Altura invalida") ;
    if(paciente.nome.length == 0) {
        erros.push("Nome do paciente não foi preenchido");
    }

    if(paciente.peso.length == 0) {
        erros.push("Peso não informado");
    }

    if(paciente.altura.length == 0) {
        erros.push("Altura não informada");
    }

    return erros;
}