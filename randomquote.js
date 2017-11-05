var quotes=["We must let go of the life we have planned, so as to accept the one that is waiting for us","Smile in the mirror. Do that every morning and you'll start to see a big difference in your life.","Do not take life too seriously. You will never get out of it alive.","Good, better, best. Never let it rest. Till your good is better and your better is best.","Work hard, stay positive, and get up early. It's the best part of the day","Love all, trust a few, do wrong to none.","A fool thinks himself to be wise, but a wise man knows himself to be a fool.","Silence is true wisdom's best reply. ","It is not in the stars to hold our destiny but in ourselves.","There is nothing either good or bad but thinking makes it so"];
var ran;
var rand=quotes[Math.floor(Math.random()*quotes.length)];
function newQuote() {
  ran=Math.floor(Math.random()*quotes.length);
 $(".quote").html(quotes[ran]);
}
$("#button").click(function(){
	newQuote();
});
$("#tweet").click(function() {
	 $('#tweet a').attr('href','https://twitter.com/intent/tweet?text='+encodeURIComponent(quotes[ran]));
});


