import {WebSocketServer} from "ws";
import { client } from "@repo/prisma/client"

const wss = new WebSocketServer({port:8080})

wss.on("connection",async function(ws){
    // common js and module js problem solution
    
    const response = await client.user.create({
        data:{
            username:"ws-server",
            password:"password"
        }
    })
    console.log(response)
    ws.send("websocket is running on port 8080")
})

