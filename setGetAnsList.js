var ansList = require("./ansSchema.js");	
var redis =require("redis");
var db =redis.createClient();
//ques_no="0";
ques_ans="3";
ansList.setAnswers(db,ques_ans,function (err,data){
if(!err){
				console.log(data);
			}else{
				console.log("unsuccessful");
				console.log(err);
			}
});
/*
ansList.getAnswers("ans",function (err,data){
if(!err){
				console.log(data);
			}else{
				console.log(err);
			}
});
			
	*/
