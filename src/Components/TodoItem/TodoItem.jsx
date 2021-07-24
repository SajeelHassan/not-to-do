import React from "react";
import PropTypes from "prop-types";
import * as styles from "./TodoItem.module.css";
import removeIcon from "../../assets/images/cross.png";
const TodoItem = ({ title, active, uId, checkTodo, removeTodo }) => {
  const RemoveTodoHandler = () => {
    removeTodo(uId);
  };
  const completeHandler = (e) => {
    if (e.target.checked) {
      checkTodo(uId);
    } else {
      checkTodo(uId);
    }
  };

  return (
    <>
      <li className={`${styles["todo-item"]}`} key={uId}>
        <input type="checkbox" checked={!active} onClick={completeHandler} />
        <p style={{ textDecoration: !active ? "line-through" : "none" }}>
          {title}
        </p>
        <span className={styles.remove_Icon} onClick={RemoveTodoHandler}>
          <img src={removeIcon} alt="remove button" />
        </span>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
};
export default TodoItem;
