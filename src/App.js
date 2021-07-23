import React, { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import TodoItems from "./Components/TodoItems/TodoItems.jsx";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (titleToAdd) => {
    setTodos([{ title: titleToAdd, active: true, key: Date.now() }, ...todos]);
  };
  const removeTodo = () => {};
  const completeTodo = (uKey) =>
    setTodos(
      todos.map((todo) =>
        todo.key === uKey ? { ...todo, active: !todo.active } : todo
      )
    );
  const items = todos;
  console.log(todos);
  return (
    <>
      <Header addItemHandler={addTodo} />
      <TodoItems
        storedItems={items}
        removeTodoHandler={removeTodo}
        completeTodoHandler={completeTodo}
      />
    </>
  );
}

export default App;
