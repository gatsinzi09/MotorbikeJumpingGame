class Background {
    constructor() {
      this.backgroundImage;
      this.x = 0
    }
      draw() {
        // game.backgroundImage;
        this.x -= 2
        image(this.backgroundImage, this.x, 0, 1000, 600)
        image(this.backgroundImage, this.x+1000, 0,1000,600 )
        if(this.x<= -1000) this.x=0

        }
      }