// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
	//JawsDB on Heroku is same db mysql
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// DB is local on localhost
	var connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '19431943',
		database: 'burgers_db'
	})
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;