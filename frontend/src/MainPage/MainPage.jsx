import Header from "../Header/Header";
import Advertise from "./Advertise/Advertise";
import MarketSummery from "./MarketSummery/MarketSummery";
import SlidImages from "./SlideImages/SlideImages";
import Market from "./Market/Market";
import Banner from "./greenBanner/Banner";
import Info from "./Info/Info";
import Guide from "./Guide/Guide";
import Blog from "./Blog/Blog";
import MoreService from "./MoreService/MoreService";
import Explore from "./Explore/Explore";
import Footer from "../Footer/Footer";
import MarketCoines from "./Market/MarketCoines/MarketCoines";

import './MainPage.css';

import { useEffect, useState } from "react";
import { socket } from "../socket/socket";


const MainPage = () => { 

  const [coinData,setCoinData] = useState(null);

  //get coin data from back-end
    
  useEffect(() => {
    fetch("http://localhost:3000/api/coin")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("fetch failed");
        }
      })
      .then((data) => {
        console.log(data);
        if (data.cause || data === "error") return;
        setCoinData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("done!");
    socket.on(
      "changeData",
      (data) => {
        let changeData = [];
        if (Array.isArray(coinData) && Array.isArray(data)) {
          changeData = data.filter(
            (elm, index) =>
              elm.price.USD.price !== coinData[index].price.USD.price
          );

          console.log(changeData);
        }

        if (changeData.length > 0) {
          setCoinData(data);
         
        }
      },
      []
    );
  });


  //get coin data from back-end



  return (
    <>
      <div className="white--green--color colorful--section">
        <Header />
      
        <Advertise />
        <MarketSummery initCoinData={coinData} />
       
        
      </div>

      <SlidImages />
      <Market >
          <MarketCoines coinData={coinData} />
      </Market>
      <Banner />
      <Info />
      <Guide />
      <Blog />
      <MoreService />
      <Explore />
      <Footer />
    </>
  );
};

export default MainPage;






























// this code create by AmirHossein Khakshouri Sani with 💙