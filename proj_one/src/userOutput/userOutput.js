import React from "react";
import UserInput from ".././UserInput/userInput";
import Validation from ".././Validation/Validation";
import ".././User.css";

const userOutput = (props) => {
  return (
    <div className="User">
      <p>Hello my name is {props.name}</p>
      <p>I work in {props.work}</p>
      <UserInput changed={props.nameChanged} field={props.name} />
      <br />
      <UserInput changed={props.workChanged} field={props.work} />
      <br />
      <Validation stringLength={props.stringLength} />
    </div>
  );
};

export default userOutput;
