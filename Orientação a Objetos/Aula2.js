// COM HERANÇA 
class Usuario {
    email;
    senha;
    nome;

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}

class Administrador extends Usuario{
    perimssoes;

    constructor(email, senha, nome, perimssoes) {
        super(email, senha, nome);
        this.perimssoes = perimssoes;
    }
}

class Comprador extends Usuario{
    compras;
}

const adm = new Administrador('isac@teste.com', '123', 'Isac', [1, 5]);
console.log(adm);

const comprador = new Comprador();
console.log(comprador);

comprador.senha = '123'
console.log(comprador);


// SEM HERANÇA
// class Usuario {
//     email;
//     senha;
//     nome;
// }

// class Administrador {
//     email;
//     senha;
//     nome;
//     perimssoes;
// }

// class Comprador {
//     email;
//     senha;
//     nome;
//     compras;
// }