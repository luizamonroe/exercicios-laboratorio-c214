const create = {
    name: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    band: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    name: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    band: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    band: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    band: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};