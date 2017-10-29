var tweetUsers =
	[
		{username: 'Bobo', text: 'hello followers!'},
		{username: 'Elvis', text: 'this exercise is really easy!'},
		{username: 'Mimi', text: 'I want to go to sleep'},
		{username: 'Tal', text: 'I want to hit myself'}

	];

var tweetTemaplte = '<div><div></div><img src=""></div>';

function erasetext() {
	document.getElementById('tweet').value = '';
}

function addtweetstopage() {

	var text = document.getElementById('tweet');
	var newtweet = {username: 'leon kukker', text: document.getElementById('tweet').value};
	tweetUsers.push(newtweet);
	showthetweet(newtweet);
	erasetext();
}

function showthetweet(thetweet) {
	var allthetweets = document.getElementById('allthetweets');

	// create the divs needed for tweet
	var newtweetdiv = document.createElement('div');
	var imagediv = document.createElement('div');
	var newimage = document.createElement('img');
	var usernamediv = document.createElement('div');
	var textdiv = document.createElement('div');

	//styling for the div elements
	newtweetdiv.classname = 'row';
	imagediv.classname = 'col-md-2';

	//image src
	newimage.src = 'images/useravatar.png';

	//shows the user name tweet

	usernamediv.innerHTML = thetweet.username + ' says:';

	//shows what the user typed
	textdiv.innerText = thetweet.text;

	//adds the div's themselvs
	allthetweets.appendChild(newtweetdiv);
	newtweetdiv.appendChild(imagediv);
	imagediv.appendChild(newimage);
	newtweetdiv.appendChild(usernamediv);
	newtweetdiv.appendChild(textdiv);

}


