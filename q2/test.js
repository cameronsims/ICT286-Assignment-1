// Please view this file for more info...
const lib = require("./q2.js");

// Arrays 
const stu_arr = [
	{ name: "John",     score: -100.0  },
	{ name: "Johan",    score: 0.0     },
	{ name: "Jake",     score: "Hello" },
	{ name: "Jacob",    score: null    },
	{ name: null,       score: 90      },
	{ name: "Joshua",   score: 80      },
	{ name: "Johannes", score: 70      },
	{ name: undefined,  score: 60      },
	{ name: "Jeff",     score: 50      },
	{ name: "Jeff"      score: 40      }
];



// ##        ##     ####     ########  ##    ##
// ####    ####    ######    ########  ####  ##
// ## ##  ## ##   ##    ##      ##     ##### ##
// ##  ####  ##  ##########     ##     ## #####
// ##        ##  ##      ##     ##     ##  ####
// ##        ##  ##      ##  ########  ##   ###
// ##        ##  ##      ##  ########  ##    ##

students = []
for (let i = 0; i < stu_arr.length; i++) {
	// Create Student
	let student = lib.student(stu_arr[i].name, stu_arr[i].score);
	
	// If student is valid
	if (student)
		students.push( student );
}

console.log(students);

lib.produceStudents(students);