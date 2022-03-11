class Carro {
    marca = "Sem marca";
    modelo;

    setModelo(novoModelo){
        this.modelo = novoModelo;
    }

    setMarca(novaMarca){
        this.marca = novaMarca;
    }

    showInfo(){
        //alert(pop-up) ou console.log    
        console.log("Marca", this.marca);
        console.log("Modelo", this.modelo)
    }

} 

var carro = new Carro();
//Var: podem ser criadas e declaradas dentro do escopo
//Let: podem ser atualizadas mas nao podem ser declaradas novamente
//Const: nao podem ser atualizadas, nem declaradas novamente

carro.setModelo('Ka');
carro.setMarca('Ford');
carro.showInfo();

carro.setModelo('Cruze');
carro.setMarca('Chevrolet');
carro.showInfo();