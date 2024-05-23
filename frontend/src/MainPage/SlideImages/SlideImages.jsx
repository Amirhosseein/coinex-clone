import { memo, useState } from "react";
import "./SlideImages.css";
import Next from "../../shared Comp/SVG/Next/Next";
import Pre from "../../shared Comp/SVG/Pre/Pre";

const SlidImages = memo (function SlideImages(){
  const [set, setHandeler] = useState({ state: 0, increase: true });

  const tresh = 2;

  const clickHandeler = (e) => {
    const data = e.target.getAttribute("data-btn");
    if (data === "pre") {
      set.state > 0 &&
        setHandeler((pre) => ({ state: pre["state"] - 1, increase: false }));
    } else if(data === "next") {
      set.state < tresh &&
        setHandeler((pre) => ({ state: pre["state"] + 1, increase: true }));
    }else{
      return;
    }
  };

  const linkHandeler = (e) => {
    const state = Number(e.target.getAttribute("data-link"));

    if (state !== set.state) {
      setHandeler((pre) => {
        const newSet =
          state > pre.state
            ? { state: state, increase: true }
            : { state: state, increase: false };
        return newSet;
      });
    }
  };

  return (
    <div className="sliderImage--parent--container  sliderImage--parent--container--light ">
      <div className="sliderImage--container">
        <span style={{ margin: "auto" }}>
          <Pre 
            data-btn="pre"
            onClick={clickHandeler}
          /> 
        </span>

        <div
          className={`slider--set ${set.state !== 0 && "hide"}`}
          style={
            set.increase
              ? { transformOrigin: "100% 50%" }
              : { transformOrigin: "0% 50%" }
          }
        >
          <img src="./A1.png" />
          <img className="slider--image--min--2ed" src="./A2.png" />
          <img className="slider--image--min--last" src="./A3.png" />
        </div>

        <div
          className={`slider--set ${set.state !== 1 && "hide"}`}
          style={
            set.increase
              ? { transformOrigin: "100% 50%" }
              : { transformOrigin: "0% 50%" }
          }
        >
          <img src="./A4.png" />
          <img className="slider--image--min--2ed" src="./A5.png" />
          <img className="slider--image--min--last" src="./A6.png" />
        </div>

        <div
          className={`slider--set ${set.state !== 2 && "hide"}`}
          style={
            set.increase
              ? { transformOrigin: "100% 50%" }
              : { transformOrigin: "0% 50%" }
          }
        >
          <img src="./A7.png" />
          <img className="slider--image--min--2ed" src="./A8.png" />
          <img className="slider--image--min--last" src="./A9.png" />
        </div>

        <span style={{ margin: "auto" }}>
         <Next 
          data-btn="next"
          onClick={clickHandeler}
         />
        </span>
      </div>
      <div
        className="span--container"
        style={{
          margin: "7px auto 0px",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <span
          style={set.state === 0 ? { backgroundColor: "#0ead98" } : null}
          data-link={0}
          onClick={linkHandeler}
        ></span>
        <span
          style={set.state === 1 ? { backgroundColor: "#0ead98" } : null}
          data-link={1}
          onClick={linkHandeler}
        ></span>
        <span
          style={set.state === 2 ? { backgroundColor: "#0ead98" } : null}
          data-link={2}
          onClick={linkHandeler}
        ></span>
      </div>
    </div>
  );
});

export default SlidImages;
