let nodes = [];
var totalNodes = 8
var nodeSize = 8

var allShuffles = []
var topDist;

function setup() {
  frameRate(10)
  createCanvas(600, 600);
  for (let i = 0; i < totalNodes; i++) {
    nodes[i] = createVector(floor(random(width)),floor(random(height)))
  }

  var d = perimeter(nodes)
  topDist = d
  bestNode = nodes.slice()
}

function draw() {
  background(0);
  fill(255)
  for(let i = 0;i<nodes.length;i++){
    ellipse(nodes[i].x,nodes[i].y,nodeSize)
  }

   stroke(255)
   noFill()
   beginShape()
   for(let i = 0;i<nodes.length;i++){
     vertex(nodes[i].x,nodes[i].y)
   }
   endShape()

  stroke(255,0,0)
  noFill()
  beginShape()
  for(let i = 0;i<nodes.length;i++){
    vertex(bestNode[i].x,bestNode[i].y)
  }
  endShape()

  shuffle(nodes,random(nodes.length),random(nodes.length))

  if (nodes in allShuffles){
  shuffle(nodes,random(nodes.length),random(nodes.length))
  console.log('test');
  } else{
    console.log('test');
    allShuffles.push(nodes)
    d = perimeter(nodes)

    if (d<topDist){
      topDist = d
      console.log(topDist);
      bestNode = nodes.slice()
    }
  }
}

function shuffle(a,i,j){
  var temp = a[i]
  a[i] = a[j]
  a[j] = temp
}

function perimeter(points){
  var sum = 0;
  for (let i = 0; i < points.length-1; i++) {
    sum+= dist(points[i].x,points[i].y,points[i+1].x,points[i+1].y)
  }
  return floor(sum)
}