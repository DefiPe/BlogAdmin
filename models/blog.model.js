const mongoose=require ('mongoose');
const blogSchema= new mongoose.Schema({
    context:String,
    headline:String,
    image:String,
    editor:String,
    topic:String,
    keywords:String,
    description:String,
    blogBody:String
})


mongoose.model('blogs',blogSchema)