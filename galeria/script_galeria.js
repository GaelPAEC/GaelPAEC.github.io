var imagenesMax = 5;
var imagenActual = 1;

function galeria_avanzar() {
    if (imagenActual < imagenesMax) {
        document.getElementById("img" + imagenActual).style.display = "none";
        imagenActual++;
    } else {
        for(let i = 1; i < imagenesMax; i++) {
            document.getElementById("img" + i).style.display = "block";
        }
        imagenActual = 1;
    }
}

function galeria_retroceder() {
    if (imagenActual > 1) {
        document.getElementById("img" + (imagenActual-1)).style.display = "block";
        imagenActual--;
    } else {
        for(let i = 1; i < imagenesMax; i++) {
            document.getElementById("img" + i).style.display = "none";
        }
        imagenActual = imagenesMax;
    }
}