const express = require("express")
const app = express();
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/node",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("db connect");}).catch(()=>{console.log("error in connection");})

const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const employee=require("./controllers/employeeController")
app.set("view engine","pug")
app.set("views","./views")

    
app.listen(8088,function(){
    console.log("server is runnning.... on port no 8088");
});