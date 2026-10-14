// src/App.jsx
import React, { useState } from 'react';
import TaskItem from './components/TaskItem';

function App() {
  // Estado para la lista de tareas
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender conceptos básicos de React', completed: false },
    { id: 2, text: 'Crear componentes y usar props', completed: false },
    { id: 3, text: 'Desplegar la app en GitHub Pages', completed: false }
  ]);

  // Estado para el contador
  const [counter, setCounter] = useState(0);

  // ESTADO NUEVO: Para activar/desactivar la animación del botón
  const [isAnimate, setIsAnimate] = useState(false);

  // Función para alternar el estado de una tarea
  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Función para incrementar y activar la animación
  const handleIncrement = () => {
    setCounter(counter + 1);
    setIsAnimate(true); // Encendemos la animación
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui' }}>
      
      {/* Añadimos estilos de animación CSS directamente en el JSX para que sea más fácil */}
      <style>{`
        @keyframes popBounce {
          0% { transform: scale(1); }
          30% { transform: scale(0.85); } /* Se aplasta */
          50% { transform: scale(1.2) rotate(-3deg); } /* Se estira y gira un poquito */
          75% { transform: scale(0.95) rotate(3deg); } /* Casi vuelve */
          100% { transform: scale(1); } /* Regresa a su tamaño */
        }

        .animar-click {
          animation: popBounce 0.35s ease-out;
          background-color: #3e8e41 !important; /* Cambia a un color de impacto rápido */
        }
      `}</style>

      <h1>Mi Primera App en React ⚛️</h1>
      
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Contador de Práctica</h2>
        <p>Has hecho clic <strong>{counter}</strong> veces.</p>
        
        {/* El botón ahora tiene la clase animada cuando 'isAnimate' sea verdadero */}
        <button 
          onClick={handleIncrement}
          onAnimationEnd={() => setIsAnimate(false)} // truco: apagamos la animación cuando finaliza
          className={isAnimate ? 'animar-click' : ''}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.2s, transform 0.1s', // transiciones base
            outline: 'none'
          }}
        >
           Incrementar Contador
        </button>
      </section>

      <section>
        <h2>Lista de Tareas</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggle={toggleTask} 
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;