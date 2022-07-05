import React from "react";
import styles from "./ModalError.module.css";
const ModalError = (props) => {
  const onClickHandler = () => {
    props.onClick();
  };
  return (
    <div className={styles["outer_container"]} onClick={onClickHandler}>
      <div className={styles["inner_container"]}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <button type="button" onClick={onClickHandler}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};
export default ModalError;
