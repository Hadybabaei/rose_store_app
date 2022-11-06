const { Users } = require("../models/Users")

module.exports = new (class usersController{

    async userUpdate(req,res){
        try{
            const user = await Users.findByIdAndUpdate(req.params.id,req.body)
            await user.save()
            res.status(200).json({
                Message:"User Modified",
                Success:true
            })
        }catch{
            res.status(404).json({
                Message:"User Not Found",
                Success:false
            })
        }
    }

    async userDestroy(req,res){
        try {
            const data = await Users.findByIdAndDelete(req.params.id);
            if (!data) res.status(404).send("No Users found");
            res.status(200).send('User Deleted Successfuly');
        } catch (error) {
            res.status(400).json({
                message:"Bad Request",
                Success:false
            });
        }   
    }
    
})()