var redis =require("redis");
var client =redis.createClient();
client.on("error",function(err) {
console.log("error is " + err);
});
 var qschema={
	title : 0,
	opt1:1,
	opt2:2,
	opt3:3,
	opt4:4,
	sol:5,
	score:6
};


module.exports.setQuestion = function(ques_no,title,opt1,opt2,opt3,opt4,sol,score,callback) {
	//if(!err) {

		var id="question:"+ques_no;
		client.rpush(id,title,function (err,data){
			client.rpush(id,opt1,function (err,data){
				client.rpush(id,opt2,function (err,data){
					client.rpush(id,opt3,function (err,data){
						client.rpush(id,opt4,function (err,data){
							client.rpush(id,sol,function (err,data){
								client.rpush(id,score,function (err,data){
									if(!err){
										
										console.log("successful!!");	
									}else{
										console.log(err);
									
									}

									

		});

		});

		});

		});

		});

		});

		});
		callback(null,ques_no);
//}
//else{callback(err,null);}
}



module.exports.getQuestion=function(ques_no,callback) {
var temp;
temp=("question:"+ques_no);
client.lrange(temp,0,-1,function(err,data){
//client.lindex(temp,qschema.title, function (err,data){ 
	if(!err){
		/*console.log("successful");*/
		callback(null,data);
		//console.log(data);

	}
	else{ callback(err,null);}
	//console.log(err);}
});
}




module.exports.check=function(quesno,answer,callback){

	var key = "question:"+quesno;
	client.lrange(key,5,5,function(err,data){
		if(!err){

			if(answer==data)
				console.log("correct");
			else console.log("incorrect");

			callback(null,data);
		}

		else callback(err,null);
	});
}