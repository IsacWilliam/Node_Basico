const lista = [
    {
        nome: 'Jose',
        idade: 13
    },
    {
        nome: 'Joao',
        idade: 42
    },
    {
        nome: 'Maria',
        idade: 19
    },
    {
        nome: 'Gabriela',
        idade: 23
    },
    {
        nome: 'Fernanda',
        idade: 22
    },
    {
        nome: 'Ana Clara',
        idade: 37
    },
    {
        nome: 'Sandra',
        idade: 49
    }
]

console.log("Primeira lista: ", lista);

console.log("Lista com MAP - AUTO: ", lista.map((objeto) => objeto.idade));

//Pegando apenas IDADE em um novo Array
const converterObjeto1 = (objeto) => {
    return objeto.idade;
    
}
console.log("Lista com MAP - MANUAL 1: ", lista.map((converterObjeto1)));

//Pegando apenas NOME em um novo Array
const converterObjeto2 = (objeto) => {
    return objeto.nome;
    
}
console.log("Lista com MAP - MANUAL 2: ", lista.map((converterObjeto2)));


