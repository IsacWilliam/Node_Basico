const lista = [
    {nome: 'Jose',      idade: 13},
    {nome: 'Joao',      idade: 42},
    {nome: 'Maria',     idade: 19},
    {nome: 'Gabriela',  idade: 23},
    {nome: 'Fernanda',  idade: 22},
    {nome: 'Ana Clara', idade: 37},
    {nome: 'Sandra',    idade: 49}
]

console.log("Lista antes do sort: ", lista);
lista.sort((a, b) => {
    if(a.idade < b.idade){
        return -1;
    }
    if(a.idade > b.idade){
        return 1;
    }
    return 0;
});

console.log("Lista depois do sort: ", lista);

console.log("Lista antes do sort: ", lista);
lista.sort((a, b) => {
    if(a.nome.toUpperCase() < b.nome.toUpperCase()){
        return -1;
    }
    if(a.nome.toUpperCase() > b.nome.toUpperCase()){
        return 1;
    }
    return 0;
});

console.log("Lista depois do sort: ", lista);

// Teste meu
console.log(lista[0].nome.toUpperCase() + ' ' + lista[0].idade );
