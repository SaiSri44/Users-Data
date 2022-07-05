import React from "react";
import InputForm from "./InputForm";
import styles from "./InputBox.module.css";

const InputBox = (props) => {
  const importDataToBox = (newUser) => {
    props.inputDataToApp(newUser);
  };
  return (
    <div className={styles["input-box"]}>
      <InputForm importDataToBox={importDataToBox}></InputForm>
    </div>
  );
};
export default InputBox;
