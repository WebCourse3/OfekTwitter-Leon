(function () {

	function OfekQuery(query){
		switch(query) {
			// returns an OfekQuery object of the element with selected id
			case query.substring(0,1) === '#':
				return document.getElementById(query);
				break;
			// adds the selected class to all of the elements of quried class
			case query.substring(0,1) === '.':
				query = (query - (query.substring(0,1)));
				return document.getElementsByClassName(query);
				break;
			case query.indexOf(' ') === true:
				var splitElem = splitString(query,' ');
				break;
		default:
			document.getElementsByTagName(query);

	}
		function splitString(stringToSplit, separator) {
			var arrayOfStrings = stringToSplit.split(separator);

			for(i=0; i<=arrayOfStrings.length;i++) {
				var splitedElem = document.getElementsByTagName(arrayOfStrings[i]);
				return splitedElem;
			}

	}

	function addClass(nameOfClass){
	document.getElementsByClassName(query).setAttribute("class", nameOfClass);

	}

	//The query option itself.
	function $(query){
		return new OfekQuery(query);
	}





// returns an OfekQuery object of all of the div elements in the page
	$('div')
	// returns an OfekQuery object of all div elements that have descendant elements of class "fancy"
	$('div .fancy')
	// returns an OfekQuery object of the element with id "baba-man"
	$('#baba-man')
	// adds the "big-box" class to all of the elements of class "pretty-box"
	$('.pretty-box').addClass('big-box')
	// returns a new OfekQuery object containing all ul elements that have exactly 2 children elements
	$('ul').filter(function(el) {
		return (el.childElementCount === 2);
	})
	// returns true if any ul elements have more than 5 children elements
	$('ul').any(function(el) {
		return el.childElementCount &gt; 5
	})

})();


