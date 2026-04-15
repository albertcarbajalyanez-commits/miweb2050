function ver(id) {
    // 1. Ocultamos la lista completa
    document.getElementById("lista").style.display = "none";
    
    // 2. Mostramos el contenedor de detalles
    document.getElementById("detalle").style.display = "block";

    // 3. Ocultamos TODOS los bloques de candidatos para que no se mezclen
    let bloques = document.querySelectorAll(".info-candidato");
    bloques.forEach(bloque => {
        bloque.style.display = "none";
    });

    // 4. Mostramos SOLO el que corresponde al ID
    let candidatoSeleccionado = document.getElementById("candidato-" + id);
    if (candidatoSeleccionado) {
        candidatoSeleccionado.style.display = "block";
    }

    // 5. Volvemos arriba de la página
    window.scrollTo(0, 0);
}

function volver() {
    document.getElementById("lista").style.display = "block";
    document.getElementById("detalle").style.display = "none";
}