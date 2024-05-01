import { useState } from "react";

import "./WorldIcon.css";

export default function WorldIconon({ light }) {
  const [inside, setInside] = useState({
    svg: false,
    box: false,
    "svg-box": false,
  });

  const mouseEnterHandeler = (e) => {
    console.log(e.target.getAttribute("data-name") + " In");

    const name = e.target.getAttribute("data-name");
    if (name) {
      setInside((pre) => {
        if (name === "svg") {
          return { ...pre, [name]: true, "svg-box": true };
        } else {
          return { ...pre, [name]: true };
        }
      });
    }
    return;
  };

  const mouseLeaveHandeler = (e) => {
    console.log(e.target.getAttribute("data-name") + " Out");

    const name = e.target.getAttribute("data-name");
    if (!!name) {
      setInside((pre) => {
        return { ...pre, [name]: false };
      });

      if (name === "svg") {
        let timer;
        timer = setTimeout(() => {
          setInside((pre) => ({ ...pre, "svg-box": false }));
          clearTimeout(timer);
        }, 500);
      } else {
      }
    }
    return;
  };

  return (
    <div>
      <svg
        data-name="svg"
        version="1.1"
        viewBox="0 0 1600 1600"
        width="17"
        height="17"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={mouseEnterHandeler}
        onMouseLeave={mouseLeaveHandeler}
      >
        <path
          data-name="svg"
          transform="translate(808,64)"
          d="m0 0h8v8h88v8h56v8h32v8h24v8h24v8h24v8h24v8h16v8h16v8h16v8h16v8h8v8h16v8h16v8h8v8h16v8h8v8h8v8h16v8h8v8h8v8h16v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v16h8v8h8v8h8v8h8v8h8v16h8v8h8v8h8v16h8v16h8v8h8v16h8v24h8v16h8v16h8v16h8v24h8v24h8v24h8v40h8v32h8v48h8v176h-8v56h-8v32h-8v32h-8v24h-8v24h-8v16h-8v24h-8v16h-8v16h-8v16h-8v16h-8v16h-8v8h-8v16h-8v8h-8v16h-8v8h-8v8h-8v16h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-16v8h-8v8h-8v8h-16v8h-8v8h-16v8h-8v8h-16v8h-16v8h-16v8h-16v8h-24v8h-16v8h-16v8h-24v8h-32v8h-32v8h-32v8h-48v8h-168v-8h-64v-8h-40v-8h-24v-8h-24v-8h-24v-8h-24v-8h-16v-8h-16v-8h-16v-8h-16v-8h-16v-8h-16v-8h-16v-8h-8v-8h-16v-8h-8v-8h-16v-8h-8v-8h-8v-8h-16v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-16h-8v-8h-8v-8h-8v-8h-8v-16h-8v-8h-8v-16h-8v-8h-8v-16h-8v-16h-8v-8h-8v-24h-8v-8h-8v-24h-8v-16h-8v-24h-8v-24h-8v-24h-8v-32h-8v-32h-8v-48h-8v-96h-8v-24h8v-80h8v-48h8v-40h8v-24h8v-24h8v-24h8v-24h8v-24h8v-8h8v-24h8v-8h8v-16h8v-16h8v-8h8v-8h8v-16h8v-8h8v-16h8v-8h8v-8h8v-8h8v-16h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h16v-8h8v-8h8v-8h8v-8h16v-8h8v-8h16v-8h8v-8h16v-8h16v-8h16v-8h16v-8h16v-8h16v-8h24v-8h16v-8h24v-8h32v-8h32v-8h56v-8h112v-8zm-64 64v8h-16v8h-8v8h-16v8h-8v8h-8v8h-16v8h-8v8h-8v8h-8v8h-8v16h-8v8h-8v8h-8v16h-8v8h-8v16h-8v16h-8v16h-8v16h-8v16h-8v24h-8v8h-8v16h-8v24h64v8h32v-8h72v8h56v-8h8v-288h-24zm88 0v56h-8v232h32v8h200v-8h8v-8h-8v-16h-8v-24h-8v-16h-8v-16h-8v-16h-8v-16h-8v-16h-8v-16h-8v-16h-8v-8h-8v-16h-8v-8h-8v-8h-8v-8h-8v-16h-16v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-16v-8h-24v-8h-16zm-232 24v8h-32v8h-24v8h-16v8h-16v8h-16v8h-16v8h-16v8h-8v8h-16v8h-8v8h-16v8h-16v8h-8v8h-8v8h-16v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v16h-16v8h-8v16h-8v8h-8v8h-8v8h144v8h24v-8h16v8h16v-8h32v-8h8v-24h8v-16h8v-24h8v-16h8v-16h8v-24h8v-8h8v-16h8v-16h8v-8h8v-16h8v-8h8v-16h8v-8h8v-8h8v-16h8v-16h-8zm400 0v8h-8v8h8v8h8v8h8v16h8v16h8v8h8v16h8v16h8v8h8v16h8v16h8v24h8v16h8v16h8v24h8v24h8v16h16v8h16v-8h32v8h16v-8h152v-16h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-16h-8v-8h-8v-8h-16v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-16v-8h-8v-8h-16v-8h-16v-8h-8v-8h-16v-8h-16v-8h-16v-8h-16v-8h-8v-8h-24v-8h-16v-8h-24v-8h-8zm-792 320v8h-8v8h-8v16h-8v24h-8v16h-8v24h-8v32h-8v24h-8v40h-8v32h-8v40h-8v32h24v8h264v-8h8v-8h8v-104h8v-64h8v-48h8v-56h8v-8h-8v-8h-240zm312 0v8h-8v16h-8v48h-8v64h-8v64h-8v96h16v8h152v-8h24v8h88v-8h8v-296h-248zm312 0v8h-8v288h24v8h160v-8h8v8h96v-8h8v-56h-8v-80h-8v-64h-8v-48h-8v-40h-8v-8h-248zm320 0v8h-8v24h8v56h8v64h8v112h8v32h32v8h40v-8h160v8h24v-8h8v8h16v-8h16v-40h-8v-48h-8v-40h-8v-24h-8v-32h-8v-24h-8v-24h-8v-16h-8v-24h-8v-16h-16v-8h-232zm-1024 352v8h-8v24h8v48h8v40h8v32h8v32h8v16h8v24h8v24h8v24h8v8h8v16h160v8h40v-8h56v-24h-8v-32h-8v-64h-8v-72h-8v-88h-8v-16h-288zm352 0v8h-8v16h8v88h8v64h8v56h8v48h8v16h200v8h32v-8h24v-8h8v-24h-8v-264h-288zm352 0v8h-8v288h32v8h56v-8h168v-8h8v-40h8v-48h8v-64h8v-64h8v-64h-8v-8h-280zm352 0v8h-8v72h-8v88h-8v56h-8v40h-8v32h168v8h16v-8h24v8h32v-8h8v-8h8v-16h8v-16h8v-24h8v-24h8v-16h8v-32h8v-24h8v-40h8v-40h8v-48h-8v-8h-280zm-928 352v8h-8v16h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h16v8h8v8h8v8h16v8h8v8h16v8h8v8h16v8h16v8h16v8h8v8h24v8h16v8h16v8h24v8h16v-16h-8v-8h-8v-8h-8v-16h-8v-8h-8v-8h-8v-16h-8v-16h-8v-16h-8v-16h-8v-16h-8v-16h-8v-16h-8v-16h-8v-24h-8v-24h-8v-24h-8v-8h-216zm280 0v24h8v16h8v24h8v16h8v16h8v16h8v16h8v8h8v16h8v16h8v8h8v16h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h16v8h16v8h24v8h8v-16h8v-16h-8v-264h-232zm296 0v8h-8v272h8v8h32v-8h8v-8h16v-8h16v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-16h8v-8h8v-8h8v-16h8v-8h8v-16h8v-16h8v-8h8v-24h8v-16h8v-16h8v-16h8v-24h8v-8h-8v-8h-224zm296 0v8h-8v16h-8v24h-8v24h-8v24h-8v16h-8v16h-8v16h-8v16h-8v16h-8v8h-8v16h-8v16h-8v8h-8v8h-8v16h-8v8h-8v8h40v-8h16v-8h16v-8h16v-8h16v-8h16v-8h16v-8h8v-8h16v-8h8v-8h16v-8h8v-8h16v-8h8v-8h8v-8h8v-8h16v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-16h8v-8h-16v-8h-208z"
          fill={inside["svg"] ? "rgb(14,173,152)" : light ? "#000102" : "#fff"}
        />
      </svg>
      {(inside.svg || inside["svg-box"] || inside.box) && (
        <div
          className="language--box"
          data-name="box"
          onMouseEnter={mouseEnterHandeler}
          onMouseLeave={mouseLeaveHandeler}
        >
          <ul className="language--box--ul1" data-name="box">
            <li data-name="box"> English </li>
            <li data-name="box"> Spanish </li>
            <li data-name="box"> Franch </li>
          </ul>
          <ul data-name="box" className="language--box--ul2">
            <li data-name="box"> Persian  </li>
            <li data-name="box"> Arabic  </li>
            <li data-name="box"> Russian  </li>
          </ul>
          <ul data-name="box" className="language--box--ul3">
            <li data-name="box"> Portuguese  </li>
            <li data-name="box"> Dutch  </li>
            <li data-name="box"> Polish </li>
          </ul>
        </div>
      )}
    </div>
  );
}
