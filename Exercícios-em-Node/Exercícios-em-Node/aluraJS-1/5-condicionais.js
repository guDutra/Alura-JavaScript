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
 

if (idadeComprador > 18) {
    console.log("Comprador maior de idadade");
    ListaDestino.splice(1, 1); // removendo item

}   else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    ListaDestino.splice(1, 1); //removedo item
    
}else {
    console.log("Não é maior de idade e não posso vender");
}


console.log(ListaDestino)