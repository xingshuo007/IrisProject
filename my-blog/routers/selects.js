const express=require('express')
const router=express.Router()
const mysql=require('mysql')
const client=require('./connect')(mysql)
router.get('/',function(req,res){
	client.query('select * from article',function(err,result){
		if(err)throw err;
		res.render('blog',{
			num:result
		})
	})
})
module.exports=router