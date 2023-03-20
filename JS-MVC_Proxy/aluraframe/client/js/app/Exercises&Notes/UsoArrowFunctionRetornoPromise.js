let minhaPromessa = new Promise((resolve, reject) => {

    // aqui executamos algo demorado

    if (" tudo deu certo ") {
        resolve("Funcionou!");
    }
    else {
        reject("Deu erro...");
    }
});

/*
Ao inicializar a minhaPromessa, como podemos verificar o resultado da execução?

RESPOSTA:*/
minhaPromessa
    .then(mensagem => console.log(mensagem))
    .catch(erro => console.log(erro));
/*Usamos os métodos then e catch para capturar o resolve e o reject oriundo da promisse e dentro deles 
é necessário passar uma function ou Arrow function com o comando desejado. */

