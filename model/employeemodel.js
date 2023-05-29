const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
            type:String,
            require:true
    },
     password:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    contactNo:{
        type:Number,
        require:true
    }
    
    
})
const Employee = new mongoose.model("Employee",employeeSchema); /// model is used for defining structure in this it contain collection name in quotes and schema name 
module.exports= {Employee}