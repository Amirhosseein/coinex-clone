

import "./Coine.css";
const Coine = ({className='hide--Anime',style,show=true,ImgAlt,ImgSrc,name,change,value,valueUsd}) => {
  return (
    <>
    <div className={`${className} fix--width`} style={show ? null : {opacity:0,top:"50%", zIndex:"-1" }}>
    <div style={style ? {...style,display:"flex",flexDirection:"row"} : {display:"flex",flexDirection:"row"}}>
      <img className="coine--image" src={ImgSrc} alt={ImgAlt} />
      <span className=" coin--price--light" style={{marginRight: "7px", marginTop: "1.5%",fontWeight:"bold" }}>
        {name}
      </span>
      <span className={Number(change) > 0 ? 'coin--price--positive' : 'coin--price--negative'}>
        {change}%
      </span>
      </div>
      <p className="coin--price  coin--price--light">{value}</p>
      <p className="coin--price coin--price--under"> ≃ {valueUsd}  </p>
      
    </div>
    
    </>
  );
};

export default  Coine;

