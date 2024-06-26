import "./Explore.css"
import RegisterBtn from "../../shared Comp/Buttons/RegisterBtn/RegisterBtn";
import { memo } from "react";

const Explore = memo(function Explore(){
    return <div className="Explore--container">
        <h1>Explore the Crypto World with CoinEx </h1>
        <br/>
        <RegisterBtn style={{marginBottom:"25px"}} />
    </div>
});


export default Explore;