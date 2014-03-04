

var Question = require('../schema');
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
		var que=[];
		var opt=[];
		var marks=[];
		var k=1;
		var Qid;
		var data;
		for(i=0;i<4;i++){
			!function syn(i){
				Qid=i+1;
				Question.getQuestion(Qid, function (err, question_data){
					if( !err ){
						opt.push(question_data[1]);
						opt.push(question_data[2]);
						opt.push(question_data[3]);
						opt.push(question_data[4]);
						marks.push(question_data[6]);
						que.push(question_data[0]);
						if(i==3){
							res.render('ques',{title: 'printf()',question:que, option:opt,marks:marks});
						}
					}	
					else{
							console.log('inside /retrive while getQuestion');
					}
				});
			}(i);
		}
	});

	app.post('/submission', function (req, res){



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