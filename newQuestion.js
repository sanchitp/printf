var que_model = require("./schema.js");					

var readline =require("readline");

var r1=readline.createInterface({
input: process.stdin,
output: process.stdout

});

r1.question("enter ques_no ",function(ques_no){
			r1.question("enter problem statement",function(title){
					r1.question("enter opt1",function(opt1){
						r1.question("enter opt 2",function(opt2){
								r1.question("enter opt3",function(opt3){
									r1.question("enter opt4",function(opt4){
										r1.question("enter correct option",function(correct_opt){
											r1.question("enter marks for this question",function(marks){

												que_model.setQuestion(ques_no,title,opt1,opt2,opt3,opt4,correct_opt,marks,function(err,data){
							if(!err) {
									console.log("question details set for question" + data);	
									}
										});



											});
										});
									});
								});

						});



					});



			});		



});
								



									
									
									
									
							
	