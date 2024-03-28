import { useState } from "react";
import "./ListComp.css";

const ListCopm = (props) => {
  const [open, setOpen] = useState(false);

  const clickHandelr = () => {
    setOpen((pre) => !pre);
  };

  return (
    <li data-name="menu">
      <p
        data-name="menu"
        style={{ marginTop: "0px",marginBottom: "0px", display:"flex", justifyContent:"space-between" }}
        onClick={clickHandelr}
      >
        {props.title} 

        <span data-name="menu" style={{paddingRight:"10%"}}>{' ✔'}</span>
      </p>
      { <div className="listComp--container" data-name="menu" style={open ? null:{height:'0px'}} >
          <ul className="listComp--ul" style={open ? null : {top:'-200px'}}>
            {props.data?.map((elm) => {
              return (
                <li key={elm} data-name="menu">
                  {elm}
                </li>
              );
            })}
          </ul>
      </div>}
    </li>
  );
};

export default ListCopm;
