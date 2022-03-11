function Livro(){
    var nome;
    var autor;
    var temas = []; //array

    this.SetarNome = SetNome;
    this.SetarAutor = SetAutor;
    this.SetarTema = SetTema;
    this.displayInfo = showInfo;

    function SetNome(novoNome){
        nome = novoNome;
    }

    function SetTema(novoTema){
        temas.push(novoTema);
    }

    function SetAutor(novoAutor){
        autor = novoAutor;
    }

    function showInfo(){
        console.log('Nome: ', nome);
        console.log('Autor: ', autor);
        console.log('Temas: ', temas);
    }
}

var Livro = new Livro();
Livro.SetarNome('Harry Potter e a Pedra Filosofal');
Livro.SetarAutor('JK Rowling');
Livro.SetarTema('Fantasia');
Livro.SetarTema('Ficção');
Livro.displayInfo();
