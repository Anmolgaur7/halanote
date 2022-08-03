const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/halanote?readPreference=primary&directConnection=true&ssl=false"

const connecttomongo =()=>{
    mongoose.connect(uri, () => {
        console.log('connection done');
    })
}

module.exports=connecttomongo