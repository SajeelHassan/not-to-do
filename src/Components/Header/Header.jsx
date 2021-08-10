import React, { useContext } from "react";
import  ThemeContext  from "../../Context/theme-context";
import InputTodo from "../Input/Input";
import * as styles from "./Header.module.css";
import moonIcon from "../../assets/images/icon-moon.svg";
import sunIcon from "../../assets/images/icon-sun.svg";
import clsx from "clsx";
const Header = ({ addItemHandler }) => {
  const darkMode=useContext(ThemeContext).isDarkMode;
  const toggleTheme=useContext(ThemeContext).toggleTheme;
  const toggleThemeHandler = () => {
    toggleTheme();
  };
  return (
    <>
      <header className={clsx(darkMode?styles.headerLight:styles.headerDark)}>
        <div id="head">
          <div
            className={clsx(
            styles["head-main"],
            styles["d-flex"],
            styles["d-f-row"],
            styles["sa"]
            )}
          >
            <h1>TODO</h1>
            <img
              src={darkMode ? sunIcon : moonIcon}
              alt="todo list"
              className={styles.modeImg}
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
