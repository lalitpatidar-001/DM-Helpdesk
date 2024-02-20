const express = require("express");
const app = express()
const mongoose = require("mongoose");
require("dotenv").config();




app.listen(5000,()=>{
    console.log("server is running on port 5000");
});