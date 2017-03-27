var astYPositions = [];	//empty square brackets means new empty array
var astXPositions = [];
var rocketX = 0;
var rocketY = 0;
var rocketImage;
var astImage;
var score = 0;

function setUpGame() {
	var gameCanvas = document.getElementById("gameCanvas");
	rocketImage = new Image();
	astImage = new Image();
	astImage.src = "img/ast.png";
	rocketImage.src = "img/rocket.png";
	
	gameCanvas.getContext("2d").drawImage(rocketImage, Math.random() * 100, Math.random() * 100);
	
	gameCanvas.addEventListener("mousemove", onMouseMovement);
	setInterval(onTick, 10);
}

function onMouseMovement(mouseEvent) {
	rocketX = mouseEvent.offsetX;
	rocketY = mouseEvent.offsetY;
}

function onTick() {
	var gameCanvas = document.getElementById("gameCanvas");
	var currentAstNumber = 0;
	var numberOfEnemies = astXPositions.length;
	
	if (Math.random() < 1/20)
	{
		astYPositions.push(0);
		astXPositions.push(Math.random() * 400);
	}

	while (currentAstNumber < numberOfEnemies) {
		astYPositions[currentAstNumber] = astYPositions[currentAstNumber] + 1;
		currentAstNumber = currentAstNumber + 1;
	}
	
	gameCanvas.width = 400;		//this erases the contents of the canvas
	gameCanvas.getContext("2d").drawImage(rocketImage, rocketX, rocketY);
	
	currentAstNumber = 0;
	while (currentAstNumber < numberOfEnemies) {
		gameCanvas.getContext("2d").drawImage(astImage, astXPositions[currentAstNumber], astYPositions[currentAstNumber]);
		currentAstNumber = currentAstNumber + 1;
	}
	
	currentAstNumber = 0;
	while (currentAstNumber < numberOfEnemies) {
		if ( ( (rocketX < astXPositions[currentAstNumber] && astXPositions[currentAstNumber] < rocketX + 17) || (astXPositions[currentAstNumber] < rocketX && rocketX < astXPositions[currentAstNumber] + 17) ) && ( (rocketY < astYPositions[currentAstNumber] && astYPositions[currentAstNumber] < rocketY + 17) || (astYPositions[currentAstNumber] < rocketY && rocketY < astYPositions[currentAstNumber] + 17) ) ) {
			alert("You were destroyed by an asteroid!" + " you scored = " + score );
		}
		currentAstNumber = currentAstNumber + 1;
	}	
	
	score = score + 1;
}