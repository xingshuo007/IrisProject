const express=require('express')
const router=express.Router()
const mysql=require('mysql')
const client=require('./connect.js')(mysql)
router.post('/details',function(req,res){
	client.query('select * from article where NO=?',[req.body.NO],function(err,result){
		if(err)throw err;
		res.send(result)
		//console.log(result)
		//res.render('detail',result)
	})
	
})
module.exports=router