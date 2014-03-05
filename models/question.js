
var Question = require('../schema.js');

var questionSchema = {
	set_name : "question:",
	question_statement_index : 0,
	question_option_1 : 1,
	question_option_2 : 2,
	question_option_3 : 3,
	question_option_4 : 4
};

var totalQSchema = {
	set_name : 'total_question_count'
};


module.exports.retrieveQuestion = function(db,team_id, callback){
	var que=[];
	var opt=[];
	var marks=[];
	var Qid;
	get_total_questions( db, function (err, total_question_count){
		if( !err ){
			for(i=0;i< total_question_count;i++){
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
							
							if(i==total_question_count-1){
								callback(null, que, opt, marks);
							}
						}	
						else{
								callback(1, null, null, null);
								console.log('inside /retrive while getQuestion');
						}
					});
				}(i);
			}		
		}else{

		}
	});	


	
}


function get_total_questions( db,callback){
	db.get( totalQSchema.set_name, function (err, result){
		if( !err ){
			callback( null , result);
		}else{
			console.log('ERR AT question.js INSIDE get_total_questions');
			callback( 1, null);
		}
	});
};

module.exports.get_total_questions = get_total_questions;
