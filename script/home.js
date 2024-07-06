function search(){
	let src = document.getElementById('search').value;
	if(vaidateSearch(src)){
		searchGoogle(src);	
	}
	else {
		alert("Search box is empty. Please type some words to search.");
	}	
}

function vaidateSearch(search) {
	if(search == "" || search == null || search == undefined){
		return false;
	}
	else return true;
}

function searchGoogle(search) {
	let base = "https://google.com/search?q=";

	document.location.href = base + search;
	document.getElementById('search').value = "";
}
