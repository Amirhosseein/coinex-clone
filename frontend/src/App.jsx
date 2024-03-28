import MainPage from "./MainPage/MainPage";
import ContextApi from "./contextAPI/ContextApi";
import NotFoundPage from "./404Page/404Page";
import Coin from "./Coin/Coin";

import "./App.css";
import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    
  },
  {
    path:"/coin/:coinId",
    element:<Coin />
  },
  {
    path:"*",
    element:<NotFoundPage />
  }
]);



function App() {
  const [scroll,setScroll] = useState({header:false,anime:true});
  const [screenSize,setScreenSize] = useState ({width:window?.innerWidth || null,hight:window?.innerHeight||null})

  const handleScroll = (e)=>{
    console.log("😀");
    console.log(window.scrollY);
    if(window.scrollY < 0.2){
      setScroll({header:false,anime:true});
    }else if(window.scrollY < 447 ){
      setScroll({header:true,anime:true});
    }else{
      setScroll({header:true,anime:false});
    }

  };
  
  const resizeHandler = ()=>{
    setScreenSize({
      width: window.innerWidth,
      hight:window.innerHeight
    });
  }


  useEffect(()=>{

    window.addEventListener('scroll', handleScroll);

     return ()=> window.removeEventListener('scroll', handleScroll);
  },[])

  useEffect(()=>{
    window.addEventListener('resize',resizeHandler);

    return ()=> window.removeEventListener('resize', resizeHandler);
  },[])

  
  return (
    <>
    <ContextApi.Provider value={{scrollFromTop:scroll.header,coinAnimation:scroll.anime,width:screenSize.width,hight:screenSize.hight}}>

    <RouterProvider router={router} />
      
      </ContextApi.Provider>
    </>
  );
}

export default App;
