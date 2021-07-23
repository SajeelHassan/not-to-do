import React, { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import TodoItems from "./Components/TodoItems/TodoItems.jsx";
function App() {
  const [todos, setTodos] = useState([]);
  const addItem = (titleToAdd) => {
    setTodos([{ title: titleToAdd, active: true, key: Date.now() }, ...todos]);
  };
  const items = todos;
  return (
    <>
      <Header addItemHandler={addItem} />
      <TodoItems storedItems={items} />
    </>
  );
}

export default App;
