class Pessoa {  //Cria a classe
    nome;
    idade;
    filhos;

    quantosFilhos() {
        if(this.filhos) {
            return this.filhos.length;
        }
    }

    constructor(nome, idade, filhos){
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;
    }
}

// Cria um objeto do tipo Pessoa; a classe.
const filho1 = new Pessoa('Iuri', 21, 2);
console.log('Filho1: ', filho1.quantosFilhos())

const filho2 = new Pessoa('Sunny', 6, 0);
const pai = new Pessoa('Isac', 41, [filho1, filho2]);

console.log(pai);
console.log('Quantos filhos? ', pai.quantosFilhos());
