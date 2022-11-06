const { Articles } = require("../models/Articles");
const upload = require('../helper/upload')
const slug = require('slug')

module.exports = new (class articlesController{

    async getArticles(req,res){
        try{
            const articles = await Articles.find();
            res.status(200).json({
                articles,
                Success:true,
            })
        }catch(err){
            console.log(err)
        }
    }

    async createArticles(req,res){
        try{
            const valCon = await Articles.findOne({title:req.body.title});
            if (!valCon){
                upload(req,res,(err)=>{
                    if (err){
                        console.log(err)
                    }else{
                        const articles = Articles.create({
                            category:req.body.category,
                            title:req.body.title,
                            slug:slug(req.body.title),
                            desc:req.body.desc,
                            tags:req.body.tags,
                            thumbnail:{
                                data:req.file.filename,
                                contentType:req.file.mimetype
                            },
                        })      
                        res.status(201).json({
                            message:`Article ${req.body.title} created`
                        })
                    }
                })
            }else{
                res.status(400).json({
                    data:null,
                    message:'Title Already Exists'
                })
            }
        }catch(e){
            console.log(e)
        }
    }

    async getArticlesById(req,res){
        try{
            const article = await Articles.findById(req.params.id);
            if (article){
                res.json({
                    article,
                    Success:true
                })
            }else{
                res.status(404).json({
                    Message:"No Article Found",
                    Success:false
                })
            }
        }catch(e){
            console.log(e)
        }
    }

    async commentCreate(req,res){
        try{
            const articlesComments = await Articles.findById(req.params.id)
            if (articlesComments){
                await articlesComments.updateOne({$push:{comments:req.body.comment}})
                res.status(201).json({
                    Message:"New Comment Inserted",
                    Success:true
                })
            }
        }catch(e){
            console.log(e)
        }
    }

    async updateArticles(req,res){
        try{
            const article = await Articles.findByIdAndUpdate(req.params.id.req.body)
            await article.save();
            res.status(200).json({
                Message:"Article Modified",
                Success:true
            })
        }catch{
            res.status(404).json({
                Message:"Article Not Found"
            })
        }
    }

    async destroyArticles(req,res){
        try {
            const data = await Articles.findByIdAndDelete(req.params.id);
            if (!data) res.status(404).send("No Article found");
            res.status(200).send('Article Deleted Successfuly');
        } catch{
            res.status(400).json({
                message:"Bad Request",
                Success:false
            });
        }  
    }

})()