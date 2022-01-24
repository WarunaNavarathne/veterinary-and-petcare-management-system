const express = require('express');
const employee = require('../../models/USER/employee');
const Employee = require('../../models/USER/employee');
const bcrypt = require('bcrypt')

const router = express.Router();

//Add new employee
router.post("/employee/save",(req,res)=>{
    let newEmployee = new Employee(req.body);
    newEmployee.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Employee added"
        });
    });
});

//Get employee details
router.get("/employee",(req,res)=>{
    Employee.find().exec((err,employees)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingEmployees: employees
        });
    });
});

//Update employee
router.put("/employee/update/:id",(req,res)=>{
    Employee.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        (err,employee)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated succesfully"
            });
        }
    );
});

//Delete employee
router.delete("/employee/delete/:id",(req,res)=>{
    Employee.findByIdAndRemove(req.params.id).exec((err,deletedEmployee)=>{
        if(err)
            return res.status(400).json({
                message:"Delete unsuccesful",err,
            });
         
        return res.json({
            message:"Delete succesful",deletedEmployee,
        });
    });
});

//Get a specific employee
router.get("/employee/:id",(req,res)=>{
    let empid = req.params.id;
    Employee.findById(empid,(err,employees)=>{
        if(err){
            return res.status(400).json({success:false,err})
        }
        return res.status(200).json({
            success:true,
            employee:employees
        });
    });
});



module.exports = router;