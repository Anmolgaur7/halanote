const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Notes = require('../models/Notes')
const { body, validationResult } = require('express-validator')

// this endpoint is used to fetch the notes of user by their id it wi;; check at Notes model in our database
router.get('/fetchnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured");
    }
})
// this endpoint is used to add notes to tha data ae here data is taken as a post request then is is ppplaced as a note is other collection in our data abase it saves data of user by taking the user id as a foreign key.
router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 characters').isLength({ min: 1 }),
], async (req, res) => {
    try {
        // here destructring is done agaisnt the body of the req here reeq will be agaisnt the auth-token 
        const { title, description, tag } = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const snote = await note.save()
        res.json(snote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured");
    }

})
// now this endpoint is used to update an exsisting note
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    // hre just destructring is done via req and then a new empty object is created along it
    const { title, description, tag } = req.body
    try {
        const newnote = {}
        if (title) { newnote.title = title }
        if (description) { newnote.description = description }
        if (tag) { newnote.tag = tag }
    
        // here note is checked wether is is present or not
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }
        // here checking for user is done
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        // now here notes is addd to note in the database
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true })
        res.json({ note });    
    } catch (error) {
    res.json({error})  
    }
    
    
})
// now this endpoint is to delete an existing note 
router.delete('/deletenote/:id',fetchuser,async(req,res)=>{
    // here note is checked wether is is present or not
    let note = await Notes.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") }
    // here checking for user is done
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
    }
    // now here notes is delted from the database
    note = await Notes.findByIdAndDelete(req.params.id)
    res.send("successfully deleted")
})
module.exports = router