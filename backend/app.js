import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import {Server} from "socket.io";
import coin from "./routes/coin.js";
import { brodCast } from "./functions/brodCastLastinfo.js";

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
  

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });


});


brodCast(io);



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

   
     
 