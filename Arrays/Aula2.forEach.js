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

/*
//Usando FOR tradicional
for(let i = 0; i < lista.length; i++){
    console.log(`Minha Lista posição ${[i + 1]}: ` , lista[i]);
}*/

/*
//Usando FOREACH
lista.forEach((objeto) => console.log(`Minha Lista: `, objeto));*/

let soma = 0;

const somaIdade = (objeto) => {
    soma += objeto.idade;
}

lista.forEach(somaIdade);

console.log('Soma: ', soma);
