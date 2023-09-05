const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'appointment_scheduling_app',
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Database connected successfully');
});

module.exports = connection;
