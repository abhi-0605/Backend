const express=require('express')
const noteModel=require('./models/note.model')

const app=express();

// middle ware to receive data in req.body
app.use(express.json())

// note={
//     title: "my first note",
//     description: "this is desc for note 1"
// }



// POST/notes - create a note

app.post("/notes",async (req,res)=>{
    const data=req.body;
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message:"note created"
    })
})


// GET/notes - get all notes

app.get("/notes",async (req,res) => {
    const notes= await noteModel.find() // [{},{}] or  []
    //to find particular note
    // const notes= await noteModel.findOne({  // {} or null
    //     title:"title 3"
    // })
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})



// DELETE/notes:id - delete note

app.delete("/notes/:id",async (req,res) => {
    const id=req.params.id
    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message:"note deleted successfully"
    })
})



// PATCH/notes:id - update note

app.patch("/notes/:id", async(req,res) => {
    const id= req.params.id;
    const title= req.params.title
    const description=req.body.description

    await noteModel.findOneAndUpdate({
        _id: id
    },{
        description:description
    })

    res.status(200).json({
        message : "note updated successfully"
    })
})





module.exports=app;