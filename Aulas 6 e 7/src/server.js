require('./src/infra/database.js');
const app = require('./src/infra/rest_server');
const port = 6000

app.listen(port, () => {
    console.log('Use http://localhost:' + port);
    console.log('REST server running on port ' + port + '...');

});