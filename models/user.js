
/*
 * GET users listing.
 */

 var user_schema = {
 	set_name : "users" 
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
		}
	});
};