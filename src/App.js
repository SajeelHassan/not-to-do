import React, { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import TodoItems from "./Components/TodoItems/TodoItems.jsx";
function App() {
  const [todos, setTodos] = useState([]);
  const AddTodo = (titleToAdd) => {
    setTodos([{ title: titleToAdd, active: true, key: Date.now() }, ...todos]);
  };
  const RemoveTodo = (uKey) => {
    setTodos(todos.filter((todo) => todo.key !== uKey));
  };
  const CompleteTodo = (uKey) =>
    setTodos(
      todos.map((todo) =>
        todo.key === uKey ? { ...todo, active: !todo.active } : todo
      )
    );
  const RemoveCompleted = () => {
    setTodos(todos.filter((todo) => todo.active === true));
  };
  return (
    <>
      <Header addItemHandler={AddTodo} />
      <TodoItems
        storedItems={todos}
        allItems={todos}
        removeTodoHandler={RemoveTodo}
        completeTodoHandler={CompleteTodo}
        removeCompletedHandler={RemoveCompleted}
        // ShowAllHandler={ShowAll}
        // ShowActiveHandler={ShowActive}
        // ShowCompletedHandler={ShowCompleted}
      />
    </>
  );
}

export default App;
