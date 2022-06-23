const Utils = require('../utils/utils');
const Constants = require('../utils/Constant');
const HeroiRepository = require('../port/heroi_repository');
const Validation = require('../utils/validation');

const Heroi = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = Utils.generateUuid();

            const response = await HeroiRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await HeroiRepository.list();
            return response;
            
        } catch (error) {
            return error;
        }
    },
};
module.exports = Heroi;