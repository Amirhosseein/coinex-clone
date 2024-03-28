import MarketCoines from "./MarketCoines/MarketCoines";
import "./Market.css";

const Market = () => {
  return (
    <div className="market--container">
      <div className="market--header--container">
        <h3 className="market--header"> MARKET TRENDS </h3>
        <input className="market--serch" placeholder=" Serch" />
      </div>
      <p style={{lineHeight:0,paddingBottom:"30px"}}>Crypto market leaderboard express</p>
      <MarketCoines />
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

export default Market;
