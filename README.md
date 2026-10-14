# Act4. Introducción a React - Fundamentos y Primer Componente

Mini aplicación desarrollada con React y Vite que incluye un contador interactivo y un gestor de tareas. El proyecto demuestra el uso de componentes funcionales, props, manejo de estado (useState) y renderizado de listas.

---

## Respuestas al Cuestionario

### a) ¿Qué diferencia hay entre props y state en React?

Las **props** (propiedades) son datos externos que se pasan de un componente padre a un componente hijo. Son de solo lectura (inmutables para el componente que las recibe).

El **state** (estado) es un conjunto de datos interno y privado controlado por el propio componente. Es mutable y, cuando cambia, React vuelve a renderizar el componente para reflejar la actualización en pantalla.

---

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La propiedad `key` ayuda a React a identificar de forma única qué elementos de una lista han cambiado, se han agregado o se han eliminado.

Esto optimiza el rendimiento del Virtual DOM, ya que React no necesita volver a dibujar toda la lista, sino únicamente los elementos específicos que sufrieron modificaciones.

---

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

`useState` es un Hook que nos permite agregar memoria a un componente. Nos devuelve un arreglo con dos valores: el estado actual y una función para actualizar ese estado.

En la aplicación lo utilicé para manejar el `counter` (el contador numérico), para el arreglo de `tasks` (las tareas) y para controlar la animación del botón.

**Ejemplo de uso en el código:**

```javascript
// Definición del estado para el contador
const [counter, setCounter] = useState(0);

// Función que actualiza el estado al hacer clic
const handleIncrement = () => {
  setCounter(counter + 1);
};
```

Al ejecutar `setCounter(counter + 1)`, React detecta el cambio de estado y actualiza el valor numérico en la pantalla.

---

### d) Enlace del repositorio de GitHub

[Repositorio t3_act4_react](https://yahelaleman1904-blip.github.io/t3_act4_react/)

---

### e) Enlace del proyecto desplegado en GitHub Pages

[Proyecto Desplegado - Actividad 4](https://yahelaleman1904.github.io/t3_act4_react/)
