const lista = [
    {nome: 'Jose',      idade: 13},
    {nome: 'Joao',      idade: 42},
    {nome: 'Maria',     idade: 19},
    {nome: 'Gabriela',  idade: 23},
    {nome: 'Fernanda',  idade: 22},
    {nome: 'Ana_Clara', idade: 37},
    {nome: 'Sandra',    idade: 49}
]

// const pessoa = {
//     jose: {
//         idade: 29,
//     },
//     joao: {
//         idade: 33,
//     },
//     antonio: {
//         idade: 17,
//     }
// }

const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce((acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}, {});

console.log("Lista original: ", pessoas);
console.log("Filtro com Reduce usando objeto: ", pessoas.Gabriela.idade);

const pessoasArray = lista.reduce((acc, objeto) => {
    acc.push(objeto.idade);
    return acc;
}, []);
console.log("Filtro com Reduce usando array de idades: ", pessoasArray);

const pessoasArray1 = lista.reduce((acc, objeto) => {
    acc.push(objeto.nome);
    return acc;
}, []);
console.log("Filtro com Reduce usando array de nomes: ", pessoasArray1);

const pessoasReduceObj = lista.reduce(funcaoReduce, {
    Isac: {idade: 41}
});
console.log("funcaoReduce usando um objeto: ", pessoasReduceObj);


