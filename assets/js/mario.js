class Mario {
    constructor (ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.h = MARIO_H
        this.w = MARIO_W
    }

    draw () {
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}