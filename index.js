var url;
var obj;
var bookname ;
var books = [];
function myFunction() {
    var x = document.getElementById("myText").value;
    loadDoc(x);
  }

var div2 = document.createElement("div");
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
        
        div2.className = "book";
        div2.id = "post" + j;
        div2.innerHTML += "dasgsdfg" + data["ISBN:" + isbn]["title"];
        Container.appendChild(div2);
        // eventListeners();
    }
}

function loadDoc(isbn_) {
    
    var xhttp = new XMLHttpRequest();
    url = "https://openlibrary.org/api/books.json?bibkeys=ISBN:" + isbn_ + "&jscmd=data";
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = this.responseText;
            obj = JSON.parse(this.responseText);
            dbParam = JSON.stringify(obj);
            bookname = obj["ISBN:" + isbn_]["title"];
            // alert(obj["ISBN:" + isbn_]["title"] + obj["ISBN:" + isbn_]["authors"][2]);
            boook = obj["ISBN:" + isbn_]["title"];

            function dynamicUrl() {
                url = obj["ISBN:" + isbn_]["cover"]["medium"];
                return url;
            }
            appendData(bookname);
            // Kitabın resmini ekleme
            // var img = document.createElement("img");
            // img.src = dynamicUrl();
            // document.body.appendChild(img);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

//kitabın üstüne tıklandığında silme işlemi *yapılacak*
function eventListeners(){
    var remove = document.getElementsByClassName('div2');
    for (var i = 0 ; i < remove.length; i++) {
        remove[i].addEventListener('click' , () => {

        });
     }
    }

