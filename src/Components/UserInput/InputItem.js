import React from "react";
import "./InputItem.css";

const InputItem = (props) => {
  return (
    <div className="input-item">
      <p>
        {props.userData.name} ({props.userData.age} Years old)
      </p>
    </div>
  );
};
export default InputItem;
