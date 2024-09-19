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



///////////////////////////////////////////
//                                       //
// L I B R A R Y - D E F I N I T I O N S //
//                                       //
///////////////////////////////////////////

const readline = require('readline');

// This is the input object, it holds a function to get functions
const input = readline.createInterface({ input: process.stdin, output: process.stdout });



/////////////////////////////////////////////
//										   //
// F U N C T I O N - D E F I N I T I O N S //
//                                         //
/////////////////////////////////////////////

// This is a function that translates a floating point number to a grade
function q2_grade(score) {
	// Hash map.
	const grade_arr = [ 100.0, 80.0, 70.0, 60.0, 50.0 ];
	const lettr_arr = [ "HD", "D", "C", "P", "N" ];
	
	// Loop both arrays
	const grade_n = grade_arr.length;
	for (let i = 0; i < grade_n - 1; i++) {
		// If it is bigger, AND we're at the first array
		if (grade_arr[0] < score) {
			return null;
		}
		// If it is inbetween
		if (grade_arr[i] >= score && score >= grade_arr[i + 1]) {
			// Return the letter
			return lettr_arr[i];
		} 
		// If it is lower, and we're on the final iteration.
		if (score < grade_arr[grade_n - 1]) {
			return lettr_arr[grade_n - 1];
		}
	}
	
	// Return null if there is nothing
	return null;
}

// This transforms the name and score into a structure
function q2_student(name, score) {
	// This is the data structure that represents a structure
	let student = {
		name: null,
		score: null,
		percent: null,
		grade: null
	}
	
	// If either name or score is "end"
	// If score isn't a valid number
	let notValidName = (name == "end" || name == null || typeof(name) != "string");
	let notValidScore = (score == "end" || score == null || score < 0.0 || score > 100.0 || isNaN(score) || typeof(score) != "number");
	
	if (notValidName || notValidScore) {
		return null;
	}
	
	// Paste into the object 
	student.name = name;
	student.score = score;
	student.percent = score + "%";
	student.grade = q2_grade(score);
	
	// Return the student
	return student;
}

// This gets the students with the name 
function q2_getStudentsByName(students, name) {
	// This is the return array 
	accepted = []
	
	// This is the lower case name 
	const lwrName = name.toLowerCase();
	
	// Loop 
	for (let i = 0; i < students.length; i++) {
		// If they've got the same name (not-case sensitive)
		let student = students[i];
		let stuName = student.name.toLowerCase();
		if (stuName == lwrName || stuName.includes(lwrName)) {
			// Add this to the new array 
			accepted.push( student );
		}
	}
	
	// Return 
	return accepted;
}

// Get best scorer
function q2_getHighestScore(students) {
	// If null
	if (students == null || students == undefined) {
		return null;
	}
	if (students.length == 0) {
		return null
	}
	
	// Object representing the highest scorer
	let highest = {
		index: 0,
		score: students[0].score
	};
	
	// Loop through score
	for (let i = 1; i < students.length; i++) {
		let student = students[i];
		if (highest.score < student.score) {
			highest.index = i;
			highest.score = student.score;
		}
	}
	
	return highest.index;
}

// Get name 
function q2_getStudentName(func) {
	input.question("Student Name: ", (name) => {
		func(name);
	});
}

// Get score 
function q2_getStudentScore(func) {
	input.question("Student Score: ", (score) => {
		if (score == "end") {
			func(-1.0);
			return;
		}
		
		let f = parseFloat(score);
		if (f < 0.0 || f > 100.0) {
			f = NaN;
		}
		
		func(f);
	});
}

// This is the function that gets the students
function q2_insertStudents_recurse(students, func) {
	// Get student name...
	q2_getStudentName(function(name) {
		// If end
		if (name == "end") {
			func(students);
			return;
		}
		
		// Function called...
		let onScore = function(score) {
			// If end...
			if (score < 0.0 || score > 100.0) {
				func(students);
				return;
			}
			
			// If Not a number...
			if (isNaN(score)) {
				// Ask...
				console.log("Please put in a valid score 0.0-100.0");
				q2_getStudentScore(onScore);
				return;
			}
			
			// New Student
			let stu = q2_student(name, score);
			students.push(stu);
			
			// After this has finished...
			q2_insertStudents_recurse(students, func);
		}; 
		
		q2_getStudentScore(onScore);
		
	});
}

// This is the parent function for the above...
function q2_insertStudents(func) {
	// Initalise empty
	let students = [];
	
	// Begin...
	q2_insertStudents_recurse(students, func);
}

function q2_getLetterGrade(letter) {
	const lettr_arr = [ "HD", "D", "C", "P", "N" ];
	// Get his letter grade.
	for (let i = 0; i < lettr_arr.length; i++) {
		if (lettr_arr[i] == letter) {
			return i;
		} 
	}
	return null;
}

// This produces a score mark down...
function q2_scoreBreakdown(students) {
	// Grade arrays...
	const lettr_arr = [ "HD", "D", "C", "P", "N" ];
	
	// Create the object
	let freq_perc = [];
	for (let i = 0; i < lettr_arr.length; i++) {
		freq_perc.push({
			letter: lettr_arr[i],
			frequency: 0,
			percent: 0
		});
	}
	
	// For all students add to the array 
	for (let i = 0; i < students.length; i++) {
		let student = students[i];
		let index = q2_getLetterGrade(student.grade);
		
		if (index != null) {
			freq_perc[index].frequency++;
		}
	}
	
	// Now we've added everything...
	let n = students.length;
	
	// start calculating percentages 
	for (let i = 0; i < freq_perc.length; i++) {
		// Calculate the percentages
		let freq = freq_perc[i].frequency;
		let share = (freq / n);
		freq_perc[i].percent = 100.0 * share;
	}
	
	return freq_perc;
}

// This prints the table for the students and gets lowest
function q2_produceStudents(students) {
	// Table
	console.log("Students:")
	console.table(students);
	
	// Breakdown 
	let score_breakdown = q2_scoreBreakdown(students);
	console.log("Score Breakdown:");
	console.table(score_breakdown);
	
	// Get highest scorer
	let index = q2_getHighestScore(students);
	if (index != null) {
		// Highest student
		let highest = students[index];
		
		// Print out
		console.log("Highest scorer: " + highest.name + " with " + highest.score + "% (" + highest.grade + ")");
	}
}

function q2_askForStudent(students) {
	// Get name...
	q2_getStudentName(function(name) {
		// Get answer
		if (name == "end") {
			// Tell user.
			console.log("Program has ended...");
			
			// This kills the program.
			input.close();
			
			return; 
		}
		
		// Get name 
		let accepted = q2_getStudentsByName(students, name);
		console.table(accepted);
		q2_askForStudent(students);
		
	});
}



// This is where we decide what to export (expose)
exports.student = q2_student;
exports.insertStudents = q2_insertStudents;
exports.produceStudents = q2_produceStudents;
exports.askForStudent = q2_askForStudent;