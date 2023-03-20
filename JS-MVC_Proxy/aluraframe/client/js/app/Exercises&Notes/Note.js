let dadosServidor = [
    [
        [new Date(), 1, 100],
        [new Date(), 2, 100]
    ],
    [
        [new Date(), 1, 150],
        [new Date(), 2, 300]
    ],
    [
        [new Date(), 3, 50],
        [new Date(), 1, 100]
    ]
];

/* O código acima funciona, contudo, podemos remover muitas chaves das declarações das arrow functions.
 Simplifique o código removendo as chaves quando isso fizer sentido.
*/

let listaDeNegociacoes1 = dadosServidor.reduce((novoArray, array) => {
    // novoArray receberá os itens de array, no final terá uma dimensão apenas
    return novoArray.concat(array)
}, [])
    .map(dado => {
        // para cada dado, cria uma instância de negociação. No final, teremos uma nova lista só com instâncias de Negociacao

        return new Negociacao(new Date(dado.data), dado.quantidade, dado.valor)
    });

/*
Veja que removemos as {} e o return das arrows functions. 
Só podemos fazer isso quando o que vem depois de => é uma instrução apenas, ou seja, não é um bloco de instruções.
 Aliás, repare também na maneira com que o código foi indentado.
*/

/* A SEGUIR OUTRO JEITOS DE INDENTAR E FAZER O METÓDO */


let listaDeNegociacoes2 = dadosServidor
    .reduce((novoArray, array) => novoArray.concat(array), [])
    .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor));

let listaDeNegociacoes3 = dadosServidor
    .reduce((novoArray, array) => novoArray.concat(array), [])
    .map(dado =>
        new Negociacao(new Date(dado.data), dado.quantidade, dado.valor));


let listaDeNegociacoes4 =
    dadosServidor
        .reduce((novoArray, array) =>
            novoArray.concat(array), [])
        .map(dado =>
            new Negociacao(new Date(dado.data), dado.quantidade, dado.valor));