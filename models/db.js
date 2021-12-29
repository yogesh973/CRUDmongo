const mongoose =require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://127.0.0.1:27017/EmployeeDB',{ useNewUrlParser:true},(err)=>{
    if(!err) {console.log('Mongo db connection succeded')}
    else{console.log('Error in Db connection :' + err)}
})

require('./employee-model')
