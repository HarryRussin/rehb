let startFoodCount = 40
let pSize = 30
let food = []
let minfoodSize = 5
let maxfoodSize = 100;
let minfoodVel = 1
let maxfoodVel = 1.5
let score = 0
let increment = 1
let mouseControls;
let mossMode;

let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']

function setup() {
  createCanvas(800, 700);
  mossMode = createCheckbox('moss mode',true)
  mouseControls = createCheckbox('mouse mode',false)
  frameRate()
  player = new Player

  for (let i = 0; i < startFoodCount; i++) {
    food[i] = new Food
  }

}

function draw() {
  background(220);

  for (let i = 0; i < food.length; i++) {
    if (food.length !== startFoodCount) {
      food.push(new Food)
    }
    food[i].show()
    food[i].move()
    if (food[i].eat(player)) {
      if (food[i].size>player.size){
        player.die()
      }else{
      food.splice(i,1)
      food.push(new Food)
      player.size += increment+(score+1)**-1
      score++;
      }
    }
    if (food[i].offScreen()){
      food.splice(i,1)
    }
  }

  player.show()
  if (mouseControls.checked()){
    console.log(mouseControls.checked());
    player.moveWithMouse()
  }else{

  if (keyIsDown(65)) {
    player.move(-1,0);
  }

  if (keyIsDown(68)) {
    player.move(1,0);
  }

  if (keyIsDown(87)) {
    player.move(0,-1);
  }

  if (keyIsDown(83)) {
    player.move(0,1);
  }

  if (keyIsDown(LEFT_ARROW)) {
    player.move(-1,0);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.move(1,0);
  }

  if (keyIsDown(UP_ARROW)) {
    player.move(0,-1);
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.move(0,1);
  }

  textSize(30)
  text(score,10,30)
}}

