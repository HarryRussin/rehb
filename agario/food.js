class Food{
    constructor(){
        this.x = random(width)
        this.y = random(height)
        this.xy = floor(random(4))
        this.color = random(colors)
        this.maxfoodSize = maxfoodSize+player.size
        this.size = random(minfoodSize,this.maxfoodSize)
        this.velocity = p5.Vector.random2D()
        this.d = null
        this.vel = random(minfoodVel,maxfoodVel)

        switch (this.xy){
            case 0:
            this.y = 0-this.size/2
            break;
            case 1:
            this.y = height+this.size/2
            break;
            case 2:
            this.x = 0-this.size/2
            break;
            case 3:
            this.x = width+this.size/2
            break;
        }
    }

    show(){
        fill(this.color)
        ellipse(this.x,this.y,this.size)
    }

    eat(player){
        this.d = dist(this.x,this.y,player.x,player.y)

        if (this.d<(this.size/2+player.size/2)) {
            return true
        }
    }

    move(){
        this.x+=this.velocity.x*this.vel
        this.y+=this.velocity.y*this.vel
    }
    offScreen(){
        if (this.x>width+this.size || this.x<0-this.size || this.y > height+this.size || this.y<0-this.size) {
            return true
        }
    }
}