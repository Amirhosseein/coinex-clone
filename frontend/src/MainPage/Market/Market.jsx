import MarketCoines from "./MarketCoines/MarketCoines";
import "./Market.css";
import SerchInput from "../../shared Comp/SerchInput/SerchInput";
import { memo, useState } from "react";

const Market = ({children}) => {

  const submitHandeler = (value)=>{
    console.log(value);
  };

  return (
    <div className="market--container market--container--light">
      <div className="market--header--container">
        <h3 className="market--header"> MARKET TRENDS </h3>
        <SerchInput clssAdded="market--search--light" onSubmit={submitHandeler} />
      </div>
      <p style={{lineHeight:0,paddingBottom:"30px"}}> Crypto market leaderboard express </p>

      {/* <MarketCoines /> */}
      {children}
      <br />

      <div className="table--bottom">
        <div> <h1>868</h1> <p>Coins</p> </div>
        <div> <h1>1311</h1> <p>Markets</p> </div>
        <div> <h1>197.17M</h1> <p> 24H Value(USD) </p> </div>
        <div> <h1>8.41B</h1> <p> 30-Day Value(USD) </p> </div>
      </div>
    </div>
  );
};

export default (Market);
