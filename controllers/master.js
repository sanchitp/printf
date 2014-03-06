

var Question = require('../models/question');
var User = require('../models/user');
var Evaluate = require('../models/evaluation'); 
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


	app.get('/show_questions',is_logged_in ,function (req, res){
		
		var team_id = req.session.teamId;
		Question.retrieveQuestion(db, team_id, function(err, que, opt, marks){
			res.render('printf', {tid:team_id, question:que, marks:marks, option:opt});
		});
	});
		

	app.post('/submission', function (req, res) {
		var user_score=0;
		var team_id = req.session.teamId;
		var answer = [];
		Question.get_total_questions (db, function (err,result){
			for(var i=0;i<result;i++){
				answer.push(req.param('que'+ (i+1)));
				if(i==result-1){
					Evaluate.getMarks(db,function (err,marks){
						Evaluate.getAnswers(db,function (err,correct_answers){
							for(i=0;i<result;i++){
								if(answer[i]==correct_answers[i]) user_score= parseInt(user_score) + parseInt(marks[i]);
								if(i==result-1) Evaluate.setResult(db, team_id, user_score, function(err , data) {
									if(!err){
										res.redirect('/show_result');
									}
								});
							}
															
						});
					});
				}
			}
		});
	});


	app.get('/show_result', function (req, res){
		res.render('result');
	});

}



function is_logged_in (req, res, next) {

	// if user is authenticated in the session, carry on 
	if (req.session.isLoggedIn == true)
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}




/*if(!err){
								for(i=0;i<4;i++){
									!function syn(i){
										if(answer[i]==correct_answers[i]){
												user_score=user_score+marks[i];
										}
										if( i == 3 ){
											Evaluate.setResult(db,team_id,user_score,function (err,data){
												if(!err){
													console.log("Score of"+data+"is stored");
												}
												else{
													console.log(err);
												}
											});
											res.redirect('/show_result');	
										} 	
									}(i);	
								}
								
							}*/