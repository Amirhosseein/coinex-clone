import { useEffect, useState } from "react";
import SocalMediaIcon from "../shared Comp/SVG/SocalMediaIcon/SocalMediaIcon";
import {Link} from "react-router-dom";
import "./Footer.css";

const Footer = () => {

  const date = new Date();

  const [time,setTime] = useState({
    hours:("0"+date.getHours()).slice(-2),
    minutes:("0"+date.getMinutes()).slice(-2),
    seconds:("0"+date.getSeconds()).slice(-2)
  });


  useEffect(()=>{
    const timer = setInterval(()=>{
    
      const newDate = new Date();
      setTime({
        hours:("0"+newDate.getHours()).slice(-2),
        minutes:("0"+newDate.getMinutes()).slice(-2),
        seconds:("0"+newDate.getSeconds()).slice(-2)
      })
    },1000)

    return () => clearInterval(timer)
  },[]);
  

  return (
    <>
      <div className="footer--main--container">
        <div className="footer--divs">
          <img style={{ width: "151px" }} src="./CoinEx_logo_Text.png" />
          <h3> Making Crypto Trading Easier </h3>
          <div className="footer--socalMedia--container">

            <Link href="http://www.amirhosseinkhakshori.ir/"> <SocalMediaIcon name="email" /> </Link>
            <Link href="http://www.amirhosseinkhakshori.ir/"> <SocalMediaIcon name="telegram" /> </Link>
            <Link href="http://www.amirhosseinkhakshori.ir/"> <SocalMediaIcon name="twitter" /> </Link>
            <Link href="http://www.amirhosseinkhakshori.ir/"> <SocalMediaIcon name="facebook" /> </Link>
            <Link href="http://www.amirhosseinkhakshori.ir/"> <SocalMediaIcon name="medium" /> </Link>
            <Link href="http://www.amirhosseinkhakshori.ir/"> <SocalMediaIcon name="reddit" /> </Link>
            <Link href="http://www.amirhosseinkhakshori.ir/">  <SocalMediaIcon name="instagram" /> </Link>
            <Link href="http://www.amirhosseinkhakshori.ir/"> <SocalMediaIcon name="youtube" /> </Link>
            <Link href="http://www.amirhosseinkhakshori.ir/"> <SocalMediaIcon name="discord" /> </Link>

          </div>
          <p> © 2017 - {date.getFullYear()} CoinEx Clone </p>
          <p> Created by AmirHossein Khakshouri Sani with 💙 </p>
        </div>
        <div className="footer--divs">
          <h3>About</h3>
          <Link href="/">About Us</Link>
          <Link href="/">Contact US</Link>
          <Link href="/">Join Us</Link>
          <Link href="/">Terms of Service </Link>
          <Link href="/">Privacy policy</Link>
          <Link href="/">Disclaimer</Link>
          <Link href="/">About CET</Link>
          <Link href="/">Asset Security</Link>
        </div>
        <div className="footer--divs footer--services">
          <h3> Services </h3>
          <div className="footer--divs--group">
            <Link href="/">CoinEx Market Maker</Link>
            <Link href="/">Referral Reward</Link>
          </div>
          <div className="footer--divs--group">
            <Link href="/">CoinEx Broker</Link>
            <Link href="/">Fees Standard</Link>
          </div>
          <div className="footer--divs--group">
            <Link href="/">CoinEx Ambassador</Link>
            <Link href="/">Apply for Token Listing</Link>
          </div>
          <div className="footer--divs--group">
            <Link href="/">CoinEx VIP</Link>
            <Link href="/">API File</Link>
          </div>
          <div className="footer--divs--group">
            <Link href="/">CoinEx Partner</Link>
            <Link href="/">BI Download</Link>
          </div>
          <div className="footer--divs--group">
            <Link href="/">Creator Program</Link>
            <Link href="/">Proof of Reserve</Link>
          </div>
          <div className="footer--divs--group">
            <Link href="/">Feed</Link>
            <Link href="/">Historical Market Data</Link>
          </div>
          <Link href="/">Blog</Link>
        </div>
        <div className="footer--divs footer--support">
          <h3>Support</h3>
          <Link href="/">Help Center</Link>
          <Link href="/">Announcements</Link>
          <Link href="/">Contact Support</Link>
          <Link href="/">ST Alert</Link>
          <Link href="/">Law Enforcement</Link>
          <Link href="/">Official Verification</Link>
        </div>
      </div>

      <div className="footer--green--banner">
        <p>
          {date.getFullYear()}-{("0" + date.getMonth()).slice(-2)}-
          {("0" + date.getDate()).slice(-2)} {time.hours}:
          {time.minutes}:{time.seconds}
        </p>
        <p>CoinEx Clone By Amir</p>
      </div>
    </>
  );
};

export default Footer;
