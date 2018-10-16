const mysql = require('mysql');

const createDBConnection = () => {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'casadocodigo_nodejs'
    });
}

//wrapper
module.exports = () => {
    return createDBConnection;
}