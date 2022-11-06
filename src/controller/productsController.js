const { Product } = require("../models/Products")
const upload = require('../helper/upload')

module.exports = new (class productController{

    async createProduct(req,res){
        try{
            upload(req,res,(err)=>{
               if (err){
                   console.log(err)
               }else{
                   const product = Product.create({
                       category:req.body.category,
                       name:req.body.name,
                       desc:req.body.desc,
                       price:req.body.price,
                       thumbnail:{
                           data:req.file.filename,
                           contentType:req.file.mimetype
                       },
                   })
                   res.status(201).json({
                       message:'New Product Created',
                       Success:true,
                   })
               }
           })
       }catch(err){
           console.log(err)
       }
    }

    async getProducts(req,res){
        const products = await Product.find().populate('category');
        res.status(200).json({
            products,
            Success:true
        })
    }

    async getProductsById(req,res){
        try{
            const product = await Product.findById(req.params.id);
            if (product){
                res.json({
                    product,
                    Success:true
                })
            }else{
                res.status(404).json({
                    Message:"No Record Found",
                    Success:false
                })
            }
        }catch(e){
            console.log(e)
        }
    }

    async updateProduct(req,res){
        try {
            const data = await Product.findByIdAndUpdate(req.params.id, req.body);
            await data.save();
            res.json({
                message:"Product Updated Successfuly",
                data:data.name
            });
          } catch (error) {
            res.status(400).json({
                data:null,
                message:"Bad Request"
            })
          }
    }

    async destroyProduct(req,res){
        try {
            const data = await Product.findByIdAndDelete(req.params.id);
            if (!data) res.status(404).send("No item found");
            res.status(200).send('Product Deleted Successfuly');
        } catch (error) {
            res.status(400).json({
                message:"Bad Request",
                data:null
            });
        }   
    }
})