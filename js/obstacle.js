class Obstacle {
    constructor() {
      this.width = 200;
      this.height = 200;
      this.x = width;
      this.y = (Math.random() * height);
      this.velocity = 10

    }
  
    draw() {
        this.x -= this.velocity
      image(game.obstacleImage, this.x, this.y, this.width, this.height);
    }
    
    collision(playerInfo) {
		// console.log("collision")

		// Get the middle of the obstacle
		let obstacleX = this.x + this.width / 2
		let obstacleY = this.y + this.height / 2

		// Get the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		
    // dist(x1, y1, x2, y2) returns the distance between the objects
		if (dist(obstacleX, obstacleY, playerX, playerY) < 50) {
			alert("YOU KILLED A PERSON,THAT PERSON IS YOU!")
            noLoop()
            }
            else {
              return false;
            }
    }

    

    }

             