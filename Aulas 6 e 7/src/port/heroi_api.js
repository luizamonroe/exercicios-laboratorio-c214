const Heroes = require('../application/heroi_service');
const Utils = require('../utils/utils');

const route = '/hero';

module.exports = (app) => {
    app.get(`${route}/research`, async (req, res) => {
        const response = await Heroes.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });

    app.post(`${route}/create`, async (req, res) => {
        const response = await Heroes.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};