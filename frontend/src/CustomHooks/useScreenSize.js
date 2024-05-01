import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [size, setSize] = useState({desktop:false,tablet:false,mobile:false});

  const resizeHandeler = () => {
    if(window.innerWidth >= 1200){
      setSize((pre)=>{
        if(pre.desktop) return pre;
        return {desktop:true,mobile:false,tablet:false};
      })
    }else if( window.innerWidth < 1200 && window.innerWidth >= 500){
        setSize ((pre)=>{
          if(pre.tablet) return pre;
          return {desktop:false,mobile:false,tablet:true};
        })
    }else{
      setSize((pre)=>{
        if(pre.mobile) return pre;
        return {desktop:false,mobile:true,tablet:false};
      })
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandeler);

    return () => window.removeEventListener("resize", resizeHandeler);
  }, []);


  return size;
};

export default useScreenSize;
