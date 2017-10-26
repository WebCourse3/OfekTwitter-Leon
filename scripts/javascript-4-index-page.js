var tweetusers =
		[
			{username: 'Bobo', text: 'hello followers!'},
			{username: 'Elvis', text: 'this exercise is really easy!'},
			{username: 'Mimi', text: 'I want to go to sleep'}

		];

function showAllTweets(){
	tweetusers.forEach( function(currentUser){
		showNewTweet(currentUser);

	});
}

function erasetext()
{
	document.getElementById("tweet").value = "";
}

function addtweetstopage(){
	erasetext();

	var text = document.getElementById("tweet");
	var newtweet = {username: "leon kukker", text:text.value};

	tweetusers.push(newtweet);
	showNewTweet()(newtweet);

}

function showNewTweet(currentUser) {
	var allthetweets = document.getElementById("allthetweets");

	// creates a new row of tweets
	var newtweetdiv = document.createElement("div");
	newtweetdiv.classname = "row top-buffer";

	// adds the the row container
	allthetweets.appendChild(newtweetdiv);

	// create the image container
	var imagediv = document.createElement("div");
	imagediv.classname = "col-md-2";

	newtweetdiv.appendChild(imagediv);

	// create an image element
	var newimage = document.createElement("img");
	newimage.src = "images/useravatar.png";

	imagediv.appendChild(newimage);

	// create username div
	var usernamediv = document.createElement("div");
	usernamediv.classname = "text-bold";
	usernamediv.innerHTML = currentUser.username + " says:";

	newtweetdiv.appendChild(usernamediv);

	var textdiv = document.createelement("div");
	textdiv.innerHTML = currentUser.text;

	newtweetdiv.appendChild(textdiv);

}
window.onload = showAllTweets();
