import { useContext, useEffect } from "react";
import HeaderMenu from "../../contextAPI/HeaderMenu";
import ContextApi from "../../contextAPI/ContextApi";
import "./Slider.css";
import ListCopm from "../ListComp/ListComp";

const Slider = () => {
  const { open, setOpen } = useContext(HeaderMenu);
  const { width } = useContext(ContextApi);

  const spaceClickHandler = (e) => {
    const point = e.target.getAttribute("data-name") ?? "other";
    if (point === "other") {
      console.log("click");
      setOpen(false);
    }
  };

  useEffect(() => {
    console.log("🚙🚓");

    if (width > 1200) {
      setOpen(false);
    }
  }, [width, setOpen]);

  return (
    <div
      className={`slider--continer--space ${open ? null : "space--close"}`}
      onClick={spaceClickHandler}
    >
      <div
        className={`slider--continer  ${open ?  null :'display--none'}`}
        data-name="menu"
      >
        <div className={`slider--continer--middle  ${open ? null : 'display--none'}`}>
          {open && (
            <div className="slider--btns--container">
              <button className="slider--btns--singUp">Sing Up</button>
              <button className="slider--btns--logIn">Log In</button>
            </div>
          )}
          {open && (
            <ul className="slider--list--ul">
              <li>English</li>
              <li>Currency</li>
              <li>Dark Mode</li>
              <li>Download App</li>
            </ul>
          )}
        </div>

        <div className={`slider--continer--min  ${open ? null : 'display--none'}`}>
          {open && (
            <div className="slider--btns--container  slider--btns--container--min">
              <button className="slider--btns--singUp">Sing Up</button>
              <button className="slider--btns--logIn">Log In</button>
            </div>
          )}

          {open && (
            <ul className="slider--continer--min--ul" data-name="menu">
              <li data-name="menu">Flat</li>
              <li data-name="menu">Swap</li>
              <ListCopm
                title="Markets"
                data={["Market Overview", "Market Data", "Feed"]}
              />

              <ListCopm title="Exchange" data={["Spot", "Margin"]} />

              <ListCopm
                title="Futures"
                data={[
                  "Futures Market",
                  "Futures Overview",
                  "Contract Data",
                  "Market Info",
                ]}
              />

              <ListCopm
                title="Finance"
                data={["Financial", "AMM", "Strategy", "Loans"]}
              />

              <ListCopm
                title="Promotion"
                data={["Tradeboard 🔥", "Airdrop", "CoinEx Di"]}
              />

              <ListCopm
                title="More"
                data={[
                  "Ambassador",
                  "Broker",
                  "Newbie",
                  "Help",
                  "Announcements",
                ]}
              />

               <li>English</li>
               <li>Currency</li>
               <li>Download App</li>
              
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
