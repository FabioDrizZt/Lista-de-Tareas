const tasks = [
  "Preparar un desfile de moda",
  "Cuidar a sus mascotas",
  "Hacer ejercicio en su gimnasio",
  "Ir de compras para actualizar su guardarropa",
  "Estudiar para su próxima aventura",
  "Ayudar a su comunidad en proyectos voluntarios",
  "Organizar una fiesta de cumpleaños",
  "Diseñar ropa y accesorios",
  "Viajar por el mundo en su jet privado",
  "Participar en competencias deportivas",
];
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

addButton.addEventListener("click", addTask);
searchInput.addEventListener("input", searchTasks);
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") addTask();
});

function addTask() {
  if (taskInput.value.trim().length !== 0) {
    tasks.push(taskInput.value.trim());
  }
  taskInput.value = "";
  showTasks();
}
const showTasks = (lista = tasks) => {
  taskList.innerHTML = "";
  lista.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span key=${index}>${task}</span>
    <div>
      <button onclick="editTask(${index})"> 🖋 </button>
      <button onclick="removeTask(${index})"> ❌ </button>
      <button onclick="toggleTask(${index})"> ✅ </button>
    </div>`; // alt + 96 => `
    taskList.appendChild(li);
  });
};
const removeTask = (index) => {
  tasks.splice(index, 1); // elimina un elemento especifico
  showTasks();
};
const editTask = (index) => {
  const nuevoTexto = prompt("Editar tarea", tasks[index]);
  if (nuevoTexto == "" || nuevoTexto == null) return;
  tasks[index] = nuevoTexto;
  showTasks();
};

const toggleTask = (index) => {
  const span = document.querySelector(`span[key="${index}"]`);
  span.classList.toggle("completed");
};

function searchTasks() {
  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  showTasks(filteredTasks);
}

showTasks();
