import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  // Charger les tasks depuis localStorage au démarrage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");
  const [inputValue, setInputValue] = useState("");

  // Sauvegarder les tasks dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setInputValue("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    )
  );
};


  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1 className="app-title">Ma To-Do List</h1>

      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          placeholder="Ajouter une tâche..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="task-input"
        />
        <button type="submit" className="task-button">
          Ajouter
        </button>
      </form>

      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} />

      <div className="filters">
        <button
          className={`filter-button ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          Toutes
        </button>
        <button
          className={`filter-button ${filter === "active" ? "active" : ""}`}
          onClick={() => setFilter("active")}
        >
          En cours
        </button>
        <button
          className={`filter-button ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Terminées
        </button>
      </div>
    </div>
  );
}

export default App;
