const mongoose=require('mongoose')
const postSchema=new mongoose.Schema({
    image:String,
    caption:String,
},{
    // timestamps:true   // adds createdAt & updatedAt
})
const postModel=mongoose.model("allPosts",postSchema)

module.exports=postModel

