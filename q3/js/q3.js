// This is a function that gets tags (a and form)
function q3_getTags() {
	// These are the tags we care about, and the respective ID...
	const TAGS = [ "a", "form" ];
	const IDS = [ "link-amount", "form-amount" ];
	// Use original function
	elem_getTags(TAGS, IDS);
}

// This function is called onload...
function q3_onload() {
	// Set date-time 
	date_getTime();
	
	// Set URL
	browser_getURL();
	
	// Set Browser Info
	browser_getBrowser();
	
	// Get tags...
	q3_getTags();
}