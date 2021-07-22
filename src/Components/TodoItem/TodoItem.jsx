import React from "react";
import PropTypes from "prop-types";
import * as styles from "./TodoItem.module.css";
import removeIcon from "../../assets/images/cross.png";
const TodoItem = (props) => {
  const removeItemHandler = () => {};
  return (
    <>
      <li
        className={`${styles["todo-item"]}`}
        id={`"todo-"${props.key}`}
        key={props.key}
      >
        <input type="checkbox" />
        <p>{props.title}</p>
        <span className={styles.remove_Icon} onClick={removeItemHandler}>
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
