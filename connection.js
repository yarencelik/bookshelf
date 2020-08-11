function loadDoc() {

    isbn = document.getElementById("isbnn").value;
    console.log("a");
    var xhttp = new XMLHttpRequest();
    url = "https://openlibrary.org/api/books.json?bibkeys=ISBN:" + isbn + "&jscmd=data";
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
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
    xhttp.open("GET", url, true);
    xhttp.send();
    // insert(isbn.toString(), "sa", Date.now().toString());

}
// con.connect(function(err) {
//     var a = "gdfdgsd";
//     if (err) throw err;
//     console.log("Connected!");
//     // var sql = "SELECT * FROM book_info";
//     // var sql = "INSERT INTO book_info (isbn,book_name,date) VALUES ('" + _isbn + "','" + _book_name + "','" + _date + "')";
//     var sql = "INSERT INTO book_info (isbn,book_name,date) VALUES ('1','545','6546')";

//     con.query(sql, function(err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
// });

// module.exports = con;