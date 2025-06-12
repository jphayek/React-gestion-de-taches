import React from 'react';

function AddTaskForm({ task, setTask, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddTaskForm;
