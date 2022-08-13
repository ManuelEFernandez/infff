const botonVerde = document.getElementById("boton-verde");
const botonAzul = document.getElementById("boton-azul");
const botonNegro = document.getElementById("boton-negro");
const spanInfinito = document.getElementById("span-infinito");
const cajaInfinito = document.getElementById("caja-infinito");


let cambiaColor = (color)  => {

cajaInfinito.className = "caja-infinito";
cajaInfinito.classList.toggle(color);

}

botonVerde.addEventListener("click", function(){cambiaColor("color-verde")});

botonAzul.addEventListener("click", function(){cambiaColor("color-azul")});

botonNegro.addEventListener("click", function(){cambiaColor("color-negro")});





