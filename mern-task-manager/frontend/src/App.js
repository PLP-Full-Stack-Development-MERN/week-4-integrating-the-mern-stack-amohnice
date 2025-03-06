import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="app">
      <h1>Welcome to the Task Manager App</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
