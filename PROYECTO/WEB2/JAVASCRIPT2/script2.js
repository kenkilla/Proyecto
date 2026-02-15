//obtener el boton por su ID que se puso 
const boton2=document.getElementById('xd');

//agregar in evento al boton
boton2.addEventListener('click',function(){
    alert("NOOO GOD PLEASE NOOO");
});


function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu.style.width === "100%") {
        menu.style.width = "0";
    } else {
        menu.style.width = "100%";
    }
}