///////////////////////////////////////////
//                                       //
//    app.js - Question 2 Main           //
//                                       //
//    Cameron Sims (34829454)            //
//    ICT286 Web and Mobile Computing    //
//    Assignment 1: Question 2.          //
//                                       //
//    Created:     23/08/2024            //
//    Last Edited: 24/08/2024            //
//                                       //
///////////////////////////////////////////

//
// 1. Input Names, Score into Array
//
// 2. Print in table
//
// 3. Get names from table
//
// 4. End
//

// Please view this file for more info...
const lib = require("./q2.js");

// ##        ##     ####     ########  ##    ##
// ####    ####    ######    ########  ####  ##
// ## ##  ## ##   ##    ##      ##     ##### ##
// ##  ####  ##  ##########     ##     ## #####
// ##        ##  ##      ##     ##     ##  ####
// ##        ##  ##      ##  ########  ##   ###
// ##        ##  ##      ##  ########  ##    ##

/////////////////////////////////////////////
//										   //
//  This  is  where  the  script  starts.  //
//                                         //
/////////////////////////////////////////////

// This is the main program...
lib.insertStudents(function(students) {
	// Produce a table...
	lib.produceStudents(students);
	
	// Get user, and show them
	lib.askForStudent(students);
});
