function loadDoc() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
  }
};
xhttp.open("GET", "files/tabela.xml", true);
xhttp.send();
}
function myFunction(xml) {
var i;
var xmlDoc = xml.responseXML;
var table="<tr><th>Artist</th><th>Title</th></tr>";
var x = xmlDoc.getElementsByTagName("book");
for (i = 0; i <x.length; i++) {
  table += "<tr><td>" +
  x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
  "</td><td>" +
  x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
  "</td></tr>";
}
document.getElementById("demo").innerHTML = table;
}
