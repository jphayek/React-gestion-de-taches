import React, { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editText.trim() === "") return;
    onEdit(task.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button type="submit" className="save-button">
            💾
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={() => setIsEditing(false)}
          >
            ❌
          </button>
        </form>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            className="task-text"
          >
            {task.text}
          </span>
          <span
            onClick={() => setIsEditing(true)}
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              fontSize: "1.2rem",
              userSelect: "none",
            }}
            title="Éditer la tâche"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setIsEditing(true);
            }}
          >
            ✏️
          </span>
          <button onClick={() => onDelete(task.id)} className="delete-button">
            🗑️
          </button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
