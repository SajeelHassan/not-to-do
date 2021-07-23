import React, { useRef } from "react";
import PropTypes from "prop-types";
import * as styles from "./TodoItem.module.css";
import removeIcon from "../../assets/images/cross.png";
const TodoItem = (props) => {
  const titleRef = useRef();
  const removeItemHandler = () => {};
  const completeHandler = (e) => {
    if (e.target.checked) {
      titleRef.current.classList.add(`${styles.checked}`);
      // props.status = !props.status;
    } else {
      titleRef.current.classList.remove(`${styles.checked}`);
      // props.status = !props.status;
    }
  };
  return (
    <>
      <li className={`${styles["todo-item"]}`} key={props.uId}>
        <input type="checkbox" onClick={completeHandler} />
        <p ref={titleRef}>{props.title}</p>
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
