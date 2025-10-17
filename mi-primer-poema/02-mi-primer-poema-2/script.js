function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let pages = ["1uno", "2dos", "3tres", "4cuatro", "5cinco", "6seis", "7siete", "8ocho", "9nueve", "10diez",
             "11once", "12doce", "13trece", "14catorce","15quince", "16dieciseis", "17diecisiete", "18dieciocho",
             "19diecinueve"]
/*let qtyPages = pages.length*/
var path = window.location.pathname; 
var file = path.split("/").pop();
var number = file.slice(0,file.length-5)
let pagesExcept = pages.filter(page => page !== number)


function botonRandom() {
  let randomPage = pagesExcept[getRandomInt(0, pagesExcept.length)]
  window.location.href = "/" + randomPage + ".html"
}

function botonHome() {
  window.location.href = "/"
}
