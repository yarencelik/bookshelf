let isbn;
const express = require("express");
var Datastore = require("nedb");
const { type } = require("jquery");
db = new Datastore({ filename: 'mybooks.db', autoload: true });


function saa() {
    alert("a");
}
// const con = require("./connection");
// 9789754050943
var url;
var obj;
var bookname = "dgffgd";
var books = [];
// const mysql = require("mysql");

// const bodyParser = require("body-parser");
var app = express();
// // app.use(bodyParser.json());
// app.get('/', function(req, res) {
//     res.send('Hello World');
// })
// app.listen(3000);
// // let isbn = document.getElementById("myText").textContent;
// const bookRoutes = require("./routes/book");
// app.use("/book", bookRoutes);


// eventListeners();


// sa();

function eventListeners() {
    control.addEventListener("submit", sa);

}
aaaa();

function aaaa() {

    console.log(typeof(db))
    db.insert([{ a: 88 }], function(err) {
        console.log(err)
    });

}

function sa() {
    db.insert([{ a: 5 }, { a: 42 }, { a: 5 }], function(err) {
        console.log("hata")
    });
    console.log("a");
}


function appendData(name) {

    var row1 = document.getElementById("bookshelf");
    var div2 = document.createElement("div");
    div2.className = "col-3 mt-3 book";
    var color_random = 0;
    if (color_random === 5) {
        color_random = 0;
    }
    switch (color_random) {
        case 0:
            div2.style = "background-color:#A5C8E4";
            break;
        case 1:
            div2.style = "background-color:#C0ECCC";
            break;
        case 2:
            div2.style = "background-color:#F9F0C1";
            break;
        case 3:
            div2.style = "background-color:#F4CDA6";
            break;
        case 4:
            div2.style = "background-color:#F6A8A6";
            break;
    }
    color_random++;

    div2.innerHTML += name;
    row1.appendChild(div2);
    alert(data["ISBN:" + isbn]["title"]);
    for (let j = 1; j < data.length; j++) {
        var div2 = document.createElement("div");
        // div2.className = "border border-secondary rounded m-2 p-3 ";
        div2.id = "post" + j;
        div2.innerHTML += "dasgsdfg" + data["ISBN:" + isbn]["title"];
        Container.appendChild(div2);
    }
}

function loadDoc() {
    isbn = window.document.getElementById("isbnn");
    var xhttp = new XMLHttpRequest();
    url = "https://openlibrary.org/api/books.json?bibkeys=ISBN:" + isbn + "&jscmd=data";
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = this.responseText;
            obj = JSON.parse(this.responseText);
            dbParam = JSON.stringify(obj);
            bookname = obj["ISBN:" + isbn]["title"];
            alert(obj["ISBN:" + isbn]["title"] + obj["ISBN:" + isbn]["authors"][2]);
            boook = obj["ISBN:" + isbn]["title"];

            function dynamicUrl() {
                url = obj["ISBN:" + isbn]["cover"]["medium"];
                return url;
            }
            appendData(bookname);
            // var img = document.createElement("img");
            // img.src = dynamicUrl();
            // document.body.appendChild(img);
        }
    };
    // insert("a", "a", "a");
    boook = "aa";
    bookname = "a";
    xhttp.open("GET", url, true);
    xhttp.send();
    // insert(isbn.toString(), "sa", Date.now().toString());

}

module.exports = bookname;