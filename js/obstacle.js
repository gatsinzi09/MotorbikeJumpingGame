class Obstacle {
    constructor() {
      this.width = 100;
      this.height = 50;
      this.x = width;
      this.y = (Math.random() * height);
      this.velocity = 1

    }
  
    draw() {
        this.x -= this.velocity
      image(game.obstacleImage, this.x, this.y, this.width, this.height);
    }
    

    }

   