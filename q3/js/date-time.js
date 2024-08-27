// Get the day string 
function date_getDay(d) {
	// The months and days in a hash 
	const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	// Return the string
	return DAYS[d];
}

// Get month string 
function date_getMonth(m) {
	// Return months using hash map
	const MONTHS = [
		"January", 
		"February", 
		"March", 
		"April", 
		"May", 
		"June", 
		"July", 
		"August", 
		"September", 
		"October", 
		"November", 
		"December"
	];
	
	// Returns the month string
	return MONTHS[m];
}

// Get full date
function date_getFullDate(d) {
	// This is the object we're returning 
	const date = d.getDate();
	const month = d.getMonth();
	const year = d.getFullYear();
	
	let obj = {
		date: date,
		day: d.getDay(),
		month: month,
		year: year
	};
	
	// Return the strings
	return obj;
}

// Change the date elements 
function date_changeElements(date) {
	// Get all elements that get dates
	let eDay = document.getElementById("day");
	if (eDay) {
		eDay.innerHTML = date_getDay(date.day);
	}
	
	let eDate = document.getElementById("date");
	if (eDate) {
		eDate.innerHTML = date.date;
	}
	
	let eMonth = document.getElementById("month");
	if (eMonth) {
		eMonth.innerHTML = date_getMonth(date.month);
	}
	
	let eYear = document.getElementById("year");
	if (eYear) {
		eYear.innerHTML = date.year;
	}
}

// Get time 
function time_getTime(d) {
	// Convert 24hr time to 12 hour time
	const HOURS24 = d.getHours();
	const MINUTES = d.getMinutes();
	const IS_AM = (HOURS24 < 12);
	
	// Get 12 hour time...
	let h12 = (IS_AM) ? HOURS24 : HOURS24 - 12;
	
	// Check for hour t12
	if (HOURS24 == 0 || HOURS24 == 12) {
		// Set to POSITIVE 12.
		h12 = 12;
	}
	
	const HOURS12 = h12;
	
	const AM_PM_STR = (IS_AM) ? "am" : "pm";
	
	// This is the object 
	let time = {
		hr24: HOURS24,
		hr12: HOURS12,
		min: MINUTES,
		isAM: IS_AM,
		MSTR: AM_PM_STR
	};
	
	return time;
}

// Set time string 
function time_changeElements(time) {
	// Time Element
	let eHour = document.getElementById("hour");
	if (eHour) {
		eHour.innerHTML = time.hr12;
	}
	
	let eMins = document.getElementById("minutes");
	if (eMins) {
		eMins.innerHTML = time.min;
	}
	
	let eAM = document.getElementById("AM-PM");
	if (eAM) {
		eAM.innerHTML = time.MSTR;
	}
}

// Lab 3 - Exercise 4
function date_getTime(pDate = null) {
	// Get a date
	const d = (pDate == null) ? (new Date()) : (pDate);
	
	// Date and time objects 
	let date = date_getFullDate(d);
	let time = time_getTime(d);
	
	// Change dates 
	date_changeElements(date);
	
	// Change times
	time_changeElements(time);

};
