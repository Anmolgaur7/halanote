const express = require('express');
const connecttomongo = require('./db');
var cors = require('cors')
// connected to our database using code in db.js and moongoose
connecttomongo();
const app = express()
const port = 5000
// intead of keeping all routes here i created a seperate route  folder and used it as a package to  ensure the coed maintaninance 
app.use(express.json())
app.use(cors())
app.use('/api/auth', require('./routes/auth'));
app.use('/api/note', require('./routes/notes'));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})