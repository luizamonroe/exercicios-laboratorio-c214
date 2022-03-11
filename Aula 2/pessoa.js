class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    introduzir(){
        console.log('Ola, meu nome é $(this.nome) e tenho $(this.idade) anos')
        console.log('Olá, meu nolme é', this.nome, 'e tenho', this.idade, 'anos')
    }
}

const novaPessoa = new Pessoa(João, 22);

novaPessoa.introduzir();