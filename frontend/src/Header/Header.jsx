import {memo, useCallback, useState } from "react";
import Button from "../shared Comp/Buttons/Button/Button";
import WorldIconon from "../shared Comp/SVG/WorldIcon/WorldIcon";
import WindowComp from "../shared Comp/WindowComp/WindowComp";
import Vr from "../shared Comp/VerticalRule/Vr";
import "./Header.css";
import MatrixDots from "../shared Comp/SVG/MatrixDots/MatrixDots";
import Slider from "../shared Comp/Slider/Slider";
import HeaderMenu from "../contextAPI/HeaderMenu";
import useScroll from "../CustomHooks/useScroll.js";
import changeMode from "./functions/changeMode";
import Moon from "../shared Comp/SVG/Moon/Moon";
import DownloadIcon from "../shared Comp/SVG/DownlodIcon/DownloadIcon";

const Header = memo(function Header(){
  const { header:scrollFromTop } = useScroll();
  const [menuState,setMenuState] = useState(false);
  const [lightMood,setLightMood] = useState(true);

  const sliderHandeller = ()=>{
    setMenuState(pre => !pre);
  };


  const changeMoodHandeler = useCallback(()=>{
    setLightMood((preMode)=>{
      changeMode(!preMode);
      return !preMode;
    });
    
  },[]);

  return (
    <HeaderMenu.Provider value={{open:menuState,setOpen:setMenuState}}>
      <nav
        className="header"
        style={
          (scrollFromTop || menuState)
            ?  (lightMood) ? { backgroundColor: "#fff", boxShadow: "0 1px 5px #a6a8aa" } :{ backgroundColor: "#000", boxShadow: "0 1px 5px #a6a8aa" }
            : { backgroundColor: "transparent" }
        }
      >
        <ul>
          <li className="header--image">
            <img src="/CoinEx_logo_Text.png" alt="ConinEx Logo" />
          </li>
          <li>
            <WindowComp
              windowTitle={<MatrixDots light={lightMood} />}
              windowStyle={{ left: "-20px", width: "320px" }}
              windowData={[
                {
                  iconSrc: "./wallet.png",
                  header: "CoinEx Wallet",
                  text: "Decentralized Multi-Cryptocurrency Wallet",
                },
                {
                  iconSrc: "./wallet.png",
                  header: "CoinEx Block Explorer",
                  text: "Quick search chain data",
                },

                {
                  iconSrc: "./chain.png",
                  header: "CoinEx Smart Chain",
                  text: "Decentralized Public Chain Ecosystem",
                },
                {
                  iconSrc: "./CoinEx_logo.png",
                  header: "CoinEx Charty",
                  text: "Blockchain Public Welfare Charity",
                },
              ]}
            />
          </li>
          <div className="header--links--group">
          <li> Flat </li>
          <li>
            <WindowComp
              windowTitle="Markets"
              windowData={[
                {
                  iconSrc: "./markets.png",
                  header: "Market Overview",
                  text: "keep up with the lates crypto thrands",
                },
                {
                  iconSrc: "./markets-data.png",
                  header: "Mrket Data",
                  text: "capture market oppertunities",
                },
                {
                  iconSrc: "./market-info.png",
                  header: " Feed ",
                  text: "discover current trends",
                },
              ]}
            />
          </li>
          <li>
            <WindowComp
              windowTitle="Exchange"
              windowData={[
                {
                  iconSrc: "./swap.png",
                  header: "Swap",
                  text: "buy and sell crypto in a click",
                },
                {
                  iconSrc: "./exchange.png",
                  header: "Spot Trading",
                  text: "Simple trades of any crypto combinations",
                },
                {
                  iconSrc: "./exchange-margin.png",
                  header: "Margin Trading",
                  text: "Multiply profits with loans",
                },
                {
                  iconSrc: "./strategy.png",
                  header: "Strategic Trading",
                  text: "Smart trading tools",
                },
              ]}
            />
          </li>
          <li>
            <WindowComp
              windowTitle="Futures"
              windowData={[
                {
                  iconSrc: "./futures.png",
                  header: "Futures Markets",
                  text: "Eran two-way profiting ",
                },
                {
                  iconSrc: "./futures-topic.png",
                  header: "Futures Overview",
                  text: "Learn about CoinEx futures",
                },
                {
                  iconSrc: "./futures-data.png",
                  header: "Contaract Data",
                  text: "Market updates all at a glancess",
                },
                {
                  iconSrc: "./futures-market-info.png",
                  header: "Market Info",
                  text: "more contarct information",
                },
              ]}
            />
          </li>
          <li>
            <WindowComp
              windowTitle={"Finace"}
              windowStyle={{ width: "330px" }}
              windowData={[
                {
                  iconSrc: "./financial.png",
                  header: "Financial",
                  text: "Earn compound interest with idle assets",
                },
                {
                  iconSrc: "./amm.png",
                  header: "AMM",
                  text: "Enjoy 50% trading fee incomes",
                },
                {
                  iconSrc: "./loans.png",
                  header: "Loans",
                  text: "Instant arrival, borrow and repay at anytime",
                },
              ]}
            />
          </li>
          <li>
            <WindowComp
              windowTitle={"Promotion"}
              windowStyle={{ width: "330px" }}
              windowData={[
                {
                  iconSrc: "./trade-rank.png",
                  header: "Tradeborad 🔥",
                  text: "Join the ranks and win mega rewards",
                },
                {
                  iconSrc: "./airdrop.png",
                  header: "AirDrop Station",
                  text: "Earn free cryptos via learning",
                },
                {
                  iconSrc: "./dibs.png",
                  header: "CoinEx Dibs",
                  text: "Discover exclusive discounts and crypto gems",
                },
              ]}
            />
          </li>
          <li>
            <WindowComp
              windowTitle={"More"}
              windowStyle={{ width: "330px" }}
              windowData={[
                {
                  iconSrc: "./refer.png",
                  header: "Referral",
                  text: "Receive up to 40% referral rewards",
                },
                {
                  iconSrc: "./ambassador-menu.png",
                  header: "Ambassador",
                  text: "Partners in promoting CoinEx",
                },
                {
                  iconSrc: "./marking.png",
                  header: "CoinEx VIP",
                  text: "Enjoy an array of exclusive VIP privileges",
                },
                {
                  iconSrc: "./broker.png",
                  header: "Broker",
                  text: "Earn competitive rebates",
                },
                {
                  iconSrc: "./help-menu.png",
                  header: "Help",
                  text: "Answers to all your questions",
                },
                {
                  iconSrc: "./announcements.png",
                  header: "Announcements",
                  text: "Check out the latest notices",
                },
              ]}
            />
          </li>
          </div>
        </ul>
        <ul className="header--right">
          <div className="header--right--container--max">
            <li>
              <WorldIconon light={lightMood} />
            </li>
            <Vr />
            <li onClick={changeMoodHandeler}>
              <Moon light={lightMood} />
            </li>
            <li>
              <DownloadIcon light={lightMood} />
            </li>
            <Vr />
            <li>
              <Button className="sing-up"> Sing Up </Button>
            </li>
            <li>
              <Button className="log-in"> Log In </Button>
            </li>
          </div>
          <div className="header--right--container--middle">

              <div className={`lines--container ${menuState ? 'lines--container--active':null } `} onClick={sliderHandeller}>

                <span></span>
                <span style={{width:"22px"}}></span>
                <span style={{width:"18px"}} ></span>

              </div>

              <img style={{width:"35px"}} src="./userIcon.png"  alt="User Icon" />

              <Slider lightMood={lightMood} changeMoodHandeler={changeMoodHandeler} />

          </div>
        </ul>
      </nav>
    </HeaderMenu.Provider>
  );
});

export default Header;

//  windowTitle,
//   className,
//   tiltleStyle,
//   windowStyle,
//   windowData,
