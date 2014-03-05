
/*
 * GET users listing.
 */

 var user_schema = {
 	set_name : "users" 
 };

 var scoreSchema = {
 	set_name : "scores",
 	lower_bound : 0,
 	upper_bound : -1,
 	withscores : "withscores" 
 };


/* to validate user password */
module.exports.check_password = function( db, user_name, user_password, callback){
	db.hget( user_schema.set_name, user_name, function ( err, password ){
		if( !err ){
			if( !password ){
				/*  user does not exists */
				callback( null, 0);
			}else{
				if( password == user_password){
					callback( null, 1 );
				}else{
					callback( null, 2);
				}
			}
		}else{
			consol.log('ERR TO FETCH DATA AT check_password');
			callback(1, null);
		}
	});
};

/* to get the rank list  */

module.exports.get_rank_list = function( db, callback){
	db.zrevrange( scoreSchema.set_name, scoreSchema.lower_bound, scoreSchema.upper_bound, withscores, function (err, rank_list){
		if( !err ){
			callback(null, rank_list);
		}else{
			console.log(" ERR AT get_rank_list INSIDE user.js");
			callback(1, null);
		}
	});
}