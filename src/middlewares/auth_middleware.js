const config = require('config');
const jwt = require('jsonwebtoken');
const { Users } = require('../models/Users');


async function isLoggined(req,res,next){
    const token = req.header("x-auth-token");
    if(token){
        const decoded = jwt.verify(token, config.get("jwt_key"));
        const user = await Users.findById(decoded._id)
        console.log(user);
        req.user = user;
        next();
    }else{
        res.status(403).json({
            Message:"token Not found"
        })
    }
  }
  async function isAdmin(req,res,next){
    if(req.user.role == 'SuperAdMin') res.status(403).send('access denied');
    next();
  }
  
  module.exports = {
    isLoggined, isAdmin
  }
      

