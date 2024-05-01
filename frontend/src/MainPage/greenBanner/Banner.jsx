import { useEffect, useState } from "react";
import Vr from "../../shared Comp/VerticalRule/Vr";
import AppleIcon from "../../shared Comp/SVG/AppleIcon/AppleIcon";

import "./Banner.css";
import AndroidIcon from "../../shared Comp/SVG/AndroidIcon/AndroidIcon";
import GooglePlayIcon from "../../shared Comp/SVG/GooglePlayIcon/GooglePlayIcon";

let timer;

const Banner = () => {
  const [state, setState] = useState({
    state: 0,
    restTimer: false,
  });
  const tresh = 2;

  const timerFn = () => {
    console.log("timer");

    setState((pre) => {
      if (pre.state === tresh) return { ...pre, state: 0 };
      return { ...pre, state: pre.state + 1 };
    });
  };

  const changeState = (e) => {
    const newState = Number(e.target.getAttribute("data-state"));

    setState({ state: newState, restTimer: true });
  };

  const firstStyle = () => {
    if (state.state === 0) return { zIndex: 1 };
    if (state.state === 1) return { translate: "0px -550px" };
    if (state.state === 2) return { translate: "0px -1100px" };
  };

  const middelStyle = () => {
    if (state.state === 0) return { translate: "0px 550px" };
    if (state.state === 1) return { zIndex: 1 };
    if (state.state === 2) return { translate: "0px -550px" };
  };

  const lastStyle = () => {
    if (state.state === 0) return { translate: "0px 1100px" };
    if (state.state === 1) return { translate: "0px 550px" };
    if (state.state === 2) return { zIndex: 1 };
  };

  const firstTextStyle = () => {
    if (state.state === 0) return null;
    if (state.state === 1) return { translate: "0px -75px" };
    if (state.state === 2) return { translate: "0px -120px" };
  };

  const secondTextStyle = () => {
    if (state.state === 0) return { translate: "0px 75px" };
    if (state.state === 1) return null;
    if (state.state === 2) return { translate: "0px -75px" };
  };

  const thirdTextStyle = () => {
    if (state.state === 0) return { translate: "0px 120px" };
    if (state.state === 1) return { translate: "0px 75px" };
    if (state.state === 2) return null;
  };

  useEffect(() => {
    console.log(timer + " useEffect");

    if (state.restTimer) {
      timer && clearInterval(timer);
      timer = null;
      setState((pre) => ({ ...pre, restTimer: false }));
    } else {
      timer = setInterval(timerFn, 5000);
    }

    return () => clearInterval(timer);
  }, [state.restTimer]);

  return (
    <>
      <div className="banner--container">
        <div className="banner--1st--container">
          <div className="banner--link">
            {state.state === 0 && (
              <Vr style={{ borderColor: "#fff", borderWidth: "2px" }} />
            )}
            <p
              style={state.state === 0 ? { fontWeight: "bold" } : null}
              onClick={changeState}
              data-state={0}
            >
              Market
            </p>
          </div>
          <div className="banner--link">
            {state.state === 1 && (
              <Vr style={{ borderColor: "#fff", borderWidth: "2px" }} />
            )}
            <p
              style={state.state === 1 ? { fontWeight: "bold" } : null}
              onClick={changeState}
              data-state={1}
            >
              Transaction
            </p>
          </div>
          <div className="banner--link">
            {state.state === 2 && (
              <Vr style={{ borderColor: "#fff", borderWidth: "2px" }} />
            )}
            <p
              style={state.state === 2 ? { fontWeight: "bold" } : null}
              onClick={changeState}
              data-state={2}
            >
              Asset
            </p>
          </div>
        </div>
        <div className="banner--2nd--container">
          <h1 style={{ lineHeight: "0.7" }}>
            Compatible With Multiple Devices
          </h1>
          <p className="banner--under--text">
            Trade Cryptos, Anytime, Anywhere
          </p>
          <div className="banner--text--anime">
            <div
              className="banner--text--blocker"
              style={{ marginTop: "0px" }}
            ></div>

            <h3 className="banner--content--h3" style={firstTextStyle()}>
              Versatile Asset Collection with Comprehensive Coin Information
            </h3>

            <h3 className="banner--content--h3" style={secondTextStyle()}>
              Self-Developed Proprietary Trade-Matching Engine Supporting Up to
              10,000 TPS
            </h3>

            <h3 className="banner--content--h3" style={thirdTextStyle()}>
              PNL Analysis At a Glance, Deposit and Withdraw With Safety and
              Convenience
            </h3>

            <div className="banner--text--blocker"></div>
          </div>
          <div className="banner--downloadApps">
            <div className="banner--downloadApps--divs">
              <AppleIcon />
              <p>App Store</p>
            </div>
            <div className="banner--downloadApps--divs">
              <GooglePlayIcon />
              <p>Google Play</p>
            </div>
            <div className="banner--downloadApps--divs">
              <AndroidIcon />
              <p>Android APK</p>
            </div>
          </div>
          <div className="banner--qr">
            <img src="./qrcode.png" style={{ width: "90px", height: "90px" }} />
            <p>
              {" "}
              Navigate to{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                AmirHossein Khakshouri{" "}
              </span>{" "}
              website
            </p>
          </div>
        </div>
        <div className="banner--3rd--container">
          <div className="banner--img--blocker"></div>
          <div className="banner--img--contanier">
            <img src="./phone1.webp" style={firstStyle()} />
            <img src="./phone2.webp" style={middelStyle()} />
            <img
              className="banner--3rd--container--3rdImg"
              src="./phone3.webp"
              style={lastStyle()}
            />
          </div>
          <div className="banner--img--blocker"></div>
        </div>
      </div>

      {/* MOBILE VIWE */}

      <div className="banner--container--min">
        <div className="banner--header--min">
          <span className={state.state === 0 ? "banner--header--min--span--active" :null}
           onClick={changeState}
           data-state={0}
          > Market </span>
          <span className={state.state === 1 ? "banner--header--min--span--active" :null}
           onClick={changeState}
           data-state={1}
          > Transaction </span>
          <span className={state.state === 2 ? "banner--header--min--span--active" :null}
           onClick={changeState}
           data-state={2}
          > Asset </span>
        </div>
        <div className="banner--content--min">
          <div>
            <h3> Compatible With Multiple Devices </h3>
            <p> Trade Cryptos, Anytime, Anywhere </p>
          </div>

          <p> {(state.state === 0 )? "Versatile Asset Collection with Comprehensive Coin Information":(state.state === 1)?
           "Self-Developed Proprietary Trade-Matching Engine Supporting Up to 10,000 TPS":
            "PNL Analysis At a Glance, Deposit and Withdraw With Safety and Convenience"} </p>
        </div>
        <div className="banner--content--footer">
        <div className="banner--downloadApps">
            <div className="banner--downloadApps--divs">
              <AppleIcon />
              <p>App Store</p>
            </div>
            <div className="banner--downloadApps--divs">
              <GooglePlayIcon />
              <p>Google Play</p>
            </div>
          </div>
          <div className="banner--qr">
            <img src="./qrcode.png" style={{ width: "90px", height: "90px" }} />
            <p>
              {" "}
              Navigate to{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                AmirHossein Khakshouri{" "}
              </span>{" "}
              website
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
