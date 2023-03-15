var campoInput = document.querySelector("#filtro-pacientes");


campoInput.addEventListener("input", function(){
    console.log(campoInput.value);

    var pacientes = document.querySelectorAll(".paciente");

    if (campoInput.value.length > 0) { //// verifica se o campo de filtro tem o comprimento maior de 0 caracteres
        
        for (let i = 0; i < pacientes.length; i++) {

            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(campoInput.value, "i"); ////  criar uma expressão regular: filtra por cada palavra escrita
    
            if (!expressao.test(nome)) { /// expressao.test -> metodo de uma ExRegular q retorna boolean
                
                paciente.classList.add("hide");
            } else {
                paciente.classList.remove("hide");
            }
        }
    

    } else {
        for (let i = 0; i < pacientes.length; i++) {
           
            var paciente = pacientes[i];
            paciente.classList.remove("hide"); 
        }
    }

});