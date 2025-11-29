// Arreglo para guardar las tareas
let listaDeTareas = [];

document.getElementById("btnAgregar").addEventListener("click", () => {
  
  let continuar;

  do {
    let nuevaTarea = prompt("Ingresa una nueva tarea:");

    if (nuevaTarea !== null && nuevaTarea.trim() !== "") {
      listaDeTareas.push(nuevaTarea.trim());
    } else {
      alert("La tarea no puede estar vacía.");
    }

    continuar = confirm("¿Quieres agregar otra tarea?");
    
  } while (continuar);

  // Mostrar lista final en consola
  console.log("\n--- Lista de Tareas Pendientes ---");
  for (let i = 0; i < listaDeTareas.length; i++) {
    console.log(`${i + 1}. ${listaDeTareas[i]}`);
  }
});
