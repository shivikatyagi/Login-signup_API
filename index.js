const express=require('express');
const mongoose= require('mongoose');
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser');

const app=express();

// app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieParser());


app.get('/',function(req,res){
    res.status(200).send(`Welcome to login , sign-up api`);
});


const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
});

