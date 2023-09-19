let tasks = [
  { name: "Preparar un desfile de moda", completed: false },
  { name: "Cuidar a sus mascotas", completed: false },
  { name: "Hacer ejercicio en su gimnasio", completed: false },
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
window.addEventListener("load", () => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }
  showTasks();
});

function addTask() {
  if (taskInput.value.trim().length !== 0) {
    tasks.push({ name: taskInput.value.trim(), completed: false });
  }
  taskInput.value = "";
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}
const showTasks = (lista = tasks) => {
  taskList.innerHTML = "";
  lista.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class=${
      task.completed ? "completed" : null
    } key=${index}>${task.name}</span>
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
  tasks[index].completed = !tasks[index].completed;
  span.classList.toggle("completed");
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

function searchTasks() {
  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  showTasks(filteredTasks);
}
