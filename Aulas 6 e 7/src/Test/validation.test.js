const Constants = require('./src/utils/Constant');
const Validation = require('./src/utils/validation');


test('Caso válido - Verificando dados para enviar no banco', () => {
    const result = Validation.create({
        nome:"Jerepeps",
        poder:"Joker",
        forca:2000,
        origem:"AquiMEMO"
    });
    expect(result).toEqual(undefined);
});


test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        nome:"Jerepeps",
        poder:"joker",
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});