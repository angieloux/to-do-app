import React, { useState } from "react";
import "./App.css";

// Importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState("");

  return (
    <div className="App">
      <header>
        <h1>aj's to dos</h1>
      </header>
      <Form
        setInputText={setInputText}
        value={inputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
      />
      <ToDoList />
    </div>
  );
}

export default App;
