var quotes = [
"Rowing harder doesn't help,</br> if you're rowing in the wrong direction.",
"\"Everyone thinks they have a plan until they get punched in the face\"</br> - Mike Tyson",
"'That's' not a password, </br>'Th!s !s 4 P455w0rd1;'",
"\"The computer is a moron\" </br> - Peter Drucker",
"Cryptocurrencies: Everything you don't understand about money combined with everything you don't understand about computers\"</br> - John Oliver",
"This aptitude does not have super cow powers",
"Things have changed in the past two years\" </br>- Bill  Gates"
];
var quote = quotes[randomInt(quotes.length)];
function randomInt(maxInt) {
  return Math.floor(Math.random() * Math.floor(maxInt));
}
function printQuote() {
  document.querySelector(".landing-quote").innerHTML = quote;
}
printQuote();
