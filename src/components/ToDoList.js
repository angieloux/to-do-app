import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo 
            setTodos={setTodos}
            todo={todo}
            todos={todos}
            key={todo.id} 
            text={todo.text}
            completed={todo.completed} />
        ))}
        ;
      </ul>
    </div>
  );
};

export default ToDoList;
