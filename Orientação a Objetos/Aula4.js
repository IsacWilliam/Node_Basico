//Object.defineProperty
// class Usuario1 {
//         senha;
//         email;
    
//         constructor(email, senha, nome){
//                 this.email = email;
//                 this.senha = senha;
        
//                 Object.defineProperty(this, 'nome', {
//             value: nome,
//             writable: false, // se true => pode atribuir com usuario.nome = 'novo nome'
//             configurable: false, // se true => posso deletar o nome
//             enumerable: true // se true => será exibido no objeto
//         })
//     }
// }

// const usuario1 = new Usuario1('email', 'senha', 'nome');
// console.log(usuario1);

//Object.defineProperties
// class Usuario {
//     constructor(email, senha, nome){
//         Object.defineProperties(this, {
//             email:{
//                 value: email,
//                 writable: false, // se true => pode atribuir com usuario.nome = 'novo nome'
//                 configurable: false, // se true => posso deletar o nome
//                 enumerable: true // se true => será exibido no objeto
//             },
//             senha:{
//                 value: senha,
//                 writable: false, // se true => pode atribuir com usuario.nome = 'novo nome'
//                 configurable: false, // se true => posso deletar o nome
//                 enumerable: true // se true => será exibido no objeto
//             },
//             nome:{
//                 value: nome,
//                 writable: false, // se true => pode atribuir com usuario.nome = 'novo nome'
//                 configurable: false, // se true => posso deletar o nome
//                 enumerable: true // se true => será exibido no objeto
//             }
//         })
//     }
// }

// const usuario = new Usuario('email', 'senha', 'nome');
// console.log(usuario);


//Object.defineProperties - Outra forma
const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: false, // se true => pode atribuir com usuario.nome = 'novo nome'
    configurable: false, // se true => posso deletar o nome
    enumerable: true // se true => será exibido no objeto
});

class Usuario {
    constructor(email, senha, nome){
        Object.defineProperties(this, {
            email: propriedadePadrao(email),
            senha: propriedadePadrao(senha),
            nome: propriedadePadrao(nome)
        });
    }
}

const usuario = new Usuario('email', 'senha', 'nome');
console.log(usuario);