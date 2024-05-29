class Produto {
    nome;
    preco;
    descricaoProduto;
    codigo;
    qtd_estoque;

    constructor(nome, descricaoProduto, codigo) {
        this.nome = nome;
        this.preco = 0;
        this.descricao = descricao;
        this.codigo = codigo;
        this.qtd_estoque = 0;
    }

    alterarPreco(novoPreco){
        if(novoPreco >= 0){
            this.preco = novoPreco;
        }
    }

    adicionaProduto(quantidade){
        this.qtd_estoque += quantidade;
    }

    removeProduto(quantidade){
        const novoEstoque = this.qtd_estoque - quantidade;
        if(novoEstoque >= 0){
            this.qtd_estoque -= quantidade;
        }
    }
}

class SmartPhone extends Produto {
    marca;
    modelo;
    sistemaOperacional;

    descricao(){
        return `
            Nome: ${this.nome} \n
            Preço: ${this.preco} \n
            Descrição: ${this.descricaoProduto} \n
            Código: ${this.codigo} \n
            Quantidade: ${this.qtd_estoque} \n
            Marca: ${this.marca} \n
            Modelo: ${this.modelo} \n
            OS: ${this.sistemaOperacional} \n
        `
    }

    constructor(nome, descricao, codigo, marca, modelo, sistemaOperacional){
        super(nome, descricao, codigo);
        this.marca = marca;
        this.modelo = modelo;
        this.sistemaOperacional = sistemaOperacional;
    }
}

const smartphone1 = new SmartPhone('iPhone', 'Celular', '1357', 'Apple', 'SE', 'iOS');

const produto = new Produto();
console.log(produto);
console.log('SmartPhone: ', smartphone1);

smartphone1.alterarPreco(399.89);
smartphone1.adicionaProduto(5);
console.log('SmartPhone: ', smartphone1);

smartphone1.removeProduto(9);
console.log('SmartPhone: ', smartphone1);
