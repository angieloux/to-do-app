import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    // Events 
    const deleteHandler = () => {
        // compare the todo from state with the one that is being clicked on
        // if it matches, delete it
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    // keep all other properties the same, but modify the completed property to true
                    ...item, completed: !item.completed
                }
            }
            // if it doesn't match, don't do anything
            return item
        }))
    }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
