import express from 'express';
import {createServer} from 'http';
const io = require('socket.io')(3001, {
    cors: { 
        origin:"http://localhost:3000",
        methods:['GET','POST'],
    },
})
const PORT = process.env.PORT || 3001
io = new Server(httpServer)
io.on("connection",socket => {
   socket.on('send-changes',delta =>{
    socket.broadcast.emit("receive-changes",delta)
    
   })
   console.log("connected")
})


const app = express();

if (proecess.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'));
}
const httpServer = createServer(app);
httpServer.listen(PORT);

