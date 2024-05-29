const lista = [
    {nome: 'Jose',      idade: 13, cartoes: ['123', '321']},
    {nome: 'Joao',      idade: 42, cartoes: ['456', '654']},
    {nome: 'Maria',     idade: 19, cartoes: ['789', '987']},
    {nome: 'Gabriela',  idade: 23, cartoes: ['012', '210']},
    {nome: 'Fernanda',  idade: 22, cartoes: ['124', '421']},
    {nome: 'Ana Clara', idade: 37, cartoes: ['689', '986']},
    {nome: 'Sandra',    idade: 49, cartoes: ['457', '754']}
]

const cartoes1 = lista.map((cartao) => cartao.cartoes);
console.log("1 -Lista com Map: ", cartoes1);

const cartoes2 = lista.flatMap((cartao) => cartao.cartoes);
console.log("2 - Lista com FlatMap: ", cartoes2);


const cartoes3 = lista.flatMap((cartao) => cartao.cartoes);
console.log("3 - Item acessado com FlatMap: ", cartoes3[1]);
