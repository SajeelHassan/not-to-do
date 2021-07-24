import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem.jsx";
import * as styles from "./TodoItems.module.css";
const TodoItems = ({
  storedItems,
  completeTodoHandler,
  removeTodoHandler,
  removeCompletedHandler,
}) => {
  const [todoItems, setTodoItems] = useState([]);
  const [showAll, setShowAll] = useState([]);
  const [showActive, setShowActive] = useState([]);
  const [showCompleted, setShowCompleted] = useState([]);
  useEffect(() => {
    setTodoItems(storedItems);
  }, [storedItems]);
  useEffect(() => {
    setTodoItems(showAll);
  }, [showAll]);
  useEffect(() => {
    setTodoItems(showActive);
  }, [showActive]);
  useEffect(() => {
    setTodoItems(showCompleted);
  }, [showCompleted]);
  const ShowAll = () => {
    setShowAll(storedItems);
  };
  const ShowCompleted = () => {
    let items = [...storedItems];
    setShowCompleted(items.filter((todo) => todo.active === false));
  };
  const ShowActive = () => {
    let items = [...storedItems];
    setShowActive(items.filter((todo) => todo.active === true));
  };

  return (
    <div id="main" className={styles.main}>
      <ul className={`${styles["todo-items"]}`}>
        {!todoItems.length ? (
          <li className={`${styles["nothing"]}`} id="nothing">
            <h3>Add your not TODO!</h3>
          </li>
        ) : (
          todoItems.map((item) => (
            <TodoItem
              title={item.title}
              active={item.active}
              uId={item.key}
              checkTodo={completeTodoHandler}
              removeTodo={removeTodoHandler}
            />
          ))
        )}
      </ul>
      <div className={`${styles["todo-info"]} ${styles["d-flex"]}`}>
        <p className={styles["items-left"]}>Total items {todoItems.length}</p>
        <p
          className={styles["clear-completed"]}
          onClick={removeCompletedHandler}
        >
          Clear Completed
        </p>
      </div>
      <div
        className={`${styles["todo-info"]} ${styles["todo-info-2"]} ${styles.show_items}`}
      >
        <button id="show_items__all" onClick={ShowAll}>
          All
        </button>
        <button id="show_items__active" onClick={ShowActive}>
          Active
        </button>
        <button id="show_items__completed" onClick={ShowCompleted}>
          Completed
        </button>
      </div>
    </div>
  );
};
TodoItems.propTypes = {
  storedItems: PropTypes.array,
};
export default TodoItems;
