var redis =require("redis");
var client =redis.createClient();
client.on("error",function(err) {
console.log("error is " + err);
});


module.exports.setAnswers = function(ansno,ans,callback) {
	var key=ans;
	var index=parseInt('ansno');
	client.lset(key,index,ans,function (err,data){
		if(!err){
			console.log("successful!!");
			callback(null,data);
		}else{
			callback(err,null);
		}
	});
}

module.exports.getAnswers = function(key,callback) {
	client.lrange(key,0,-1,function(err,data){
		if(!err){
			console.log("successful");
			callback(null,data);
		}
		else{ 
			callback(err,null);
		}
	});
}
