const express = require("express");
const app = express();
const PORT = 8080 || process.env.PORT
const sequelize = require("sequelize")



app.listen(PORT,()=>{
    console.log("server is listening");
})