module.exports.setMarks = function(db,marks,callback) {
	var key="marks";
	
	db.rpush(key,marks,function (err,data){
		if(!err){
			console.log("successful!!");
			callback(null,data);
		}else{
			callback(err,null);
		}
	});
}

