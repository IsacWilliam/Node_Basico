// const obj = {
//     a: 'asfg',
//     b: 'çlkj',
//     c: 'qwerty',
//     d: 'poiu'
// }

// const objNovo = {  // Cópia SEM Spread Operator
//     a: obj.a,
//     b: obj.b,
//     c: obj.c,
//     d: obj.d,
//     e: 'Diferença entre objetos'
// }

// const ojetoSpread = {  // Cópia COM Spread Operator
//     ...obj,
//     e: 'Aplicando Spread Operator'
// }

// console.log('Objeto Original: ', obj); // Objeito original
// console.log('Novo Objeto: ', objNovo); // Cópia SEM Spread Operator
// console.log('Novo Objeto com Spread Operator: ', ojetoSpread); // Cópia COM Spread Operator

const lista1 = [154, 658, 741, 265, 941, 369];
const lista2 = [5487, 6589, 3816, 5486, 7413];

const listasUnidas = lista1.concat(lista2); // Concatenação
const arrayListas = [lista1, lista2] // Array de arrays
const objetoListas = {lista1, lista2} // Objeto de arrays
const spreadListas = [...lista1, ...lista2] // O mais indicado para unir várias listas em uma única lista


console.log('Lista1: ', lista1);
console.log('Lista2: ', lista2);
console.log('Listas Unidas: ', listasUnidas);
console.log('Array de arrays: ', arrayListas);
console.log('Objeto de arrays: ', objetoListas);
console.log('Array com SPREAD: ', spreadListas);
