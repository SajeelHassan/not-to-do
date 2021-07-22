import React, { useRef, useState } from "react";

import * as styles from "./Input.module.css";

const InputTodo = () => {
  const textInput = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      alert(inputValue);
    }
  };
  const valueHandler = (e) => {
    setInputValue(e.target.value);
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
            Ref={textInput}
            autoFocus="true"
            type="text"
            name="task-1"
            id="create-task"
            placeholder="Create a new todo..."
            onKeyDown={enterHandler}
            onChange={valueHandler}
          />
        </div>
      </div>
    </>
  );
};

export default InputTodo;
