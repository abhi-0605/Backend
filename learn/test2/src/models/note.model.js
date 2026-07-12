const mongoose=require('mongoose');

//define schema 
const noteSchema=new mongoose.Schema({
    title: String,
    description:String,
})


//to perform CRUD operation create note model
const noteModel=mongoose.model("note",noteSchema)


module.exports=noteModel
// note={
//     title: "my first note",
//     description: "this is desc for note 1"
// }
