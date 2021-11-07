let r = 200
let darts = 0
let inCircle= 0
let cycles;
let q;

function setup() {
  createCanvas(403, 403);
  background(0);
  translate(width/2,height/2)
  noFill()
  stroke(255)
  strokeWeight(2)
  ellipse(0,0,r*2,r*2)
  rectMode(CENTER)
  rect(0,0,r*2,r*2)
  cycles = createSlider(1,10000,10)
  stroke(0,255,0)
}

function draw() {
  translate(width/2,height/2)
  noFill()
  for (let j = 0; j < cycles.value(); j++) {
    x = random(-r,r)
    y = random(-r,r)
    d = sqrt(x*x + y*y)
    if(d<r){
      stroke(0,255,0)
      inCircle++
    }else{
      stroke(255)
    }
    ellipse(x,y,1,1)
    darts++;  
  }

  pi = (inCircle/darts) * 4
  textSize(50)
  q = document.getElementById('pi')
  q.innerHTML = pi

  console.log(d);
}
