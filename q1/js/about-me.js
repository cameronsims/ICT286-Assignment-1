// About me...
function aboutme_calculate() {
	// Object to read
	const freqNames = ["ICT", "BSC", "MAS", "MSP"];
	let freq = [0,0,0,0];
	
	// Get all rows...
	let rows = document.getElementsByTagName("tr");
	for (let i = 0; i < rows.length; i++) {
		// For all rows that exist 
		const rowSize = rows[i].children.length;
		let row = rows[i];
		
		for (let j = 0; j < rowSize; j++) {
			let col = row.children[j];
			
			// If we're checking the name...
			if (j == 0) {
			
				// Get first three chars
				let name = col.innerHTML.substring(0, 3);
				
				// Get what name it belongs to...
				let index = -1;
				for (let k = 0; k < freqNames.length; k++) {
					if (name == freqNames[k]) {
						index = k;
						break;
					}
				}
				
				if (index >= 0 && index < freqNames.length) {
					// Add to frequency 
					freq[index]++;
				}
			}
			
			
		}
	}
	
	let enrolledStr = "";
	for (let i = 0; i < freqNames.length; i++) {
		enrolledStr += freqNames[i] + ", " + freq[i] + " times!\n";
	}
	
	alert("Cameron is enrolled in:\n" + enrolledStr);
}