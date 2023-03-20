const pesoAltura = [
    {
        nome: "Gustavo",
        altura: 1.64,
        peso: 50,
        imc: undefined,
        classificacao: undefined,
    },
    {
        nome: "Maria",
        altura: 1.50,
        peso: 50,
        imc: undefined,
        classificacao: undefined,
    },
]

const classificacaoImc = [{
    classificacaoP: "MAGREZA",
    imcP: 18.5,
},
{
    classificacaoP: "NORMAL",
    imcP: 24.9,
},
{
    classificacaoP: "SOBREPESO",
    imcP: 29.9
},
{
    classificacaoP: "OBESIDADE",
    imcP: 39.9,
},
{
    classificacaoP: "OBESIDADE GRAVE",
    imcP: 40,
},
]

pesoAltura.map((imc) => imc.imc = imc.peso / imc.altura ** 2)

pesoAltura.filter((imc) => {
    classificacaoImc.forEach((retorne) => {
        if (imc.imc > retorne.imcP) {
            imc.classificacao = retorne.classificacaoP
        }
    })
})

pesoAltura.filter((nomeClassificacao) => console.log(`${nomeClassificacao.nome}`, "-", "Classificação:", ` ${nomeClassificacao.classificacao}`))
console.log(pesoAltura);