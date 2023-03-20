console.log("Trabalhando com condicionais")
// const salvador = "Salvador"
// const saopaulo = "São Paulo"
// const rj = "Rio de Janeiro"

const ListaDestino = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
)


const idadeComprador = 19;
const estaAcompanhada  = true;
const temPassagemComprada = true;
 

if (idadeComprador > 18 || estaAcompanhada == true ) {
    console.log("Comprador maior de idadade ou acompanhado");
    ListaDestino.splice(1, 1); // removendo item
    
}else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
} 
