/*
1- Insira com método de ponto ou colchetes, uma propriedade com valor: Pernambuco.

2- Crie um alerta que retorne na tela a frase: Olá, meu nome é Mariana e moro no estado de Pernambuco.,
 referenciando os valores de suas propriedades.
*/
cliente = {
    nome: 'Mariana',
    idade: 35,
    genero: 'Feminino'
}

cliente.estado = 'Pernambuco';

alert('Olá, meu nome é ' + cliente.nome + ' e moro no estado de ' + cliente.estado + '.');