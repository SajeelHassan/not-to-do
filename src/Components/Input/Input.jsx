import React, { useRef } from "react";

import * as styles from "./Input.module.css";

const InputTodo = ({ addTodo }) => {
  const textInput = useRef(null);
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      addTodo(textInput.current.value);
      textInput.current.value = "";
    }
  };
  return (
    <>
      <div className={styles["task-input--wrap"]}>
        <div className={styles["task-input"]}>
          <input
            type="checkbox"
            unchecked="true"
            disabled
            id="input-checkbox"
          />
          <input
            ref={textInput}
            autoFocus={true}
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
