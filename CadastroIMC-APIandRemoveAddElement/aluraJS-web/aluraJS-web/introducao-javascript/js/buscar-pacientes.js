var botaoAdd = document.querySelector("#buscar-paciente");
botaoAdd.addEventListener("click", function() {
   
    var xhr = new XMLHttpRequest(); /// XMLHttpRequest -> Metódo usado para pegar Https apis
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes" ); /// abre a fonte/site/api
    xhr.addEventListener("load", function() { /// "load" -> quando carregado executar: (neste caso quando abrir a api)

        if(xhr.status == 200) { /// xhr.status -> status do site; 200 = funcionando

            var resposta = xhr.responseText; /// xhr.responseText -> comando que pega o texto da API
            var pacientes = JSON.parse(resposta); /// JSON -> Texto que pode ser facilmente convertido para um tipo programável
            /// transforma o JSON para uma array;

            pacientes.forEach(function(paciente) { /// para cada pacientes ele usa a função de adicionar o paciente na tabela
                adicionaPacienteTabela(paciente);
            });

        } else {
            //// caso o status não seja 200 ele remove a classe "hide" e mostra que ocorreu um erro na tela
             var erroAjax = document.querySelector("#erro-ajax"); 
             erroAjax.classList.remove("hide");

        }
    });
   
    xhr.send(); //// finaliza o processo de "GET" na API

});