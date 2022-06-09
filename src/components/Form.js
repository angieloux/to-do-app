import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    // prevent the page from reloading on form submit
    e.preventDefault();
    
    // add the new item to the todo array based on user input and give it a random id
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.round(Math.random() * 10000) }
    ])
    ;

    // reset the input back to nil once the to-do item has been added
    setInputText('')
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <form>
      <input onChange={inputTextHandler} placeholder="I need to..." value={inputText} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
      {/* <i class="fa-solid fa-circle-plus"></i> */}
      <i class="fa-solid fa-circle-plus"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="complete">Done</option>
          <option value="incomplete">To do</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
