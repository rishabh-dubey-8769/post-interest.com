const ImgKit=require('@imagekit/nodejs')
const imageKit=new ImgKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(buffer){
    const result=await imageKit.files.upload({
        file:buffer.toString("base64"),
        fileName:"image1.jpg"
    })
    return result
}


module.exports=uploadFile