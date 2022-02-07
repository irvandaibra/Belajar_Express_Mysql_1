let mysql = require('mysql')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'irvanda123',
  database: 'belajar_express'
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log('Selamat Berhasil Terkoneksi!');
  }
})

module.exports = connection;