import React from "react";
import PropTypes from "prop-types";
import * as styles from "./TodoItem.module.css";
const TodoItem = (props) => {
  return (
    <>
      <div className={`${styles["todo-item"]}`}>
        <input type="checkbox" name="todo-1" id={`"todo-"${props.key}`} />

        <p>{props.title}</p>
        <span>
          <img src="./images/cross.png" alt="" />
        </span>
      </div>
    </>
  );
};

TodoItem.PropTypes = {};
export default TodoItem;
