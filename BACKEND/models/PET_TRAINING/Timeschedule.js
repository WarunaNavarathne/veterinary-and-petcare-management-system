const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    const timeSchema = new Schema({

        Classname : {
            type:String,
            required: true

        },
        Group :{
            type:String,
            required: true
        },
        Day : {
            type:String,
            required: true
    
        },
        StartTime :{
            type:String,
            required: true
    
        },
        EndTime :{
            type:String,
            required: true
    
        },
        Trainer :{
            type:String,
            required: true
    
        },

        Location :{
            type:String,
            required: true
    
        }

     })
     const Scheduledetail = mongoose.model("Scheduledetail",timeSchema);
      module.exports =Scheduledetail;