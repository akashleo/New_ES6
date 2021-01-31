import React from "react";
import ".././App.css";

const validation = (props) => {
  let validationMessage = "Length long enough";
  let classes = [];
  if (props.stringLength < 5) {
    validationMessage = "Length too short";
    classes.push("red");
  }
  if (props.stringLength < 2) {
    validationMessage = "Length too short";
    classes.push("bold");
  }
  return <div className={classes.join(" ")}> {validationMessage}</div>;
};

export default validation;
