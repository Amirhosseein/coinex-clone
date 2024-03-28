import CoineTableElm from "./CoineTableElm/CoineTableElm";
import { v4 as uuidv4 } from 'uuid';

import "./MarketCoines.css"

const DUMMY_DATA = [
  {
    coine: "BTC",
    coineName: "BitCoine",
    coineLogo: "./BTC.png",
    change: "+1%",
    price: "48,000",
    cap: "838.70B",
    labels:[0,10,20],
    data:[17,13,20]
  },
  {
    coine: "ETH",
    coineName: "Ethereum",
    coineLogo: "./ETH.png",
    change: "+0.64%",
    price: "2,320.43",
    cap: "278.22B",
    labels:[0,10,20],
    data:[10,18,25]
  },
  {
    coine: "CET",
    coineName: "CoinEx Token",
    coineLogo: "./CoinEx_logo.png",
    change: "-0.35%",
    price: "0.03142",
    cap: "90.99M",
    labels:[0,10,20],
    data:[20,18,12]
  }
];

const MarketCoiines = () => {
  return (
    <table className="market--table">
      <thead>
        <tr className="table--tr" style={{fontWeight:"lighter",color:"GrayText"}}>
          <td>Coine</td>
          <td className="rightEnd">Price(USD)</td>
          <td className="rightEnd">24H Change</td>
          <td className="rightEnd">Market Cap</td>
          <td style={{textAlign:"center",paddingInlineStart:"25px"}}>Market</td>
        </tr>
      </thead>
      <tbody>
        {DUMMY_DATA.map(data =>{
            return (
            
            <CoineTableElm
                key={uuidv4()}
                coine={data.coine}
                coineName={data.coineName}
                coineLogo={data.coineLogo}
                change={data.change}
                price={data.price}
                cap={data.cap}
                labels={data.labels}
                data={data.data}
             />
             )
        })}
      </tbody>
    </table>
  );
};

export default MarketCoiines;
