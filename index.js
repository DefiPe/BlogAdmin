require('./models/db')
const express=require('express')
const mongoose=require('mongoose')
const blog=mongoose.model('blogs')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    
    res.render('admin')
})
app.post('/save',(req,res)=>{
    var x=new blog(req.body)
    x.save()
    .then((result)=>{
        console.log('data fetched')
        res.render('admin')
    })
    console.log(x)
})
app.listen(5001,(req,res)=>{
    console.log('server is online')
})