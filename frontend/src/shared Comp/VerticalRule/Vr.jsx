
import './Vr.css';

const Vr = (props)=>{

    return <div  className={`vr ${props.className ? props.className : null}`} style={props.style ? props.style : null}>

    </div>
};

export default Vr;