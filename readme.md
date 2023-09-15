Pasos a seguir:
  Crea una estructura HTML con los siguientes elementos:
  ✅  Un encabezado <h1> con el texto "Lista de Tareas".
  ✅  Un <input> de tipo "text" con el id "taskInput" y el atributo placeholder "Nueva tarea".
  ✅  Un <button> con el id "addButton" y el texto "Agregar tarea".
  ✅  Una lista desordenada <ul> con el id "taskList".
  En el archivo JavaScript:
  ✅  Define las variables necesarias utilizando nombres descriptivos, como taskInput, addButton y taskList.
  ✅  Asocia un evento de clic al botón "Agregar tarea" (addButton) que llame a una función addTask.

    Implementa la función addTask:
  ✅ Dentro de esta función, obtén el valor del input de tarea (taskInput).
  ✅ Utiliza un condicional para verificar si el texto ingresado no está vacío o compuesto solo por espacios en blanco.
  ✅ Si el texto es válido, crea un nuevo elemento de lista <li>, asigna el texto de la tarea y agrega este elemento a la lista (taskList).
  ✅ Finalmente, limpia el contenido del input de tarea.
  ✅ Agrega otro evento al elemento <ul> (taskList) para detectar clics en las tareas de la lista. Al hacer clic en una tarea (<li>), elimina el elemento correspondiente.

  Desafío adicional (opcional):
  ✅ Modifica tu aplicación para incluir funcionalidades adicionales, como: 
  ✅ Marcar tareas como completadas, cambiar el estilo de las tareas completadas
  implementar una barra de búsqueda para filtrar tareas.


Prueba tu aplicación:
Ingresa diferentes tareas en el input y verifica si se agregan correctamente a la lista al hacer clic en el botón "Agregar tarea".
Asegúrate de que las tareas puedan eliminarse haciendo clic en ellas.
