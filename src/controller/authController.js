const { Users } = require("../models/Users")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')


module.exports = new (class authController{

    async register(req,res){
        try{
            let user = await Users.findOne({email:req.body.email})
            if (user){
                return res.status(400).json({
                    Success:false,
                    message:'User Already Exist',
                })
            }
            if (req.body.password === req.body.confirmPassword){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
                user = await Users.create({
                    name:req.body.name,
                    lastname:req.body.lastname,
                    email:req.body.email,
                    phone:req.body.phone,
                    password:req.body.password,
                })
                return res.status(301).json({
                    message:`new user ${user.name} created`
                })
            }else{
                return res.status(400).json({
                    data:null,
                    message:'Password field and Confirm-password doesnt match',
                })
            }
        }catch(e){
            console.log(e)
        }
    }

    async login(req,res){
        const user = await Users.findOne({email:req.body.email})
        if (!user){
         return res.status(400).json({
             message:'Email or Password Wrong!'
         })
        }
        const isValid = await bcrypt.compare(req.body.password, user.password);
        if (!isValid){
         return res.status(400).json({
             message:'Email or Password Wrong!'
         })
        }
        const token = jwt.sign({ _id: user.id }, config.get("jwt_key"));
        return res.json({
         message:`Welcome ${user.name}`,
         token
        })
     }
})