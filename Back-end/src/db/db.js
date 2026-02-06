const mongoose=require('mongoose')
async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("My server is finally connected to DataBase.")
}
module.exports=connectDB