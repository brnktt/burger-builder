import React from "react";
import classes from "./Input.css";

const Input = props => {
  let inputElement = null;
  let showErrorMessage = false;
  const inputClasses = [classes.inputElement];

  if (!props.valid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
    showErrorMessage = true;
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <div>
          <input
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
          {showErrorMessage ? (
            <p className={classes.ValidationError}>
              {props.validationErrorMessage}
            </p>
          ) : null}
        </div>
      );
      break;
    case "textarea":
      inputElement = (
        <div>
          <textarea
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
          {showErrorMessage ? (
            <p className={classes.ValidationError}>
              {props.validationErrorMessage}
            </p>
          ) : null}
        </div>
      );
      break;
    case "select":
      inputElement = (
        <div>
          <select
            className={inputClasses.join(" ")}
            value={props.value}
            onChange={props.changed}
          >
            {props.elementConfig.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            ))}
          </select>
          {showErrorMessage ? (
            <p className={classes.ValidationError}>
              {props.validationErrorMessage}
            </p>
          ) : null}
        </div>
      );
      break;
    default:
      inputElement = (
        <div>
          <input
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
          {showErrorMessage ? (
            <p className={classes.ValidationError}>
              {props.validationErrorMessage}
            </p>
          ) : null}
        </div>
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
