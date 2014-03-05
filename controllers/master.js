

var Question = require('../models/question');
var User = require('../models/user');
module.exports = function  ( app, db) {

	app.get('/', function ( req, res){
		/* send the request to the start of the application page */ 
		res.render('login', { title : 'login'});
	});

	/*  check the team_id credentials */

	app.post('/signin', function ( req, res){
		var team_id = req.param('user_name');
		var team_password = req.param('user_password');
		User.check_password( db, team_id, team_password, function ( err, result ){
			if( !err ){
				if( result == 1 ){
					/*  if everything is alright   */
					req.session.isLoggedIn = true;
					req.session.teamId = team_id;
					console.log('user ok! ' + req.session.isLoggedIn );
					res.redirect('/show_questions');
				}else if( result == 2){
					/*  if password is wrong       */
					res.render('login', { title : 'Wrong Password'} );
				}else{
					/*  if user does not exists    */
					res.render('login', { title : 'Wrong Team Id'} );
				}
			}else{
				console.log('ERR AT /signin WHILE CALLING check_password');
				res.redirect('/');
			}
		});
	});


	app.get('/show_questions', is_logged_in,function (req, res){
		
		var team_id = req.session.teamId;
		Question.retrieveQuestion(db, team_id, function(err, que, opt, marks){
			res.render('printf', {tid:team_id, question:que, marks:marks, option:opt});
		});
	});
		

	app.post('/submission', function (req, res){
				var opt1=req.param("answer1");
				console.log(opt1);
				res.redirect('/show_result');
	});

	app.get('/show_result', function (req, res){

	});

}


function is_logged_in(req, res, next) {

	// if user is authenticated in the session, carry on 
	if (req.session.isLoggedIn == true)
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}