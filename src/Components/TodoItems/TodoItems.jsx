import React from "react";
import TodoItem from "../TodoItem/TodoItem.jsx";
import * as styles from "./TodoItems.module.css";
const TodoItems = () => {
  return (
    <div id="main" className={styles.main}>
      <div className={`${styles["todo-items"]} ${styles.shadow}`}>
        <TodoItem key="99" title="Hello" />;
        <div className={styles["todo-info"]}>
          <p className={styles["items-left"]}>5 items left</p>
          <p className={styles["clear-completed"]}>Clear Completed</p>
        </div>
      </div>
      <div
        className={`${styles["todo-info"]} ${styles["todo-info-2"]} ${styles.show_items}`}
      >
        <button id="show_items__all">All</button>
        <button id="show_items__active">Active</button>
        <button id="show_items__completed">Completed</button>
      </div>
    </div>
  );
};
export default TodoItems;
