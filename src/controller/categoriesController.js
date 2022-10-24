const { Categories } = require("../models/Categories")
const upload = require('../helper/upload')

module.exports = new (class categoriesController{

    async createCategories(req,res){

        try{
             upload(req,res,(err)=>{
                if (err){
                    console.log(err)
                }else{
                    console.log(req.body)
                    // const category = Categories.create({
                    //     name:req.body.name,
                    //     desc:req.body.desc,
                    //     thumbnail:{
                    //         data:req.file.filename,
                    //         contentType:req.file.mimetype
                    //     },
                    // })
                    // res.status(201).json({
                    //     message:'New Category Created',
                    //     Success:true,
                    //     data:category
                    // })
                }
            })
        }catch(err){
            console.log(err)
        }
    }


})()