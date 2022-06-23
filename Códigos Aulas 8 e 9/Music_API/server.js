require('./src/infra/database');
const app = require('./src/infra/rest_serv');
const port = 6000

app.listen(port, () => {
    console.log('Use http://localhost:' + port);
    console.log('REST server running on port ' + port + '...');

});
