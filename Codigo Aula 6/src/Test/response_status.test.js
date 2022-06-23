const utils = require('./src/utils/utils');
const constants = require('./src/utils/Constant');

test('Status Code 200 OK - Undefined', () => {
    const result = utils.responseStatus(undefined);
    expect(result).toEqual(200);
});

test('Status Code 400 BAD REQUEST - Undefined', () => {
    const result = utils.responseStatus(constants.ErrorValidation.name);
    expect(result).toEqual(400);
});

test('Status Code 409 BAD CONFLICT - Server and Local', () => {
    const result = utils.responseStatus(constants.ErrorDuplicate.name);
    expect(result).toEqual(409);
});

test('Status Code 404 NOT FOUND - invalid name', () => {
    const result = utils.responseStatus(constants.ErrorNotFound.name);
    expect(result).toEqual(404);
});

test('generateUuid -> String', () => {
    var result = utils.generateUuid();
    var conf = false;
    if(result)
        conf = true;
    else
        conf = false;
    
    expect(true).toEqual(conf);
});