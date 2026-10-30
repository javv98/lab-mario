class Mario {
    constructor (ctx, x, y) {
        this.ctx = ctx

        this.x = x
        this.y = y
        this.h = MARIO_H
        this.w = MARIO_W

        this.ground = 0

        this.vx = 0
        this.vy = 0
        this.ay = 0

        this.isJumping = false

        this.sprite = new Image ()
        this.sprite.src = "assets/imgs/sprites/sprite-mario.png"

        this.sprite.vFrames = 2
        this.sprite.hFrames = 2

        this.sprite.vFrameIndex = 0
        this.sprite.hFrameIndex = 1

        this.sprite.frameW = Math.floor(this.sprite.width / this.sprite.vFrames)
        this.sprite.frameH = Math.floor(this.sprite.height / this.sprite.hFrames)

        this.marioCount = 0

        this.marioMoving = true
    }

    draw () {
        this.ctx.drawImage(
            this.sprite,
            this.sprite.vFrameIndex * this.sprite.frameW,
            this.sprite.hFrameIndex * this.sprite.frameH,
            this.sprite.frameW,
            this.sprite.frameH,
            this.x,
            this.y,
            this.w,
            this.h
        )

        this.marioCount++

        this.animate()
    }

    move () {
        this.x += this.vx
        
        this.vy += this.ay
        this.y += this.vy

        if (this.x < 0) {
            this.x = 0
        } else if (this.x + this.w > CANVAS_W) {
            this.x = CANVAS_W - this.w
        }

        if (this.y + this.h > this.ground) {
            this.y = this.ground - this.h

            this.vy = 0
            this.ay = 0

            this.isJumping = false
        }

        if (this.x > 201 && this.vx !== 0) {
            this.x = 201
        } else if (this.x === 201 && this.vx === 0) {
            this.x = 200
        }
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
        case "ArrowUp":
        if (!this.isJumping) {
            this.isJumping = true
            this.vy = -MARIO_VY
            this.ay = MARIO_AY
        }
        break
    }
    }

    groundTo(groundY) {
        this.y = groundY - this.h
        this.ground = groundY
    }

    animate () {

        if (this.vx < 0) {
            this.sprite.src = "assets/imgs/sprites/sprite-mario-2.png"
        } if (this.vx > 0) {
            this.sprite.src = "assets/imgs/sprites/sprite-mario.png"
        }

        if (this.vx !== 0 && this.vy === 0) {
            if (this.marioCount % MARIO_MOVE === 0 && this.marioMoving === true) {
            this.sprite.vFrameIndex = 1
            this.sprite.hFrameIndex = 1
            this.marioMoving = false      
            } else if (this.marioCount % MARIO_MOVE === 0 && this.marioMoving === false ) {
            this.sprite.vFrameIndex = 0
            this.sprite.hFrameIndex = 1  
            this.marioMoving = true         
            }
        }

        if (this.vy !== 0) {
            this.sprite.vFrameIndex = 0
            this.sprite.hFrameIndex = 0
        }

        if (this.vy === 0 && this.vx === 0) {
            this.sprite.vFrameIndex = 0
            this.sprite.hFrameIndex = 1
        }
    }
}