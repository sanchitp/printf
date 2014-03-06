//var redis =require("redis");
//var client =redis.createClient();
//client.on("error",function(err) {
//console.log("error is " + err);
//});

var solutionSchma = {
	set_name : "solutions",
	lower_limit : 0,
	upper_limit : -1
};

var marksSchma = {
	set_name : "points",
	lower_limit : 0,
	upper_limit : -1
};

var scoresSchema = {
	set_name : "score",
	lower_limit : 0,
	upper_limit : -1
};


module.exports.setAnswers = function(db,answer,callback) {
	var key="ans";
	var index=parseInt('ansno');
	db.rpush(key,answer,function (err,data){
		if(!err){
			console.log("successful!!");
			callback(null,data);
		}else{
			callback(err,null);
		}
	});
}

module.exports.getAnswers = function( db, callback) {
	db.lrange( solutionSchma.set_name, solutionSchma.lower_limit, solutionSchma.upper_limit, function(err,data){
		if(!err){
			console.log("successful");
			callback(null,data);
		}
		else{ 
			callback(err,null);
		}
	});
}


module.exports.getMarks = function(db, callback) {
	db.lrange( marksSchma.set_name, marksSchma.lower_limit, marksSchma.upper_limit, function (err,data){
		if(!err){
			console.log("successful");
			callback(null,data);
		}
		else{ 
			callback(err,null);
		}
	});
}

module.exports.setResult = function(db,userId,score,callback){
	db.zadd(scoresSchema.set_name,score, userId ,function (err,userId){
		if(!err){
			callback(null,userId);
		}
		else{
			callback(err,null);
		}
	});
}