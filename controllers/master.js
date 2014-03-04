var Question = require('C:/Users/SHRIPADKESHAO/printf/schema');

module.exports = function  ( app, db) {

	app.get('/', function ( req, res){
		res.render('front',{title:'Printf'});
	});


	app.post('/signin', function ( req, res){
		//  auth code
        
		res.redirect('show_questions');
	});


	app.get('/show_questions', function (req, res){
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