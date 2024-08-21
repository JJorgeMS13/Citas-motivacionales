const parrafo = document.getElementById('cita');
const autor = document.getElementById('autor');
const butonCambiarCitas = document.getElementById('cambiarCitas');


function numberAleatorio(max) {
    let numeroAleatorio = Math.floor(Math.random() * max);
    return numeroAleatorio;
}
function citAleatoria() {
    let index = numberAleatorio(citas.length);
    console.log(index);
    parrafo.textContent = `"${citas[index].texto}"`;
    autor.textContent = citas[index].autor; 
}
butonCambiarCitas.addEventListener('click', citAleatoria);
citAleatoria();


