import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem.jsx";
import * as styles from "./TodoItems.module.css";
const TodoItems = ({ storedItems, completeTodoHandler }) => {
  return (
    <div id="main" className={styles.main}>
      <ul className={`${styles["todo-items"]}`}>
        {!storedItems.length ? (
          <li className={`${styles["nothing"]}`} id="nothing">
            <h3>Add your not TODO!</h3>
          </li>
        ) : (
          storedItems.map((item) => (
            <TodoItem
              title={item.title}
              active={item.active}
              uId={item.key}
              checkTodo={completeTodoHandler}
            />
          ))
        )}
      </ul>
      <div className={`${styles["todo-info"]} ${styles["d-flex"]}`}>
        <p className={styles["items-left"]}>{storedItems.length} items left</p>
        <p className={styles["clear-completed"]}>Clear Completed</p>
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
TodoItems.propTypes = {
  storedItems: PropTypes.array,
};
export default TodoItems;
