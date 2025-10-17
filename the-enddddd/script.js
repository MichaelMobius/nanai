/*
Creo una variable llamada randomPage que guarda
el nombre de una de las 19 página html guardadas en el array
*/

// Retorna un entero aleatorio entre min (incluido) y max (excluido)


// Intento a medias de excluir la misma página (el mismo archivo .html en el que se encuentra)
var path = window.location.pathname; 
var file = path.split("/").pop();
var number = file.slice(0,file.length-5)
/*
Las siguientes linea es para el caso que se desee hacer un random con un link con id="next" (<a id="next"> tag)
en vez de un boton (<button> tag)
*/
/*
let randomPage = pages[getRandomInt(0, qtyPages)]
document.getElementById("next").href = "/" + randomPage + ".html";
*/

//Las siguiente funciones son para los botones. Se le asigna con el atributo onClick

function botonHome() {
  window.location.href = "/"
}
