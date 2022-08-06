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
    body('description', 'description must be atleast 5 characters').isLength({ min:1 }),
], async (req, res) => {
    try {
    // here destructring is done agaisnt the body of the req here reeq will be agaisnt the auth-token 
        const {title,description,tag}=req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note=new Notes({
            title,description,tag,user:req.user.id
        })
        const snote=await note.save()
       res.json(snote)   
    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured");  
    }
   
})
module.exports = router