class Player{
    constructor(){
        this.size = pSize
        this.x = floor(random(width))
        this.y = floor(random(height))
        this.vel = 4
    }

    move(x,y){
        this.x += x*this.vel
        this.y += y*this.vel

        this.x = constrain(this.x,0,width)
        this.y = constrain(this.y,0,height)
    }

    show(){
        fill(0)
        ellipse(this.x,this.y,this.size)
    }

   die(){
       console.log('ded!');
       textSize(50)
       background(220)
       text(`you died! your score was ${score}`,(width/2)-300,height/2)
       noLoop()
   }
}