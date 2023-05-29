const Employee = require("../model/employeemodel");
const insertEmployee = async (req,res) => {
    try {
    const{name,email,password,age,contactNo}=req.body
       const employee = new Employee({
            name: name,
            email:email,
            password:password,
            age: age,
            contactNo:contactNo
        });


        await employee.save();
        return res.send("Registration has been successfull.")

    } catch (error) {
        res.send(error.message)
    }
}
module.exports={insertEmployee}  // curly braces is important otherwise it will throw an error      