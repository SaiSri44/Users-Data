import React, { useState } from "react";
import "./Components/UserInput/InputBox";
import InputBox from "./Components/UserInput/InputBox";
import InputItemBox from "./Components/UserInput/InputItemBox";


const intialUsers = [];
const App = () => {
  const [inputData, AddData] = useState(intialUsers);
  const inputDataToApp = (newUser) => {
    AddData((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };
  return (
    <div className="App">
      <InputBox inputDataToApp={inputDataToApp}></InputBox>
      <InputItemBox inputData={inputData}></InputItemBox>
    </div>
  );
};

export default App;
