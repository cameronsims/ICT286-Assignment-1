// Get the amount of elements that exist on a webpage 
function elem_getAmountOf(eName) {
	// Get array 
	let e = document.getElementsByTagName(eName);
	
	// Return size 
	return e.length;
}

// Get amount of elements in an array...
function elem_getAmountOfArray(arr) {
	// Frequency array...
	let freq = [];
	
	// For all elements...
	for (let i = 0; i < arr.length; i++) {
		let amount = elem_getAmountOf( arr[i] );
		freq.push(amount);
	}
	
	// Return this array...
	return freq;
}

// Set the amount 
function elem_getTags(tags, id) {
	// Get frequncy...
	let freq = elem_getAmountOfArray(tags);
	
	// Loop through arrays...
	for (let i = 0; i < freq.length; i++) {
		
		// Set to element 
		let e = document.getElementById(id[i]);
		if (e) {
			e.innerHTML = freq[i];
		}
		
	}
}