class Professor extends Pessoa{
    disciplina;

    constructor(nome, idade, disciplina){
        super(nome, idade);
        this.disciplina = disciplina;
    }

   introduzir(){
       console.log('Meu nome é $(this.nome), tenho $(this.idade) anos, e vou lecionar $(this.disciplina)');
   }

   grau(){
       const grau = Math.floor(Math.random() * (5-1) + 1);
       console.log('Grau: ', grau);
   }
}

const phyll = new Professor('Phyll', 26, 'Engenharia de Software');
phyll.introduzir();
phyll.grau();