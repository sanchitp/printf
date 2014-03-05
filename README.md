printf
======

schema:
---------------------------------------------------------------------------------------------------------

1)  name = total_question_count;
	type = string ( i.e. is simple set get variable );

2)  name = question:id ( where id = 0 to total_question_count-1 );
	type = list;
	feilds :
	=====================================================================

		question:id[0] =  question statement;
		question:id[1] =  opt1;
		question:id[2] =  opt2;
		question:id[3] =  opt3;
		question:id[4] =  opt4;

3)  name = solutions
	type = list
	feilds :
	=====================================================================
		
		solutions[0] = index of solution of question:0
													 |
													 |
													 |--> id 
		.
		.
		and so on.

4)  name = points
	type = list
	feilds :
	=====================================================================

		points[0] = points of question:0
									   |
									   |
									   |--> id

5)  name = users;
	type = hashset;
	=====================================================================

	keys : teamid:id
				   |------->   start from 0 to ....... number of participent teams   
	values : password of that teamid


6)  name = scores;
	type = zset;
	=====================================================================

	score                 key
	---------------------------------------------
	total_points          teamid:id
								 |
								 |------->   id as per in users table


	========================  


		OR IF YOU HAVE USED SOME OTHER NAME THEN EDIT THS FILE


		