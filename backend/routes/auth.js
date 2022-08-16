// dont get afraid mainly all these function are from various node libraries so anmol if u are coming after a long time u have just to go through the documentation of the dependencies

const express = require('express');
const { body, validationResult } = require('express-validator')
const router = express.Router();
// Ther are two user variable elow one user and another one is User here User is model while useris the entity created in that model
const User = require('../models/User')
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = 'dattebayo@7';

// Create a User using: POST "/api/auth/createuser and validating it useing express -validator
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
// these all functions are from express validator
 let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // creating user and checking for errors
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            success=false
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        // here password is converted into hash passowrd by bcrypt
        const salt = await bcrypt.genSalt(10)
        const secpass = await bcrypt.hash(req.body.password,salt)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass,
        })
        data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        success=true
        res.json({success,authtoken})
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured");
    }
})

// if someone will hit my  at this endpoint then the async function below will run  here i am  matching the the enterd credential of the user with the enteed credential and if the credential  matches  giving them an auth token usin JWT

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({email});
        if (!user) {
            success=false;
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        const pcompare = bcrypt.compare(password, user.password)
        if (!pcompare) {
            success=false;
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        success=true;
        res.json({success,authtoken })
        console.log(authtoken);
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured");
    }
})
// now creating an endpoint for retreiving the data of the user named get user
router.post('/getuser',fetchuser, async (req, res) => {
    // here finding  the user whic has hitted the endpoint with his login id
    try {
       let userId = req.user.id;
        // finding the id by user id in the data base
        const user = await User.findById(userId).select("-password")
        if (!user) 
        {
            return res.status(400).json({ error: "user not present" }); 
        }
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.delete('/deleteuser',fetchuser,async(req,res)=>{
    try {
        let userId = req.user.id;
        user= await User.findByIdAndDelete(userId)
        res.status(200).send('Successfully deleted')    
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error"); 
    }
    
})
module.exports = router

// at last router function is exported
