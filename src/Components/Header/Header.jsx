import React, { useState } from "react";
import InputTodo from "../Input/Input";
import * as styles from "./Header.module.css";
import moonIcon from "../../assets/images/icon-moon.svg";
import sunIcon from "../../assets/images/icon-sun.svg";
const Header = ({ addItemHandler }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleThemeHandler = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <>
      <header>
        <div id="head">
          <div
            className={`
            ${styles["head-main"]}
            ${styles["d-flex"]}
            ${styles["d-f-row"]}
            ${styles["sa"]}
            }`}
          >
            <h1>TODO</h1>
            <img
              src={darkMode ? moonIcon : sunIcon}
              alt="todo list"
              onClick={toggleThemeHandler}
            />
          </div>
          <InputTodo addTodo={addItemHandler} />
        </div>
      </header>
    </>
  );
};

export default Header;
