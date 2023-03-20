/* Entendendo primeiro: Array.sort
Um Array em Javascript possui o método sort. Este método recebe uma estratégia de ordenação, ou seja,
 essa estratégia deve ser passada pelo desenvolvedor, mas deve seguir algumas regras.
  Vejamos um exemplo com escopo menor: */

let lista1 = [10, 1, 5, 9, 8, 12, 15];

// Queremos ordenar essa lista em ordem crescente:
let lista = [10, 1, 5, 9, 8, 12, 15];
lista.sort();
console.log(lista); // exibe a lista na ordem crescente

/* E se quisermos em ordem decrescente? 
Ordenamos primeiro de maneira ascendente e depois invertemos a ordem do array com reverse: */
let lista2 = [10, 1, 5, 9, 8, 12, 15];
lista2.sort();
lista2.reverse();
console.log(lista2); // exibe a lista ordenada em ordem decrescente


/*Quando temos uma lista de objetos que não sejam strings, 
números ou boolean (com este tipo, false vem primeiro e depois true),
 precisamos passar o critério de ordenação para o método sort: */
let negociacoes = [
    new Negociacao(new Date(), 7, 200),
    new Negociacao(new Date(), 1, 300),
    new Negociacao(new Date(), 8, 100)
]
negociacoes.sort((a, b) => a.quantidade - b.quantidade);
negociacoes.forEach(negociacao => console.log(negociacao));
/*A função passada para sort recebe dois parâmetros que representam pares de elementos, 
isso porque toda comparação envolve um par de elementos. A regra é a seguinte: com o critério selecionado,
 se o valor retornado for 0 não há alteração a ser feita, se o valor retornado for positivo, 
 b deve vir antes de a, se o valor for negativo, a deve vir antes de b.
 Que tal ordenar pela data? */
let negociacoes1 = [
    new Negociacao(new Date(), 7, 200),
    new Negociacao(new Date(), 1, 300),
    new Negociacao(new Date(), 8, 100)
]
negociacoes1.sort((a, b) => a.data - b.data); //ordenação crescente utiliza a ordem normal
negociacoes1.forEach(negociacao => console.log(negociacao));

/*Não fique chocado, quando subtraímos uma data pela outra é retornado um número que pode ser zero,
 positivo ou negativo, atendendo a regra do sort. Faça um teste no console do Chrome e veja você mesmo: */
new Date(2016, 4, 12) - new Date(2016, 5, 1) // negativo
new Date(2016, 5, 1) - new Date(2016, 4, 12) // positivo
new Date(2016, 5, 1) - new Date(2016, 5, 1) // 0
// E se quisermos uma ordem decrescente? Só inverter a subtração: