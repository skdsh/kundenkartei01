const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/mydb.db', (err) =>{
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});


db.serialize(() => {
  db.each(`SELECT * FROM Kunde`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.ID + "\t" + row.Name + "\t" +
    row.Vorname + "\t" + row.EMial + "\t"+row.TelNr + "\t" + row.Bemerkung);
  });
});
(function () {
  var old = console.log;
  var logger = document.getElementById('log');
  console.log = function (message) {
      if (typeof message == 'object') {
          logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
      } else {
          logger.innerHTML += message + '<br />';
      }
  }
})();
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});