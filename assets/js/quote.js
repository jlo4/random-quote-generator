// window.onload = function() {

// document.getElementById("new-quote");
  
// var btn = document.getElementById("new-quote");
// btn.onclick = function(event){
// var quotes = [["Change is the law of life. And those who look only to the past or present are certain to miss the future.", "John F. Kennedy"],
// 			  ["A sense of humor is part of the art of leadership, of getting along with people, of getting things done.", "Dwight D. Eisenhower"],
// 			  ["One word frees us of all the weight and pain of life: That word is love.", "Sophocles"],
// 			  ["Do not meddle in the affairs of wizards, for they are subtle and quick to anger.", "J. R. R. Tolkien"],
// 			  ["Every day I remind myself that my inner and outer life are based on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.", "Albert Einstein"],
// 			  ["Be true to your work, your word, and your friend.", "Henry David Thoreau"]];

// var getQuote = function quoteSelect(lowerValue, upperValue) {
// 	var choices = upperValue - lowerValue + 1;
// 	return Math.floor(Math.random() * choices + lowerValue);
// }

// 	var randomQuote = quotes[getQuote(0, quotes.length - 1)];
// 	var currentQuote = document.getElementById("text");
// 	var currentAuthor = document.getElementById("author");
// 	var authorName = randomQuote[1];
// 	currentQuote.innerHTML = randomQuote[0];
// 	currentAuthor.innerHTML = authorName;
// 	randomQuote = "";
// 	authorName = "";
// };

$(document).ready(function() {
random();
	function random() {
	var quotes = [["Change is the law of life. And those who look only to the past or present are certain to miss the future.", "John F. Kennedy"],
				  ["A sense of humor is part of the art of leadership, of getting along with people, of getting things done.", "Dwight D. Eisenhower"],
				  ["One word frees us of all the weight and pain of life: That word is love.", "Sophocles"],
				  ["Do not meddle in the affairs of wizards, for they are subtle and quick to anger.", "J. R. R. Tolkien"],
				  ["Every day I remind myself that my inner and outer life are based on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.", "Albert Einstein"],
				  ["Be true to your work, your word, and your friend.", "Henry David Thoreau"]];

		var getQuote = function quoteSelect(lowerValue, upperValue) {
			var choices = upperValue - lowerValue + 1;
			return Math.floor(Math.random() * choices + lowerValue);
		}

		var randomQuote = quotes[getQuote(0, quotes.length - 1)];
			var currentQuote = document.getElementById("text");
			var currentAuthor = document.getElementById("author");
			var authorName = randomQuote[1];
			currentQuote.innerHTML = randomQuote[0];
			currentAuthor.innerHTML = authorName;
			
		$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + currentQuote.innerHTML + "   -   " + currentAuthor.innerHTML).attr("target", "_blank");
		randomQuote = "";
		authorName = "";
	}
	$(function() {
		$("#new-quote").on("click", function() {
			random();
		  });
	})
		// $('#tweet-quote').on("click", function(){
		// 	$(this).attr('href', 'https://twitter.com/intent/tweet?text='+ randomQuote).attr('target', '_blank');
		// });
});


// var tweet = document.getElementById("tweet-quote");
// tweet.onclick = function(){
// 	this.attr('https://twitter.com/intent/tweet?text=' + ('#text').text() + " - " + ('#author').text());
//   };

// };

// window.twttr = (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0],
//     t = window.twttr || {};
//   if (d.getElementById(id)) return t;
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://platform.twitter.com/widgets.js";
//   fjs.parentNode.insertBefore(js, fjs);

//   t._e = [];
//   t.ready = function(f) {
//     t._e.push(f);
//   };