const Calculadora = require('./calculadora');


var somaCalculadora = Calculadora.soma(3, 4);
console.log(somaCalculadora);

var subCalculadora = Calculadora.subtracao (7, 5);
console.log(subCalculadora);

var divCalculadora = Calculadora.divisao(6, 2);
console.log(divCalculadora);

var multCalculadora = Calculadora.multiplicacao(2, 3);
console.log(multCalculadora);

var restCalculadora = Calculadora.restante(7, 3);
console.log(restCalculadora);