const express = require('express');
const connecttomongo = require('./db');

connecttomongo();
const app = express()
const port = 3000

app.use(express.json())

app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})