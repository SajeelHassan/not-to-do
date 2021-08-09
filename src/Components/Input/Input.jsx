import React, { useRef,useContext } from "react";
import clsx from "clsx";
import ThemeContext from '../../Context/theme-context';
import * as styles from "./Input.module.css";

const InputTodo = ({ addTodo }) => {
  const darkMode=useContext(ThemeContext).isDarkMode;
  const textInput = useRef(null);
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      if (textInput.current.value.length > 0) {
        addTodo(textInput.current.value);
        textInput.current.value = "";
      }
    }
  };
  return (
    <>
      <div className={clsx(styles["task-input--wrap"])}>
        <div className={clsx(darkMode?styles["task-input-dark"]:styles["task-input-light"],styles["task-input"])}>
          <input
            type="checkbox"
            unchecked="true"
            disabled
            id="input-checkbox"
          />
          <input
            ref={textInput}
            autoFocus={true}
            autoComplete="off"
            type="text"
            name="task-1"
            id="create-task"
            placeholder="Create a new todo..."
            onKeyDown={enterHandler}
          />
        </div>
      </div>
    </>
  );
};

export default InputTodo;
