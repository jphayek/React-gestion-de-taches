import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask('');
  };

  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'active'


  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };


  const filteredTasks = tasks.filter((t) => {
    if (filter === 'completed') return t.completed;
    if (filter === 'active') return !t.completed;
    return true; // all
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ma ToDo App</h1>
      <AddTaskForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />


      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setFilter('all')}>Toutes</button>
        <button onClick={() => setFilter('active')}>En cours</button>
        <button onClick={() => setFilter('completed')}>Terminées</button>
      </div>
    </div>

    
  );
}

export default App;
