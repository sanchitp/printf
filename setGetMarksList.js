//ques_no="0";
marks="3";

marksList.setAnswers(db,marks,function (err,data){
if(!err){
				console.log(data);
			}else{
				console.log("unsuccessful");
				console.log(err);
			}
});
/*
marksList.getAnswers("ans",function (err,data){
if(!err){
				console.log(data);
			}else{
				console.log(err);
			}
});
			
	*/
