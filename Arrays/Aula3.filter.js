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

console.log('Lista: ', lista);

/*
// Função anônima
const listaFiltrada = lista.filter((pessoa) => pessoa.idade > 30);
console.log('Lista Filtrada: ', listaFiltrada);
*/

// Função NÃO anônima
const filtrarPessoa = (pessoa) => pessoa.idade > 30;
const listaFiltrada = lista.filter(filtrarPessoa);
console.log('Lista Filtrada: ', listaFiltrada);
