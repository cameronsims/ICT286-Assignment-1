// This gets data about browser
function browser_getBrowserData() {
	return navigator.userAgent;
}

// This prints
function browser_changeElements(data) {
	// Browser element
	let browser = document.getElementById("browser-info");
	if (browser) {
		browser.innerHTML = data;
	}
}

// This prints
function browser_getBrowser() {
	// Get the data 
	let data = browser_getBrowserData();
	browser_changeElements(data);
}



// This gets the URL 
function browser_getURLName() {
	return window.location.href;	// Either HREF or Pathname
}

// Change URL
function browser_changeURLElements(url) {
	let eHref = document.getElementById("url-link");
	if (eHref) {
		eHref.href = url;
	}
	
	// Change actual link name 
	let hLink = document.getElementById("url");
	if (hLink) {
		hLink.innerHTML = url;
	}
}

// Set URL 
function browser_getURL() {
	let url = browser_getURLName();
	browser_changeURLElements(url);
}