const mongoose=require('mongoose');
var employeeSchema=new mongoose.Schema({
    name:{
        type:String,
       
    },
    company:{
        type:String,
    },
    state:{
        type:String,
    },
    age:{
        type:Number,
    },
   
});

mongoose.model('Employee',employeeSchema);