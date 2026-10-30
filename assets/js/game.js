class Game {
    constructor (idGame) {
        this.canvas = document.getElementById(idGame)
        this.canvas.width = CANVAS_W
        this.canvas.height = CANVAS_H
        this.ctx = this.canvas.getContext("2d")

        this.mario = new Mario (this.ctx, 20, 20)
        this.mario.groundTo(this.canvas.height - BG_FLOOR)
        this.intervalId = null

        this.bg = new Background (this.ctx)

    }

    start () {
        this.intervalId = setInterval(() => {
        this.clear() 
        this.move()
        this.draw()
        this.setUpListeners()  
        }, 1000 / 60)
    }

    draw () {
        this.bg.draw()
        this.mario.draw()
    }

    move () {
        this.mario.move()
        if (this.mario.x > 200) {
            this.bg.move()
        }
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
    