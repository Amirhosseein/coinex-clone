import { useEffect, useState } from "react";

const useScroll = () => {

  const [scroll, setScroll] = useState({ header: false, anime: true });

  const handleScroll = (e)=>{
  
    if(window.scrollY < 0.2){

      setScroll(pre =>{
        if(!pre.header && pre.anime) return pre;
        return {header:false,anime:true}});

    }else if(window.scrollY < 447 ){

      setScroll(pre =>{
        if(pre.header && pre.anime) return pre;
        return {header:true,anime:true};
      });

    }else{
      
      setScroll(pre =>{
        if(pre.header && !pre.anime) return pre;
        return {header:true,anime:false};
      });
    }

  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return scroll;
};


export default useScroll;