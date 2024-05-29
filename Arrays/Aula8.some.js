const lista = [
    {nome: 'Jose',      idade: 13},
    {nome: 'Joao',      idade: 42},
    {nome: 'Maria',     idade: 19},
    {nome: 'Gabriela',  idade: 23},
    {nome: 'Fernanda',  idade: 22},
    {nome: 'Ana Clara', idade: 37},
    {nome: 'Sandra',    idade: 49}
]

// SOME - Em uma lista retornará true ao encontrar APENAS 1 item que atenda a condição ou false se não encontrar
const resultadoSome = lista.some((objeto) => objeto.idade > 30); // Retorna true
console.log('Resultado Some: ', resultadoSome);
const resultadoSome1 = lista.some((objeto) => objeto.idade > 100); // Retorna false
console.log('Resultado Some: ', resultadoSome1);
