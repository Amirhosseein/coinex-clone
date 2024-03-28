import { createContext } from "react";

const ContextApi = createContext({
    scrollFromTop:false,
    coinAnimation:true,
    width: window?.innerWidth || null,
    hight: window?.innerHeight || null,
});

export default ContextApi;