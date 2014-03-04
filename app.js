
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();
var Question=require('./schema');





// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
var que=[];
var opt=[];
var k=1;
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/',function(req,res){

	var Qid;
var data;



	for(i=0;i<3;i++){
		!function syn(i){
			Qid=i+1;
			Question.getQuestion(Qid, function (err, question_data){
				if( !err ){
					opt.push(question_data[1]);
					opt.push(question_data[2]);
					opt.push(question_data[3]);
					opt.push(question_data[4]);
					que.push(question_data[0]);
					if(i==2){
						res.render('ques',{title: 'printf()',question:que, option:opt});
					}
				}	
				else{
						console.log('inside /retrive while getQuestion');
					}
			});
		}(i);
	}
});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
