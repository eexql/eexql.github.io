const menu =document.querySelector(".menu");
const abrirmenubtn =document.querySelector(".abrir");
const cerrarmenubtn =document.querySelector(".cerrar");

function funmenu() {
    menu.classList.toggle("menu_ab")
}

abrirmenubtn.addEventListener("click", funmenu) 
cerrarmenubtn.addEventListener("click", funmenu) 