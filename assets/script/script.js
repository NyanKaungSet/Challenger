//Navigation Bar
function iconClick(){
    location.href="index.html";
}
function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
     }
}


//Dark Mode
function DarkMode() {
  var element = document.body;
  element.classList.toggle("darkmode");
}