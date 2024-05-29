//Getters and Setters
class Usuario {
    constructor(email, senha, nome){
        Object.defineProperties(this, {
            email: {
                get: () => email,
                set: (value) => email = value
            },
            senha: {
                get: () => senha,
                set: (value) => {
                    if(value.length < 4) {
                        throw new TypeError('Senha curta demais. 4 caracteres no mínimo')
                    }
                    senha = value
                }
            },
            nome: {
                get: () => nome,
                set: (value) => nome = value
            },
        });
    }
}

const usuario = new Usuario('email', 'senha', 'nome');
console.log(usuario);

usuario.email = 'novoEmail';
console.log(usuario.email);

usuario.senha = '1234';
console.log(usuario.senha);
