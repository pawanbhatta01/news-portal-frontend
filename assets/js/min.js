function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var uri = window.location.pathname;
var url = window.location.origin;
var elements = document.querySelectorAll('.nav-links');

for (const element of elements) {
    var link = element.href.replace(`${url}`, '');
    if (uri == link) {
        document.querySelector(`[href="${link}"]`).className += " active";
    }
    if (uri == "/") {
        document.querySelector(`[href="/index.html"]`).className += " active";
    }
} 