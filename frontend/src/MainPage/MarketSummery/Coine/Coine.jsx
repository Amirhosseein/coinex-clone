import { memo } from "react";
import Vr from "../../../shared Comp/VerticalRule/Vr";

import "./Coine.css";
const Coine = (props) => {
  return (
    <>
    <div className="hide--Anime" style={props.hide ? null : {opacity:0,top:"50%", zIndex:"-1" }}>
    <div style={{display:"flex",flexDirection:"row"}}>
      <img className="coine--image" src={props.ImgSrc} alt={props.ImgAlt} />
      <span style={{marginRight: "7px", marginTop: "1.5%",fontWeight:"bold" }}>
        {props.name}
      </span>
      <span style={(Number(props.change) >= 0)?{ marginTop: "1.5%",color:"rgb(14, 173, 152)" }:{marginTop: "1.5%",color:`rgb(219, 85, 65)` }}>
        {props.change}%
      </span>
      </div>
      <p className="coin--price">{props.value}</p>
      <p className="coin--price coin--price--under"> ≃ {props.valueUsd}  </p>
      
    </div>
    
    </>
  );
};

export default  Coine;




{/* <Coine
ImgSrc={"./"+data[0]["symbol"]+".png"}
ImgAlt={data[0]["name"]}
name={data[0]["symbol"]}
change={data[0]["price"]["USD"]["percent_change_24h"]}
value={data[0]["price"]["USD"]["price"]}
valueUsd="42961.67"
hide={set.group}
/>
<Coine
ImgSrc={"./"+data[1]["symbol"]+".png"}
ImgAlt={data[1]["name"]}
name={data[1]["symbol"]}
change={data[1]["price"]["USD"]["percent_change_24h"]}
value={data[1]["price"]["USD"]["price"]}
valueUsd="42961.67"
hide={!set.group}
/> */}