var quesDetail = require("./schema.js");					

var readline =require("readline");

var r1=readline.createInterface({
input: process.stdin,
output: process.stdout

});

	r1.question("enter question no",function(ques_no){


quesDetail.getQuestion(ques_no,function (err,data){
		if(!err){
				console.log(data.toString());
				var det=data.toString();
				
				
			}else{
				console.log(err);
			}
		});
		




	});

		