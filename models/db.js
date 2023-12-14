const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://defipedotio:xeFDjseM4o1N03aP@cluster0.fflxjo8.mongodb.net/',{useNewUrlParser:true}).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
require('./blog.model')
