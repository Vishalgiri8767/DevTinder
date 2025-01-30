const express = require("express");

const app = express();

app.use("/", (req,res)=>{
    res.send("Hii from the server...");
})

app.use("/test", (req,res)=>{
    res.send("Test endpoint ");
})

app.listen(3000, ()=>{
    console.log("server running successfully on port 3000");

});