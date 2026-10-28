class Mario {
    constructor (ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.h = MARIO_H
        this.w = MARIO_W
        this.vx = 0
        this.ground = 0
    }

    draw () {
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    move () {
        this.x += this.vx
    }

    onKeyEvent (event) {
        const isPressed = event.type === "keydown"
        
    switch (event.key) {
      case "ArrowRight":
        if (isPressed) {
          this.vx = MARIO_VX
        } else {
          this.vx = 0
        }
        break
      case "ArrowLeft":
        if (isPressed) {
          this.vx = -MARIO_VX
        } else {
          this.vx = 0
        }
        break
    }
    }

    groundTo(groundY) {
        this.y = groundY - this.h
        this.ground = groundY
    }
}