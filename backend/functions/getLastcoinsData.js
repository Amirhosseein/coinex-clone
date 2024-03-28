const getData = async () => {
    let data;
  
    try {
      const response = await fetch(
        process.env.COIN_API_ADDRESS +
          "/cryptocurrency/quotes/latest?symbol=BTC,ETH,USDT,BNB,CET,SOL,LINK,XRP,AVAX,ARB,ADA",
        {
          headers: {
            "X-CMC_PRO_API_KEY": process.env.COIN_API_KEY,
          },
        }
      );
      data = await response.json();
    } catch (erro) {
      return erro;
    }
  
    if(data.data){
      const cleanData = Object.keys(data.data).map((key) => {
        return {
          name: data["data"][key]["name"],
          symbol: data["data"][key]["symbol"],
          price: data["data"][key]["quote"],
        };
      });
    
      return cleanData;
    }
   
    return "error";
  };


  export default getData;