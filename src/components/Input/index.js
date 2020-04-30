import React from "react";

import "./Input.css";

const Input = (props) => (
  <div className="input">
    {props.label && <label htmlFor={props.id}>{props.label}</label>}
    <input
      className="valid"
      type={props.type}
      id={props.id}
      required={props.required}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </div>
);

export default Input;
