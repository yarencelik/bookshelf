let isbn;
// 9789754050943
var url;
// let isbn = document.getElementById("myText").textContent;

var color_random = 0;

function sa() {
    console.log("sa");
}

function appendData(name) {

    var row1 = document.getElementById("bookshelf");
    var div2 = document.createElement("div");
    div2.className = "col-3 mt-3 book";

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

    // alert(data["ISBN:" + isbn]["title"]);
    // for (let j = 1; j < data.length; j++) {
    //     var div2 = document.createElement("div");
    //     div2.className = "border border-secondary rounded m-2 p-3 ";
    //     div2.id = "post" + j;
    //     div2.innerHTML += "dasgsdfg" + data["ISBN:" + isbn]["title"];
    //     Container.appendChild(div2);
    // }
}




function loadDoc() {

    isbn = document.getElementById("isbnn").value;
    var obj, bookname;
    var xhttp = new XMLHttpRequest();
    url = "https://openlibrary.org/api/books.json?bibkeys=ISBN:" + isbn + "&jscmd=data";
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
            obj = JSON.parse(this.responseText);
            dbParam = JSON.stringify(obj);
            bookname = obj["ISBN:" + isbn]["title"];
            alert(obj["ISBN:" + isbn]["title"] + obj["ISBN:" + isbn]["authors"][2]);

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
    // sa();
    insert(isbn.toString(), "sa", Date.now().toString());
    xhttp.open("GET", url, true);
    xhttp.send();
    console.log("a");

}
loadDoc();