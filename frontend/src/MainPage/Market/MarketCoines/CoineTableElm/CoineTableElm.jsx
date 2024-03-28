import LineChart from "../../../../shared Comp/Charts/LineChart";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./CoineTableElm.css";




const CoineTableElm = (props) => {

  const navigateTo = useNavigate();
  const rowHandelClick = ()=>{
    navigateTo(`/coin/${props.coine}`)
  }
  console.log(props.labels);

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
          src={props.coineLogo}
          alt={`${props.coine} Logo`}
        />
        <span
          className="table--image--text"
          style={{ marginLeft: "10px", fontWeight: "bold" }}
        >
          {" "}
          {props.coine}{" "}
        </span>
        <span
          className="table--image--text"
          style={{ marginLeft: "6px", color: "GrayText", fontWeight: "normal" }}
        >
          {" "}
          {props.coineName}{" "}
        </span>
      </td>
      <td className="rightEnd">{props.price}</td>
      <td
        className="rightEnd"
        style={
          props.change.charAt(0) === "-"
            ? { color: "#db5541" }
            : { color: "#0ead98" }
        }
      >
        {props.change}
      </td>
      <td className="rightEnd">{props.cap}</td>
      <td style={{ textAlign: "center", paddingInlineStart: "25px" }}>
        {" "}
        <LineChart
          className="table--chart"
          labels={props.labels}
          data={props.data}
        />{" "}
      </td>
    </tr>
  );
};

export default CoineTableElm;
