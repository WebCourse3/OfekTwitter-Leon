(function () {

	function assert(value, name) {

		value = document.getElementById('addTweetButton').value;
		value != '';

		name = "check if text is not empty";

	}

	function test_group(value){
		if(value = ){
			document.write(" write something!")
		}
		else{
			document.write("good boy")
		}

	}


		test_group('first test group', function() {
	assert(true, "check if text is not empty ");
	assert(true, "simple successful test 2");
	assert(false, "simple unsuccessful test");
});

test_group('second test group', function() {
	assert(true, "simple successful test");
	assert(true, "simple unsuccessful test 2");
	assert(true, "simple unsuccessful test 3");
});


})();