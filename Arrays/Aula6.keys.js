const lista = [
    {nome: 'Jose',      idade: 13},
    {nome: 'Joao',      idade: 42},
    {nome: 'Maria',     idade: 19},
    {nome: 'Gabriela',  idade: 23},
    {nome: 'Fernanda',  idade: 22},
    {nome: 'Ana_Clara', idade: 37},
    {nome: 'Sandra',    idade: 49}
]

const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {});

// Constrói um Array de Keys
const chaves = Object.keys(pessoas);

console.log("Log 1 - Lista com Reduce: ", pessoas);
console.log("Log 2 - Keys: ", chaves);

// Transforma um objeto em uma lista de Keys
console.log("Log 3 - Lista de Keys: ", Object.keys(lista[0]));

// Monta uma lista como a do Reduce
const listaDeVolta = chaves.map((chave) => ({nome: chave, idade: pessoas[chave].idade}));
console.log("Log 4 - Lista tipo reduce: ", listaDeVolta);
