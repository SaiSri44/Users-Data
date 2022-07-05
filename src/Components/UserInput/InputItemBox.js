import React from "react";
import styles from "./InputItemBox.module.css";
import InputItem from "./InputItem";

const InputItemBox = (props) => {
  let content = (
    <p style={{ marginLeft: "14px" }}>No users to Dispaly,Add one</p>
  );
  return (
    <div className={styles["input-item-container"]}>
      {props.inputData.length === 0 && content}
      {props.inputData.length > 0 &&
        props.inputData.map((userData) => (
          <InputItem userData={userData}></InputItem>
        ))}
    </div>
  );
};
export default InputItemBox;
