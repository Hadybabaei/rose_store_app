const { Categories } = require("../models/Categories")
const upload = require('../helper/upload')

module.exports = new (class categoriesController{

    async createCategories(req,res){

        try{
             upload(req,res,(err)=>{
                if (err){
                    console.log(err)
                }else{
                    const category = Categories.create({
                        name:req.body.name,
                        desc:req.body.desc,
                        thumbnail:{
                            data:req.file.filename,
                            contentType:req.file.mimetype
                        },
                    })
                    res.status(201).json({
                        message:'New Category Created',
                        Success:true,
                    })
                }
            })
        }catch(err){
            console.log(err)
        }
    }

    async getCategories(req,res){
        try{
            const categories = await Categories.find();
            res.status(200).json({
                categories,
                Success:true,
            })
        }catch(err){
            console.log(err)
        }

    }

    async updateCategory(req,res){
        try {
            const data = await Categories.findByIdAndUpdate(req.params.id, req.body);
            await data.save();
            res.json({
                message:"Category Updated Successfuly",
                data:data.name
            });
          } catch (error) {
            res.status(400).json({
                data:null,
                message:"Bad Request"
            })
          }
    }

    async destroyCategory(req,res){
        try {
            const data = await Categories.findByIdAndDelete(req.params.id);
            if (!data) res.status(404).send("No item found");
            res.status(200).send('Category Deleted Successfuly');
        } catch (error) {
            res.status(400).json({
                message:"Bad Request",
                data:null
            });
        }   
    }

})()