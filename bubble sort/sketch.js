let colSize = 20
let bubbles = []
let allBub = []
let count = 0
let swapped;
let swaps = 0
let frames;
let cycles = 2

function setup() {
  createCanvas(700, 400);
  frames = createSlider(1,100,10,1)
  
  cols = width/colSize
  for (let i = 0; i < cols; i++) {
    y = random(height)
    fill(220)
    col = rect(i*colSize,height-y,colSize,y)
    bubbles.push(y)
    allBub.push(bubbles)
  }
}

function draw() {
  frameRate(frames.value())
  for (let k = 0; k < cycles; k++) {
    
    
  
  for (let j = 0; j < bubbles.length; j++) {
    
    for (let h = 0; h < bubbles.length-j; h++) {
        if (bubbles[h]>bubbles[h+1]) {
          let temp = bubbles[h]
          bubbles[h] = bubbles[h+1]
          bubbles[h+1] = temp
          allBub.push(bubbles.slice())
          swaps++;
          swapped = true
        }
    }
  }
  
  background(255)
  count++

  try{  
    for (let i = 0; i < allBub.length; i++) {
    fill(220)
    rect(i*colSize,height,colSize,allBub[count+cols][i]*-1)
  }
  }catch(err){
    for (let i = 0; i < allBub.length; i++) {
      fill(220)
      rect(i*colSize,height,colSize,bubbles[i]*-1)
  }
}}
}
