class Game {
    constructor (idGame) {
        this.canvas = document.getElementById(idGame)
        this.canvas.width = CANVAS_W
        this.canvas.height = CANVAS_H
        this.ctx = this.canvas.getContext("2d")

        this.mario = new Mario (this.ctx, 20, 20)
        this.mario.groundTo(this.canvas.height - 100)
        this.intervalId = null

    }

    start () {
        this.intervalId = setInterval(() => {
        this.clear() 
        this.move()
        this.draw() 
        }, 1000 / 60)
        this.setUpListeners()  
    }

    draw () {
        this.mario.draw()
    }

    move () {
        this.mario.move()
    }

    clear() {
         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    setUpListeners () {
        document.addEventListener("keydown", (event) => {
            this.mario.onKeyEvent(event)
        })
        document.addEventListener("keyup", (event) => {
            this.mario.onKeyEvent(event)
        })
    }

    }
    