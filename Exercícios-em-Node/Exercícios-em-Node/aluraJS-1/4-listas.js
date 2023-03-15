console.log("Trabalhando com listas")
// const salvador = "Salvador"
// const saopaulo = "São Paulo"
// const rj = "Rio de Janeiro"

const ListaDestino = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
)

console.log(ListaDestino)
ListaDestino.push('Acre') /// Adiciona "Acre" na Array.(push = EMPURRA)
console.log(ListaDestino)

//// REMOVENDO DA LISTA ///
// ListaDestino.splice(2, 1) 
// splice -> Comando remover
// 2 -> posição do item que eu desejo remover 
// 3 -> quantidade de itens que eu quero remover
ListaDestino.splice(1,1)
console.log(ListaDestino)
console.log(ListaDestino[1]) // -> mostra só o estado da posição 1