import { useState } from "react";
import "./SlideImages.css";

const SlidImages = () => {
  const [set, setHandeler] = useState({ state: 0, increase: true });

  const tresh = 2;

  const clickHandeler = (e) => {
    const data = e.target.getAttribute("data-btn");
    if (data === "pre") {
      set.state > 0 &&
        setHandeler((pre) => ({ state: pre["state"] - 1, increase: false }));
    } else {
      set.state < tresh &&
        setHandeler((pre) => ({ state: pre["state"] + 1, increase: true }));
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
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="slider--container">
        <span style={{ margin: "auto" }}>
          <img
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
            src="./previous.png"
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
          <img
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
            src="./next.png"
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
};

export default SlidImages;
