import "./RegisterBtn.css";

const RegisterBtn = (props) => {
  return (
    <button 
        className={`registerBtn ${props.className?props.className : null}`}
        style={props.style ? props.style : null}
        onClick={props.onClick ? props.onClick : null}>
      {props.innerHtml ? props.innerHtml : "Register Now"}
    </button>
  );
};

export default RegisterBtn;
