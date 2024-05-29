// Polimorfismo
class Usuario {
    email;
    senha;
    nome;

    validarSenha(email, senha) {
        return email + senha === this.nome
    }

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}

class Administrador extends Usuario{
    perimssoes;

    validarSenha(email, senha) {
        return email === this.email && senha === this.senha; 
    }

    constructor(email, senha, nome, perimssoes) {
        super(email, senha, nome);
        this.perimssoes = perimssoes;
    }
}

class Comprador extends Usuario{
    compras;
}

const adm = new Administrador('isac@teste.com', '123', 'Isac', [1, 5]);
const usuario = new Usuario('xpto@blabla.com.br', 'senha123', 'nomeX');

console.log(usuario.validarSenha('isac@teste.com', '123')); // Retorna false
console.log(adm.validarSenha('isac@teste.com', '123'));     // Retorna true
