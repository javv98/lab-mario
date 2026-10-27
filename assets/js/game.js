class Game {
    constructor (idGame) {
        this.canvas = document.getElementById(idGame)
        this.canvas.width = CANVAS_W
        this.canvas.height = CANVAS_H
        this.ctx = this.canvas.getContext("2d")

        this.mario = new Mario (this.ctx, 20, 20)

    }

    start () {
        this.draw()
    }
    
    draw () {
        this.mario.draw()
    }
}