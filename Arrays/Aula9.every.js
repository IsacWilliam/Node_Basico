const lista = [
    {nome: 'Jose',      idade: 13},
    {nome: 'Joao',      idade: 42},
    {nome: 'Maria',     idade: 19},
    {nome: 'Gabriela',  idade: 23},
    {nome: 'Fernanda',  idade: 22},
    {nome: 'Ana Clara', idade: 37},
    {nome: 'Sandra',    idade: 49}
]

// EVERY - Em uma lista retornará true SOMENTE se todos os itens atenderem a condição
const resultadoEvery = lista.every((objeto) => objeto.idade > 10); // Retorna true
console.log('Resultado Every: ', resultadoEvery);
const resultadoEvery1 = lista.every((objeto) => objeto.idade > 30); // Retorna false
console.log('Resultado Every: ', resultadoEvery1);
