import epxress from "express";
import { client } from "@repo/prisma/client"



const app = epxress()
app.use(epxress.json())

app.get("/",function(req,res){
    res.json({
        msg:"this is home route"
    })
})

app.post("/signup", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    try {
        await client.user.create({
            data: {
                username,
                password
            }
        });
        res.json({
            msg: "User created successfully"
        });
    } catch (e) {
        console.log('Data is not reached to db', e);
        res.status(503).json({
            msg: "Something is wrong with db"
        });
    }
});

app.listen(8000,()=>{
    console.log("http-server is running on port 8000")
})
