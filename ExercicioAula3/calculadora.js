const validate = require('validate.js');
const calculadoraConstraint = require('./validate');

const Calculadora = {
    soma(num1, num2){
        const validatenumeros= validate({num1, num2}, calculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatenumeros);
        if(validatenumeros !== undefined){
            return 'Error';
        }

        var soma = num1 + num2;
        return soma;
    },
    subtracao(num1, num2){
        const validatenumeros= validate({num1, num2}, calculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatenumeros);
        if(validatenumeros !== undefined){
            return 'Error';
        }        

        var sub = num1 - num2;
        return sub;
    },
    divisao(num1, num2){
        const validatenumeros= validate({num1, num2}, calculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatenumeros);
        if(validatenumeros !== undefined){
            return 'Error';
        }   

        var div = num1 / num2;
        return div;
    },
    multiplicacao(num1, num2){
        const validatenumeros= validate({num1, num2}, calculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatenumeros);
        if(validatenumeros !== undefined){
            return 'Error';
        }

        var mult = num1 * num2;
        return mult;
    },
    restante(num1, num2){
        const validatenumeros= validate({num1, num2}, calculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatenumeros);
        if(validatenumeros !== undefined){
            return 'Error';
        }

        var rest = num1 % num2;
        return rest;
    }
};

module.exports = Calculadora;