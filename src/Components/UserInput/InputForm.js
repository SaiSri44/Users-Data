import React, { useState } from "react";
import styles from "./InputForm.module.css";
import ModalError from "../ModalError/ModalError";

const InputForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(); //Intailly error is undefined i.e false
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const inputData = {
      name: enteredName,
      age: enteredAge,
    };
    setEnteredAge("");
    setEnteredName("");
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name or age (Non empty values)",
      });
      //Here erro becomes object, which is true
      return;
    }
    //enteredAge is string,we are comparing with number, so force converting string to number by adding + before
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid age (age > 0)",
      });
      return;
    }
    props.importDataToBox(inputData);
  };
  const removePopUpHandler = () => {
    setError(); //If we don't pass anything undefined will be passed, which is treated as False
  };
  return (
    <form onSubmit={submitHandler}>
      {error && (
        <ModalError
          title={error.title}
          message={error.message}
          onClick={removePopUpHandler}
        ></ModalError>
      )}
      <div>
        <label>UserName</label>
        <input
          type="text"
          onChange={nameChangeHandler}
          value={enteredName}
        ></input>
      </div>
      <div>
        <label>Age(years)</label>
        <input
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>
      </div>
      <button type="submit" className={styles["button"]}>
        Add User
      </button>
    </form>
  );
};
export default InputForm;
