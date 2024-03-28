import { useState } from "react";
import "./WindowComp.css";
import { v4 as uuidv4 } from "uuid";

const WindowComp = ({
  windowTitle,
  className,
  tiltleStyle,
  windowStyle,
  windowContainerStyle,
  windowData,
}) => {
  const [show, setShow] = useState(false);

  const mouseEnterHandeler = () => {
    setShow(true);
  };

  const mouseLeaveHandeler = () => {
    setShow(false);
  };

  return (
    <div 
    className="window--main--container" 
    style={windowContainerStyle ? windowContainerStyle : null}
     onMouseEnter={mouseEnterHandeler} 
     onMouseLeave={mouseLeaveHandeler}>
      <div className="window--title--container">
        <span style={tiltleStyle ? tiltleStyle : null}>{windowTitle}</span>
      </div>
      {show && (
        <div
          className={`window--container  ${className ? className : null}`}
          style={windowStyle ? windowStyle : null}
        >
          {windowData.map((data) => {
            return (
              <div
                key={uuidv4()}
                className="window--iteam--container"
              >
                <img src={data.iconSrc} alt={data.iconSrc.slice(2, -4)} />
                <div className="window--iteam--text--container">
                  <h3>{data.header}</h3>
                  <p>{data.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WindowComp;

// iconSrc , header , text   ...> data = [{}]
