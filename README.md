Act4. Introducción a React - Fundamentos y Primer Componente

Descripción del Proyecto

Esta es una aplicación web práctica desarrollada con React y construida mediante Vite. El proyecto consta de una interfaz interactiva que integra dos funcionalidades principales:

Contador Interactivo: Un componente que gestiona su propio estado para llevar la cuenta de clics, incorporando animaciones dinámicas gestionadas a través del ciclo de vida del componente.

Gestor de Tareas: Una lista de elementos renderizada dinámicamente a partir de un arreglo, donde cada tarea es procesada por un componente hijo independiente que recibe propiedades (props) y permite alterar el estado de completado de cada elemento.

El objetivo principal es demostrar la comprensión práctica de los fundamentos de React: componentes funcionales, inmutabilidad de props, manejo de estado interno (useState) y renderizado iterativo de listas en el Virtual DOM.

Cuestionario y Respuestas

a) ¿Qué diferencia hay entre props y state en React?
La principal diferencia radica en su origen y mutabilidad:

Props (Propiedades): Son datos externos que se pasan de un componente padre a un componente hijo. Son de solo lectura (inmutables), lo que significa que el componente que las recibe no puede modificarlas directamente.

State (Estado): Son datos internos y privados controlados exclusivamente por el componente donde fueron declarados. El estado es mutable; cuando se actualiza, React reacciona automáticamente volviendo a renderizar el componente y sus hijos para reflejar los cambios en la interfaz.

b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
La propiedad key es fundamental para el algoritmo de reconciliación de React (Virtual DOM). Al asignar un identificador único a cada elemento de una lista, React puede rastrear de forma exacta qué elementos específicos han sido modificados, añadidos o eliminados. Esto evita que React tenga que reconstruir toda la lista desde cero, optimizando drásticamente el rendimiento y previniendo errores visuales en el estado de los componentes (como inputs que pierden el foco o datos que se cruzan).

c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
La función useState es un Hook de React que nos permite agregar variables reactivas a un componente funcional. Al invocarlo, nos devuelve un arreglo con dos elementos: el valor actual del estado y una función dedicada para actualizar dicho valor.
En mi aplicación, utilicé useState en múltiples lugares, por ejemplo, para llevar el control del contador. Inicialicé const [counter, setCounter] = useState(0);, y cada vez que el usuario hace clic en el botón, mando a llamar a setCounter(counter + 1). Esta acción incrementa el número y le avisa a React que debe redibujar esa parte de la pantalla con el nuevo valor.

d) Enlace del repositorio de GitHub
Repositorio en GitHub - t3_act4_react

e) Enlace del proyecto ya desplegado en GitHub Pages
Despliegue en GitHub Pages
