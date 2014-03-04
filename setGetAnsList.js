var ansList = require("./ansSchema.js");	
ques_no="1";
ques_ans="3";
ansList.setAnswers(ques_no,ques_ans,function (err,data){
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
