// var mysql = require('mysql');
// var fs = require('fs');

// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "book"
// });
// connection.connect();
// // Veritabanındaki verileri json dosyasına dönüştürme.
// connection.query('SELECT * FROM book_info ', function(err, results, fields) {
//     if (err) throw err;

//     fs.writeFile('table.json', JSON.stringify(results), function(err) {
//         if (err) throw err;
//         console.log('Saved!');
//     });

//     // connection.end();
// });

// function insert(_isbn, _book_name, _date) {
//     console.log("sa");
//     var mysql = require('mysql');

//     var con = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         database: "book"
//     });

//     con.connect(function(err) {
//         var a = "gdfdgsd";
//         if (err) throw err;
//         console.log("Connected!");
//         var sql = "INSERT INTO book_info (isbn,book_name,date) VALUES ('" + _isbn + "','" + _book_name + "','" + _date + "')";
//         con.query(sql, function(err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//         });
//     });
// }