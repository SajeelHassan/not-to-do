import React from "react";

import * as styles from "./Input.module.css";

const InputTodo = () => {
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
            type="text"
            name="task-1"
            id="create-task"
            placeholder="Create a new todo..."
          />
        </div>
      </div>
    </>
  );
};

export default InputTodo;
