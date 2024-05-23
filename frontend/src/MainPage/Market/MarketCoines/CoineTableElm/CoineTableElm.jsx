import LineChart from "../../../../shared Comp/Charts/LineChart";
import { useNavigate } from 'react-router-dom';
import "./CoineTableElm.css";
import { memo} from "react";




// eslint-disable-next-line react/prop-types
const CoineTableElm = memo(function CoineTableElm ({coine,change,coineLogo,coineName,price,cap,noChartData,labels,data}){

  

  const navigateTo = useNavigate();
  const rowHandelClick = ()=>{
    navigateTo(`/coin/${coine}`)
  }
  
  if(!change){
    return null;
  }


  return (
    <tr className="table--tr" onClick={rowHandelClick}>
     
      <td
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img
          className="table--image"
          src={coineLogo}
          alt={`${coine} Logo`}
        />
        <span
          className="table--image--text"
          style={{ marginLeft: "10px", fontWeight: "bold" }}
        >
          
          {coine}
        </span>
        <span
          className="table--image--text table--image--text--des"
          style={{ marginLeft: "6px", color: "GrayText", fontWeight: "normal" }}
        >
          {coineName}
        </span>
      </td>
      <td className="rightEnd">{price}</td>
      <td
        className="rightEnd"
        style={
         
          change.toString()?.charAt(0) === "-"
            ? { color: "#db5541" }
            : { color: "#0ead98" }
        }
      >
        {Number(change).toFixed(2)}%
      </td>
      <td className="rightEnd market--data--cap">{cap}</td>
      <td className="market--charts--table" style={{ textAlign: "center", paddingInlineStart: "25px" }}>
        
        {noChartData ? <span> no data </span> :<LineChart
          className="table--chart"
          labels={labels}
          data={data}
        />}
      </td>
    </tr>
  );
});

export default (CoineTableElm);
