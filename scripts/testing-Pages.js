(function () {
	var theTestWindow = document.getElementById("theTestWindow");
	var testGroupDiv;
	function assert(value, name) {

		var newDiv = document.createElement("div");

		newDiv.innerHTML = "<label>" + name + "</label>";

		if(value === true){
			newDiv.setAttribute("class", "panel alert alert-success");

		}
		else{
			newDiv.setAttribute("class", "panel alert alert-danger");
			testGroupDiv.setAttribute("class", "panel alert alert-danger");
		}

		testGroupDiv.appendChild(newDiv);
	}


	function test_group(name,asserts){

		 testGroupDiv = document.createElement("div");
		testGroupDiv.setAttribute("class","row");
		testGroupDiv.setAttribute("role","alert");
		testGroupDiv.setAttribute("class","alert alert-success");
		testGroupDiv.innerHTML = "<label>" + name + "</label>";




		theTestWindow.appendChild(testGroupDiv);


		asserts();
	}


	test_group('first test group', function() {
	assert(true, "simple successful test 1 ");
	assert(true, "simple successful test 2");
	assert(false, "simple unsuccessful test");
});

	test_group('second test group', function() {
	assert(true, "simple successful test");
	assert(true, "simple successful test 2");
	assert(true, "simple successful test 3");
});


})();