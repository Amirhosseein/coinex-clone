import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import {Server} from "socket.io";

import coin from "./routes/coin.js";
import getData from "./functions/getLastcoinsData.js";

const app = express();
const port = process.env.PORT || 3000 ;
const serverOrigin = process.env.SERVER_ORIGIN || "http://localhost:5173" 
const httpServer = http.createServer(app);
const io = new Server(httpServer,{ cors: {
  origin: serverOrigin
}});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

io.on('connection', async(socket) => {
  console.log('user connected with ID: '+socket.id);

    let data = await getData();
    console.log(data);
    if(!data || !Array.isArray(data)) return;

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

  
  

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });


  

});
app.set("socket", io);

app.get("/", (req, res) => {

  res.json([{
    message: "my name is Amir",

  },{
    message:"this is first server code after a while"
  }]);
});


app.use("/api/coin",coin);





httpServer.listen(port,()=>{
  console.log(`****** Sever is Running on port ${port} *******`);
});






// AmirHossein Khakshouri Sani







  // socket.on("checkData", async(lastData)=>{

   
     
  //     const newData = await getData();
  //     console.log("done!");
  //     if(! Array.isArray(newData)) return;
      
  //     if(newData.length > 5 && Array.isArray(lastData)){
  //       const changeData = newData.filter((elm,index)=> elm.price.USD.price !== lastData[index].price.USD.price);

  //        console.log(changeData.length);
       
  //       if(changeData.length > 0){
  //         console.log(socket.id);
  //         io.to(socket.id).emit("changeData",newData);
  //       }else{
  //         console.log("no new answer");
  //         return;
  //       }
  //     }else{
  //       console.log("rest");
  //       const tryagin = (newData.length > 5 ) ? newData : await getData();
  //       io.to(socket.id).emit("changeData",tryagin);
  //     }
 
  // });
