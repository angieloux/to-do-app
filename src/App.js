import React, { useState, useEffect } from "react";
import "./App.css";

// Importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  // Create sample data
  const initialTodos = [
    { text: "Go to gym", id: "0000", completed: false },
    { text: "Finish assignment", id: "0001", completed: false },
    { text: "Solve world hunger", id: "0002", completed: false },
  ];

  // Set the state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // HOOKS

  // // get local todos ONCE on load
  // useEffect(() => {
  //   getLocalTodos();
  // },[])

  // every time the todos/status value changes, run the filterhandler
  useEffect(() => {
    filterHandler();
    // saveLocalTodos();
  },[todos, status])


  // functions
  const filterHandler = () => {
    switch (status) {
      case "complete":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // // save to local
  // const saveLocalTodos = () => {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  // }

  // // get local todos
  // const getLocalTodos = () => {
  //   if(localStorage.getItem('todos') === null ) {
  //     localStorage.setItem('todos', JSON.stringify([]))
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem('todos'))
  //     setTodos(todoLocal)
  //   }
  // }

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
        setStatus={setStatus}
      />
      <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
