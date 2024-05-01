import "./MoreService.css";
import { Link } from "react-router-dom";
import Vr from "../../shared Comp/VerticalRule/Vr";

const MoreService = () => {
  return (
    <div className="moreService--container moreService--container--light">
      <h1> More Services </h1>
      <div className="moreService--main--container">
        <div className="moreService--inner--container">
          <Link to="/ambassador">
            <img src="./ambassador.png" alt="ambassador" />
            <span>CoinEx Ambassador</span>
          </Link>
          <Link to="/partner">
            <img src="./partner.png" alt="partner" />
            <span>CoinEx Partner</span>
          </Link>
        </div>
        <Vr className="moreService--vr" style={{ height: "170px", borderColor: "#e0e3ed" }} />
        <div className="moreService--inner--container">
          <Link to="/marking">
            <img src="./marking.png" alt="marking" />
            <span>Market Makers</span>
          </Link>
          <Link to="/help">
            <img src="./help.png" alt="help" />
            <span>Help Center</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoreService;
