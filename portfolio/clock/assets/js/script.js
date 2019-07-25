//
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();	
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();
//
	m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
	document.getElementById('date').innerHTML =
	dd + "/" + mm + "/" + yyyy;
//	
    var t = setTimeout(startTime, 500);
}
//
function quote(){
	//
	var quotes = [
		'"Time you enjoy wasting is not wasted time." \n - Marthe Troly-Curtin, Phrynette Married',
		'"Time flies like an arrow; fruit flies like a banana." \n - Anthony G. Oettinger', 
		'"How did it get so late so soon?" \n - Dr. Seuss',
		'"You can have it all. Just not all at once." \n - Oprah Winfrey',
		'"Time is the longest distance between two places." \n - Tennessee Williams, The Glass Menagerie',
		'"They say I\'m old-fashioned, and live in the past, but sometimes I think progress progresses too fast!" \n - Dr. Seuss',
		'"A man who dares to waste one hour of time has not discovered the value of life." \n - Charles Darwin, The Life & Letters of Charles Darwin',
		'"Time is an illusion." \n - Albert Einstein',
		'"Time doesn’t heal emotional pain, you need to learn how to let go." \n - Roy T. Bennett, The Light in the Heart',
		'"Those who make the worst use of their time are the first to complain" \n of its brevity. - Jean de La Bruyère, Les Caractères ',
	];
	//
	var ran = Math.floor(Math.random() * (quotes.length));
	//	
	document.getElementById('quote').innerHTML =
	quotes[ran];
}
//
function checkTime(i) {
    //
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
//
startTime();
quote();