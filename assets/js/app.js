// 1. Inicializar el arreglo vacío
let listaDeTareas = [];

const btnEntrada = document.getElementById("btnEntrada");
const btnSalida = document.getElementById("btnSalida");
const listaHTML = document.getElementById("listaHTML");

// BOTÓN PARA INGRESAR TAREAS
btnEntrada.addEventListener("click", () => {
  let continuar;

  // Bucle para pedir tareas de manera interactiva
  do {
    let nuevaTarea = prompt("Ingresa una nueva tarea:");

    // Validación
    if (nuevaTarea !== null && nuevaTarea.trim() !== "") {
      listaDeTareas.push(nuevaTarea.trim());
    } else {
      alert("La tarea no puede estar vacía.");
    }

    // Confirmar si sigue
    continuar = confirm("¿Quieres agregar otra tarea?");

  } while (continuar);

  alert("¡Tareas guardadas correctamente!");
});

// BOTÓN PARA MOSTRAR LA LISTA FINAL
btnSalida.addEventListener("click", () => {
  // Limpiar lista visible
  listaHTML.innerHTML = "";

  if (listaDeTareas.length === 0) {
    alert("No hay tareas registradas.");
    return;
  }

  // Mostrar tareas en pantalla
  listaDeTareas.forEach((tarea, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${tarea}`;
    listaHTML.appendChild(li);
  });
});
