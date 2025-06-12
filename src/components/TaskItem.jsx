import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <label
        className={`task-label ${task.completed ? "completed" : ""}`}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </label>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        ×
      </button>
    </li>
  );
}

export default TaskItem;
