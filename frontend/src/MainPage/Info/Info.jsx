import "./Info.css";

const Info = () => {
  return (
    <div className="info--container">
      <div className="info--container--header">
        <h1> In CoinEx, Trade With Safety and Convenience </h1>
        <p>Delivering crypto trading services to 200+ countries and regions</p>
      </div>
      <div className="info--card--container">
        <div className="info--cards info--grid--team2 info--grid1">
          <div>
            <h2>Trade Crypto easily and simply</h2>
            <p>
              A one-stop blockchain asset platform with user-friendly features
              and convenient transactions.
            </p>
          </div>
          <img src="./trade_decor.png" alt="trade decor" />
        </div>
        <div className="info--cards info--grid--team1 info--grid2">
          <div>
            <h2>Smooth crypto services based on user experience</h2>
            <p>
              The gateway to the crypto world for all, providing multilingual
              support for global traders.
            </p>
          </div>
          <img src="global_decor.png" alt="global decor" />
        </div>
        <div className="info--cards info--grid--team1 info--grid3">
          <div>
            <h2>Shield Fund</h2>
            <p>
              CoinEx provides an additional level of reassurance on top of our
              robust security infrastructure - Shield Fund, going above and
              beyond to safeguard your assets.
            </p>
          </div>
          <img src="asset_decor.png" alt="Coins" />
        </div>
        <div className="info--cards info--grid--team2 info--grid4">
          <div>
            <h2>One step ahead in financial options</h2>
            <p>
              Dock, AMM, Financial Account, Pledging... There is always a
              service just for you.
            </p>
          </div>
          <img src="protect_decor.png" alt="protect decor" />
        </div>
      </div>
    </div>
  );
};

export default Info;
