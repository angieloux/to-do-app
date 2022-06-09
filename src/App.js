import React from 'react';
import './App.css';

// Importing components
import Form from './components/Form'
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>aj's to dos</h1>
      </header>
      <Form/>
      <ToDoList/>
    </div>
  );
}

export default App;
