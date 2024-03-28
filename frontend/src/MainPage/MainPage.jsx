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
import { socket } from "../socket/socket";

import './MainPage.css';
import Explore from "./Explore/Explore";
import Footer from "../Footer/Footer";
import { useEffect } from "react";


const MainPage = () => { 

  //test 
    

  //test



  return (
    <>
      <div className="white--green--color">
        <Header />
      
        <Advertise />
        <MarketSummery />
       
        
      </div>

      <SlidImages />
      <Market />
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
