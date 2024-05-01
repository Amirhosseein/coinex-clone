
import "./SerchInput.css";
import { useState } from "react";

const SerchInput = ({
  className = "market--serch",
  clssAdded="",
  placeholder = "Serch",
  getValue = null,
  onSubmit = null,
}) => {
  const [input, setInput] = useState("");

  const keyDownHandeler = (e) => {
    if (e.key === "Enter") {
      onSubmit && onSubmit(input);
    }
  };

  const changeHandeler = (e)=>{
    setInput(e.target.value);
  };

  return (
    <input
      className={`${className}  ${clssAdded}`}
      placeholder={placeholder}
      value={input}
      onKeyDown={keyDownHandeler}
      onChange={changeHandeler}
    />
  );
};


export default SerchInput;
