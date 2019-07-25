//Selects image from page. 
var image = document.querySelector('.change-img');
//must be 0
var imgCount = 0;
//number of images in gallery (named img0.jpg, img1.jpg etc)
var imgTotal = 1; //1 === 2 

//Switches images when clicked
image.onclick = function() {
	
	//selects the src attribute of the img selected from index.html
	var source = image.getAttribute('src');
	var imgSource = 'assets/img/img' + imgCount + '.jpg'
	
	
	
	//checks which image is displayed
	if (imgCount <= imgTotal) {
		//selects src attributte of img .change-img and increases image count
		image.setAttribute('src', imgSource);
		imgCount++;
	}
	else {
		//display default image
		image.setAttribute('src', 'assets/img/img.jpg');
		//reset image counter
		imgCount = 0;
	}
}