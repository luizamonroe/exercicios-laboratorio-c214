const { MusicModel } = require('../infra/database');

const MusicRepository = {
    async create(data) {
        try {
            const model = new MusicModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                name: data.name,
            };
            const options = { new: true };
            const filter = { band: data.band };
            const result = await MusicModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await MusicModel.deleteOne({ band: data.band }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const result = await MusicModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },
};

module.exports = MusicRepository;