const config = require('config');
const jwt = require('jsonwebtoken');
const { Users } = require('../models/Users');


async function isLoggined(req,res,next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]
    if (token){
        jwt.verify(token, config.get("jwt_key"),(err,user)=>{
            if (err) console.log(err)
            req.user = user
            console.log(req.user)
            next();
        });
    }else{
        res.sendStatus(403)
    }
}

  async function isAdmin(req,res,next){
    if(req.user.role == 'SuperAdMin') res.status(403).send('access denied');
    next();
  }
  
  module.exports = {
    isLoggined, isAdmin
  }
      

