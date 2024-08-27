class Q4 {
	
	// Create a static variable for it.
	static students = [];
	
	// Question 4 - This checks if the name is valid 
	static valid = function(name) {
		return (name != null && name.length > 0);
	} 
	
	// Question 4 - Insert
	static insert = function(name) {
		// if the name is valid
		if (Q4.valid(name)) {
			// Add the students array
			Q4.students.push(name);
				
			// Sort the array
			Q4.students.sort();
				
			console.log(Q4.students);
		}
	}
	
	// Question 4 - Insert Table
	static insertElement = function() {
		// Get the table 
		let table = document.getElementById("students-table");
		let tableParts = table.children;
		
		// Get the body of the table
		if (tableParts.length > 1) {
			let tbody = tableParts[1];
			
			// Kill every single child
			// While we have a child...
			while (tbody.firstChild) {
				// Kill it, last element 
				tbody.removeChild(tbody.lastChild);
			}
			
			// Create a document fragment to make it easier to add elements...
			let frag = document.createDocumentFragment();
			
			// Now once we've killed everything... start adding
			for (let i = 0; i < Q4.students.length; i++) {
				let row = document.createElement("tr");
				row.setAttribute("class", "table-row");
				
				// Add the text for user
				let cell = document.createElement("td");
				cell.setAttribute("class", "table-cell");
				cell.innerHTML = Q4.students[i];
				
				// Add cell to row
				row.appendChild(cell);
				
				// Add row to table body
				frag.appendChild(row);
			}
			
			// Append the fragment to the tbody 
			tbody.appendChild( frag );
		}
	}
	
	// Question 4 - Insert from the Element...
	static insertStudentName = function() {
		// This is the element(s) that we get the text from.
		let elems = document.getElementsByName("student-name");
		let name = null;
		
		// Check if the element exists.
		if (elems.length > 0) {
			// Only get the first 
			let e = elems[0];
			let name = e.value;
			
			// Check if name is valid...
			if (Q4.valid(name)) {
			
				// Insert the insert functions
				Q4.insert(name);
				
				// Add element to the array
				Q4.insertElement(name);
			}
		}
	}
	
	
}

let onkeypress = function(event) {
	// If the keypress is spacebar
	if (event.keyCode == 13) {
		// Insert 
		Q4.insertStudentName();
	}
};

// When enter is pressed...
addEventListener("keypress", onkeypress);