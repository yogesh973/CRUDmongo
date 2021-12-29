require('./models/db');

const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const employeeController=require('./Controllers/employeeCotroller')
var app=express();
app.use(bodyparser.urlencoded({ extended: true }))



// app.set('views',path.join(__dirname,'/views/'))
app.use(bodyparser.json())
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs',  handlebars: allowInsecurePrototypeAccess(Handlebars),defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');



app.use('/employee',employeeController)

app.listen(3300,()=>{
    console.log('express sever started at port :3300')
})

