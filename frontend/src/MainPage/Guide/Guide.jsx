import { memo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Guide.css";

import {data} from "./GuideData.json";

const Guide = memo (function Guide(){
  const [state, setState] = useState(0);

  // img src set
//   const imgSet = [
//     ["./basic1.png", "./basic2.png", "./basic3.png"],
//     ["./advance1.png", "./advance2.png", "./advance3.png"],
//   ];

  const changeState = (e) => {
    const newState = Number(e.target.getAttribute("data-state"));
    setState(newState);
  };

  return (
    <div className="guide--container  guide--container--light">
      <h1>Newbie Guide</h1>
      <p>Master the process of crypto exchange readily</p>
      <button
        className={state === 0 ? "guide--active--btn" : null}
        onClick={changeState}
        data-state={0}
      >
        Basic
      </button>
      <button
        className={state === 1 ? "guide--active--btn" : null}
        onClick={changeState}
        data-state={1}
      >
        Advanced
      </button>
      <div className="guide--imgs--container">

        {data[state].map((elm,index) => {
          return <div className={`guide--card--${index}`} key={uuidv4()}> 
          <img src={elm.imgSrc} alt={`image about ${elm.imgAlt}`} />
          <p> {elm.context} </p>
          </div>
        })}

      </div>
    </div>
  );
});

export default Guide;
