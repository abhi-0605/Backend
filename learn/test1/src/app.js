// create server
const express = require('express');
const app = express();

app.use(express.json()); //middleware




// note={
//     title: "my first note",
//     description: "this is desc for note 1"
// }

// const notes = [
//     {
//         title: "my first note",
//         description: "this is desc for note 1"
//     },
//     {
//         title: "my second note",
//         description: "this is desc for note 1"
//     }
// ]


const notes = []


// POST
app.post('/notes', (req, res) => {
    // console.log(req.body)
    notes.push(req.body);
    res.status(201).json({
        message: "node created successfully"
    })
})

// GET
app.get('/notes', (req,res) => {
    res.status(200).json({
        message: "notes fetched successfully",
        notes:notes
    })
})

// DELETE
app.delete('/notes/:index',(req,res) => {
    const index=req.params.index
    delete notes[index]
    res.status(200).json({
        message:"node deleted successfully"
    })
})

// PATCH
app.patch('/notes/:index',(req,res) => {
    const index=req.params.index;
    const description=req.body.description
    notes[index].description=description
    res.status(200).json({
        message:"note updated successfully"
    })
})

module.exports = app