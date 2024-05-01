import CoineTableElm from "./CoineTableElm/CoineTableElm";


import "./MarketCoines.css"



const filterData = (data)=>{
  console.log("Amin");
  let newData = []
  data.forEach(elem => {
    if (elem.symbol === "BTC"){
      newData[0] = elem;
      newData[0].noChartData = true;
    }  
    if (elem.symbol === "BNB"){
      newData[1] = elem;
      newData[1].noChartData = true
    }  
    if (elem.symbol === "CET"){
      newData [2] = elem;
      newData[2].noChartData = true
    }  
    if (elem.symbol === "ETH"){
      newData [3] = elem;
      newData[3].noChartData = true
    }  
    if (elem.symbol === "AVAX"){
      newData [4] = elem;
      newData[4].noChartData = true
    } 
    if (elem.symbol === "USDT"){
      newData [5] = elem;
      newData[5].noChartData = true
    } 
  });
  console.log(newData);
  
  return newData;

  // test
  // return data;
};


const MarketCoiines = ({coinData}) => {
  console.log(coinData);
  
  if(!coinData) return null;

  const newData = filterData(coinData);

  return (
    <table className="market--table">
      <thead>
        <tr className="market--table--headers" style={{fontWeight:"lighter",color:"GrayText"}}>
          <td>Coine</td>
          <td className="rightEnd">Price(USD)</td>
          <td className="rightEnd">24H Change</td>
          <td className="rightEnd market--header--cap">Market Cap</td>
          <td className="market--header--market" style={{textAlign:"center",paddingInlineStart:"25px"}}>Market</td>
        </tr>
      </thead>
      <tbody>
        {newData.map(data =>{
            return (
            
            <CoineTableElm
                key={data.symbol}
                coine={data.symbol}
                coineName={data.name}
                coineLogo={`./${data.symbol}.png`}
                change={data.price.USD.percent_change_24h.toString()}
                price={data.price.USD.price.toFixed(2)}
                cap={data.price.USD.fully_diluted_market_cap}
                labels={data.labels? data.labels : [0,10,20]}
                data={data.data?data.data:[20,18,25]}
                noChartData = {data.noChartData}
             />
             )
        })}
      </tbody>
    </table>
  );
};

export default MarketCoiines;





