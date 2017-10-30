(function () {

function OfekQuery(div){

}




$('div')// returns an OfekQuery object of all of the div elements in the page
$('div .fancy') // returns an OfekQuery object of all div elements that have descendant elements of class "fancy"
$('#baba-man') // returns an OfekQuery object of the element with id "baba-man"
$('.pretty-box').addClass('big-box') // adds the "big-box" class to all of the elements of class "pretty-box"
$('ul').filter(function(el) {
	return (el.childElementCount === 2);
}) // returns a new OfekQuery object containing all ul elements that have exactly 2 children elements
$('ul').any(function(el) {
	return el.childElementCount &gt; 5
}) // returns true if any ul elements have more than 5 children elements


})();