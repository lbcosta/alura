var mysql  = require('mysql');

function createDBConnection(){
		return mysql.createConnection({
			host: 'localhost',
			user: 'leo',
			password: '123456',
			database: 'payfast'
		});
}

module.exports = function() {
	return createDBConnection;
}
