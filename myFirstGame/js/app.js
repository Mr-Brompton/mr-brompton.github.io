var astYPositions = [0, -25, -50, -75, -100, -120, -130, -160, -200, -250, -300, -287, -145];
var astXPositions = [250, 130, 300, 50, 190, 200, 225, 65, 10, 115, 75, 287, 300, 170, 10, 30, 60, 75, 85, 90, 110];
var rocketX = 0;
var rocketY = 0;
var rocketImg;
var astImg;
var numOfAst = astXPositions.length;

function setUpGame() {
	var gameCanvas = document.getElementById("gameCanvas");
	rocketImg = new Image();
	astImg = new Image();
	rocketImg.src = "img/rocket.png";
	astImg.src = "img/Ast.png";
	
	gameCanvas.getContext("2d").drawImage(rocketImg, Math.random() * 100, Math.random() * 100);
	gameCanvas.addEventListener("mousemove", mouseMove);
	setInterval(onTick, 15);
}

function mouseMove(mouseEvent) {
	rocketX = mouseEvent.offsetX;
	rocketY = mouseEvent.offsetY;
}


function onTick() {
    var gameCanvas = document.getElementById("gameCanvas");
    var currentAstNumber = 0;
 
    while (currentAstNumber < numOfAst) {
        astYPositions[currentAstNumber] = astYPositions[currentAstNumber] + 1;
        currentAstNumber = currentAstNumber + 1;
    }
     
    gameCanvas.width = 400;     //this erases the contents of the canvas
    gameCanvas.getContext("2d").drawImage(rocketImg, rocketX, rocketY);
     
    currentAstNumber = 0;
    while (currentAstNumber < numOfAst) {
        gameCanvas.getContext("2d").drawImage(astImg, astXPositions[currentAstNumber], astYPositions[currentAstNumber]);
        currentAstNumber = currentAstNumber + 1;
    }
	
currentAstNumber = 0;
	while (currentAstNumber < numOfAst) {
		if ( ( (rocketX < astXPositions[currentAstNumber] && astXPositions[currentAstNumber] < rocketX + 15) || (astXPositions[currentAstNumber] < rocketX && rocketX < astXPositions[currentAstNumber] + 15) ) && ( (rocketY < astYPositions[currentAstNumber] && astYPositions[currentAstNumber] < rocketY + 15) || (astYPositions[currentAstNumber] < rocketY && rocketY < astYPositions[currentAstNumber] + 15) ) ) {
			alert("You hit an Asteroid!");
		}
		currentAstNumber = currentAstNumber + 1;
	}
}
