(function () {

	function test_group(name, test_group_function) {
		var textFromTweet = document.getElementById('tweet').value;
		assert(textfromtweet, testIfTweetIsWritten);

	}

	function assert(value, name) {

		if (value != '') {

			var assertOne = document.getElementById("testGroup");
			var mainDiv = document.createElement("div");
			mainDiv.classname = "bg-danger panel panel-default";

		else
			{
				this.document.write("there is no text");

			}
		}

	}


	function OfekQuery(query){
		switch(query) {
			// returns an OfekQuery object of all div elements that have descendant elements of class "fancy"
			case query.substring(4,5) === '.':
				return document.getElementsByClassName(query.substring(4,query.length));
				break;
			// returns an OfekQuery object of the element with selected id
			case query.substring(0,1) === '#':
				return document.getElementById(query.substring(1,query.length));
				break;
			// adds the selected class to all of the elements of quried class
			case query.substring(0,1) === '.':
				addClass(nameOfClass);
				break;
			// returns a new OfekQuery object containing all ul elements that have exactly 2 children elements
			case

			// returns an OfekQuery object of all of the div elements in the page
		default:

	}



	}

	function addClass(nameOfClass){

		document.getElementsByTagName(query)[0].setAttribute("class", nameOfClass);
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


