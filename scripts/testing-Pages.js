(function () {

	function assert(value, name) {
		var theTestWindow = document.getElementById("theTestWindow");
		var newDiv = document.createElement("div");
		theTestWindow.appendChild("newDiv");
		if(value === true){
			newDiv.setAttribute=("class, panel panel-default bg-success");

		}
		else{
			newDiv.classname="panel panel-default bg-danger";
		}

	}


	function test_group(name,asserts){
		var theTestWindow = document.getElementById("theTestWindow");
		theTestWindow.setAttribute("class", "container");
		if(asserts === true){
			theTestWindow.classname="container panel panel-default bg-success"
		}
		else{
			theTestWindow.classname="container panel panel-default bg-danger";
		}


		asserts();
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