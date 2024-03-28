import {useParams} from "react-router-dom";

const Coin = ()=>{
    const { coinId } = useParams();

    if(!coinId){
        return <p>Error</p>
    }
    return (
        <div>
            {coinId}
        </div>
    );
}

export default Coin;