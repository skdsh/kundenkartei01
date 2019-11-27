var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb.db'
  });
  connection.connect();
  connect.query('select * from kunden'), function(err, results){
    console.log(result);
  };