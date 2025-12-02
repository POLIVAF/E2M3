document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicializar array vacío
  let listaDeTareas = [];

  // 2. Referencias a elementos
  const listaHTML = document.getElementById("listaTareas");
  const btnAgregar = document.getElementById("btnAgregar");
  const btnReset = document.getElementById("btnReset");

  // --- Botón AGREGAR ---
  btnAgregar.addEventListener("click", () => {
    let continuar;

    do {
      let tarea = prompt("Ingresa una nueva tarea:");

      if (tarea !== null && tarea.trim() !== "") {
        listaDeTareas.push(tarea.trim()); //se aplica PUSH
      } else {
        alert("La tarea no puede estar vacía.");
      }

      continuar = confirm("¿Quieres agregar otra tarea?");
    } while (continuar);

    mostrarLista();
  });

  // --- Botón RESET ---
  btnReset.addEventListener("click", () => {
    listaDeTareas = [];            // vaciar array
    listaHTML.innerHTML = "";       // limpiar lista en HTML
    console.clear();                // limpiar consola
    console.log("--- LISTA DE TAREAS REINICIADA ---");
  });

  // --- Función para mostrar lista en consola + HTML ---
  function mostrarLista() {
    listaHTML.innerHTML = ""; // limpiar HTML

    console.log("\n--- Lista de Tareas Pendientes ---");
    // -- bucle (forEach) para iterar sobre el array --
    listaDeTareas.forEach((tarea, i) => {
      console.log(`${i + 1}. ${tarea}`);
    // -- Concatenar para formatear salida contemplate literal --
      const li = document.createElement("li");
      li.textContent = `${i + 1}. ${tarea}`;
      listaHTML.appendChild(li);
    });
  }
});
