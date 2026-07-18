const {ImageKit } =require('@imagekit/nodejs');



const ImageKitClient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadFile(file){
    const result=await ImageKitClient.files.upload({
        file:file,
        fileName:"music_"+Date.now(),
        folder:"backend/learn/test5/music"

    })
    return result;
}

module.exports={uploadFile}