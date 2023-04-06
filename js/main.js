const game = new Game();
const player = new Player();


function preload() {
	game.preload()
  }
  
  function setup() {
	createCanvas(1000, 600)
  }
  
  function draw() {
	game.draw()
	console.log(game.obstacle)
	}

function keyPressed() {
	if (keyCode === 32) {
		game.player.jump()
	}
}


 