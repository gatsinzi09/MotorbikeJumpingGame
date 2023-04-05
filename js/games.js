class Game {
	constructor() {
		this.background = new Background();
		this.player = new Player();
		this.backgroundImage;
		this.playerImage;
		this.obstacles = []
	}

    preload() {
        this.background.backgroundImage = loadImage("./assets/desert.jpg")
		this.playerImage = loadGif("./assets/moto.gif")
		this.obstacleImage= loadImage("./assets/rock.jpeg")
    }

	draw() {
		this.background.draw();
 		this.player.draw();
		
		 if(frameCount % 200 === 0) {
			this.obstacles.push(new Obstacle())
		  }
	
		  // Draw the obstacles
		  this.obstacles.forEach(obstacle => {
			obstacle.draw()
		  })
		}
}

