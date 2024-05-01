import RegisterBtn from "../../shared Comp/Buttons/RegisterBtn/RegisterBtn";
import "./Advertise.css";

const Advertise = () => {
  return (
    <>
      <div className="Advertise--container">
        <div>
          <h1 className="Advertise--h1">
            The Global Cryptocurrency Exchange
          </h1>
          <h4 className="color--pale Advertise--h3">
            Making Crypto Trading Easier
          </h4>
          <input
            className="Advertise--input Advertise--input--light"
            type="email"
            placeholder="Email Account"
          />
          <RegisterBtn className="Advertise--btn" />
        </div>
        <div className="decor--image--container" >
        <img  className="decorImage" src="./decor.png" alt="decor"/>
        </div>
      </div>
    </>
  );
};

export default Advertise;
