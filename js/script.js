const contadorVisitas = document.getElementById("contadorVisitas");
const boton = document.getElementById("btnReestablecer");

// Obtiene el contador actual del almacenamiento local
let contador = localStorage.getItem('visitas') || 0;

// Incrementa el contador cada vez que la página se carga
contador++;
localStorage.setItem('visitas', contador);
contadorVisitas.textContent=contador;


boton.addEventListener("click", function resetear(e) {
    let contador=0;
    localStorage.setItem('visitas', contador);
    contadorVisitas.textContent = contador;
   
   
})
