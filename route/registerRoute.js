const express = require("express")
const route = express.Router()

const {employee}=require("../controllers/employeeController")

route.get("/get",function(req,res){
    res.render("register")
});
route.post("/register",employee.insertEmployee); 
module.exports = route