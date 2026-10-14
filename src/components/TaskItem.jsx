// src/components/TaskItem.jsx
import React from 'react';

// a) Componente funcional simple 
// b) Recibe y muestra props (task y la función onToggle)
function TaskItem({ task, onToggle }) {
  return (
    <li style={{ 
      padding: '10px', 
      margin: '5px 0', 
      backgroundColor: '#f4f4f4', 
      borderRadius: '5px',
      textDecoration: task.completed ? 'line-through' : 'none',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <span>{task.text}</span>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? 'Desmarcar' : 'Completar'}
      </button>
    </li>
  );
}

export default TaskItem;