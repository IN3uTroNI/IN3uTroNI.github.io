Menu.style.display = "none";
function ShowHide(x) {
    x.classList.toggle("change");
    var Menu = document.getElementById("Menu");
    if (Menu.style.display === "none") {
        Menu.style.display = "block";
    } else {
        Menu.style.display = "none";
    }
}  

var elementes = document.querySelectorAll('#element');
elementes.forEach(element =>
    element.addEventListener("click", function() {
    var element = document.getElementById("Menu");
    var element1 = document.getElementById("this");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
        element1.classList.remove("change");
        
    }
}));


