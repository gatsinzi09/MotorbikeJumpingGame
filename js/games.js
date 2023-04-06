class Game {
	constructor() {
		this.background = new Background();
		this.player = new Player();
		this.backgroundImage;
		this.playerImage;
		this.obstacles = []
		this.currentTime = 0;
		
	}

    preload() {
        this.background.backgroundImage = loadImage("./assets/desert.jpg")
		this.playerImage = loadGif("./assets/moto.gif")
		this.obstacleImage= loadImage("./assets/rock.avif")
		let myAudio = document.querySelector("#audio");
    	myAudio.play();
    }

	draw() {
		this.background.draw();
 		this.player.draw();
		this.checkWinningCondition();
		this.currentTime++
		 if(frameCount % 50 === 0) {
			this.obstacles.push(new Obstacle())


		  }
		  
		  // Draw the obstacles
		  this.obstacles.forEach(obstacle => {
			obstacle.draw()
			if(obstacle.collision(this.player)){
				noLoop()
			  }
		  })

		}
		checkWinningCondition() {
			if (this.currentTime >= 3000) {
			  fill("yellow");
			  textSize(100);
			  text("You won!", 260, 300);
			  noLoop();
			}
		  }
}

