const lista = [
    {nome: 'Jose',      idade: 13},
    {nome: 'Joao',      idade: 42},
    {nome: 'Maria',     idade: 19},
    {nome: 'Gabriela',  idade: 23},
    {nome: 'Fernanda',  idade: 22},
    {nome: 'Ana Clara', idade: 37},
    {nome: 'Sandra',    idade: 49}
]

// --Funções anônimas
/*
// Retorna apenas o primeiro valor encontrado
const novaPessoa = lista.find((pessoa) => pessoa.idade > 30);
console.log(novaPessoa);*/

/*
// Retorna apenas o primeiro nome encontrado
const novaPessoa = lista.find((pessoa) => pessoa.nome === 'Fernanda');
console.log(novaPessoa);
*/

// --Funções nomeadas
const buscarPessoa1 = (pessoa) => pessoa.idade > 30;
const novaPessoa1 = lista.find(buscarPessoa1);
console.log(novaPessoa1);

const buscarPessoa = (pessoa) => pessoa.nome === 'Fernanda';
const novaPessoa = lista.find(buscarPessoa);
console.log(novaPessoa);
