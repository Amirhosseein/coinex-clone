import getData from "./getLastcoinsData.js";

export async function brodCast(io){
    try{
        let data = await getData();
        console.log(data);
        if(!data || !Array.isArray(data)) throw new Error("request failed");
    
        setInterval(()=>{
          const checkData = async()=>{
            const newData = await getData();
            if(!newData || !Array.isArray(newData)) return;
            if(JSON.stringify(newData).split("").sort().join("") !== JSON.stringify(data).split("").sort().join("")){
              data = newData;
              console.log("👍data changed👍");
              io.emit("changeData",newData);
              
            }else{
              console.log("*** no change ***");
            }
        
          }
    
          checkData();
        },10000)
    }catch(e){
        console.log(e);
    }
   

}