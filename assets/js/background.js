class Background {
    constructor (ctx) {
        this.image = new Image ()
        this.image.src = "assets/imgs/bgs/bg-game.png"
        this.ctx = ctx
        this.image.onload = () => {
            this.image.isReady = true
        }

        this.x = 0
        this.y = 0
        this.h = CANVAS_H
        this.w = CANVAS_W

        this.vx = -BG_VX

    }

    draw () { 
        if(this.image.isReady){
            this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
            this.ctx.drawImage(this.image, this.x + this.w, this.y, this.w, this.h)
        }
    }

    move () {
        this.x += this.vx

        if (this.x + this.w <= 0) {
            this.x = 0
        }
    }
}