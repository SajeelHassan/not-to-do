import React from "react";
import Header from "./Components/Header/Header.jsx";
import TodoItems from "./Components/TodoItems/TodoItems.jsx";
function App() {
  const items = [
    { key: 38724, title: "Do the work from APP" },
    { key: 38724, title: "Do the work from APP" },
  ];
  return (
    <>
      <Header />
      <TodoItems storedItems={items} />
    </>
  );
}

export default App;
