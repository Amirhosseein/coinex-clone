import {useEffect, useState } from "react";

const resizeHandeler = (setSize) => {
  

  if(window.innerWidth >= 1200){
    setSize((pre)=>{
      if(pre === "desktop") return pre;
      return "desktop" ;
    })
  }else if( window.innerWidth < 1200 && window.innerWidth >= 500){
      setSize ((pre)=>{
        if(pre === "tablet") return pre;
        return "tablet";
      })
  }else{
    setSize((pre)=>{
      if(pre === "mobile") return pre;
      return "mobile";
    })
  }
};



const useScreenSize = () => {
  const [size, setSize] = useState(()=>{
    const width = window.innerWidth
    if(!width) return ""
    if(width >= 1200) return "desktop";
    if(width < 1200 && width >= 500) return "tablet";
    if(width < 500 ) return "mobile"
  });



  useEffect(() => {
    window.addEventListener("resize", ()=>resizeHandeler(setSize));

    return () => window.removeEventListener("resize", ()=>resizeHandeler(setSize));
  }, []);


  return size;
};

export default useScreenSize;
