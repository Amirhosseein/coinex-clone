import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"} ${props.className || ""}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || "default"} ${
          props.inverse ? "button--inverse" : ""
        } ${props.danger ? "button--danger" : ""}  ${
          props.blue ? "button--blue" : ""
        }  ${props.className || ""}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || "default"} ${
        props.inverse ? "button--inverse" : ""
      } ${props.danger ? "button--danger" : ""} ${
        props.blue ? "button--blue" : ""
      } ${props.className || ""}`}
      type={props.type}
      name={props.name}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
