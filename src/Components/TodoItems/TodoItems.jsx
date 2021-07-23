import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem.jsx";
import * as styles from "./TodoItems.module.css";
const TodoItems = ({ storedItems }) => {
  return (
    <div id="main" className={styles.main}>
      <ul className={`${styles["todo-items"]} ${styles.shadow}`}>
        {!storedItems.length ? (
          <div className={`${styles["nothing"]}`} id="nothing">
            <h3>Nothing to Show Here Yet!</h3>
          </div>
        ) : (
          storedItems.map((item) => (
            <TodoItem title={item.title} status={item.active} uId={item.key} />
          ))
        )}

        <div className={styles["todo-info"]}>
          <p className={styles["items-left"]}>5 items left</p>
          <p className={styles["clear-completed"]}>Clear Completed</p>
        </div>
      </ul>
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
