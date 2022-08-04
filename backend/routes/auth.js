// dont get afraid mainly alltehse fuction are from various node is libraries so anmol if u are coming after a long time u have just to go through the documentation of the dependencies

const express = require('express');
const { body, validationResult } = require('express-validator')
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'dattebayo';

// Create a User using: POST "/api/auth/createuser and validating it useing express -validator
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // creating user and checking for errors
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10)
        const secpass = await bcrypt.hash(req.body.password, salt)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json(authtoken)
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        const pcompare = bcrypt.compare(password, user.password)
        if (!pcompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken })
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured");
    }
})
module.exports = router