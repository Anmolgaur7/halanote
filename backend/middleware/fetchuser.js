var jwt=require('jsonwebtoken')

const JWT_SECRET ='dattebayo@7';

const fetchuser=(req,res,next)=>{
const token = req.header('auth-token');   
if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" })
}
try 
{
const person=jwt.verify(token,JWT_SECRET)
req.user = person.user;
next();    
} 
catch (error) 
{
res.status(401).send({error:"please authenticate with a valid token 8"}) 
}
}
module.exports=fetchuser