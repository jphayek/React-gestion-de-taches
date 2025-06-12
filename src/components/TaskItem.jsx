import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
}

export default TaskItem;
