const validate = require('validation.js');
const Constants = require('./Constant.js');
const Constraints = require('./heroi_validation.js');

const validation = {
    async create(data) {
        const validation = await validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = await validation;
            return response;
        }
        return validation;
    }
};

exports.module = validation;
