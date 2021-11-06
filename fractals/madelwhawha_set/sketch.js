var minslider;
var maxslider

function setup() {
  createCanvas(300, 300);
  pixelDensity(1)
  loadPixels()
  minslider = createSlider(-2.5,5,-2.5,0.01)
  maxslider = createSlider(-2.5,5,2.5,0.01)
}

function draw() {
  let max_iter = 100
  for (let x = 0;x<width;x++){
    for (let y = 0;y<height;y++){

      var a = map(x,0,width,minslider.value(),maxslider.value())
      var b = map(y,0,height,minslider.value(),maxslider.value())

      var ca = a
      var cb = b

      var n = 0;

      while (n<max_iter){
        var aa = a*a-b*b
        var bb = 2*a*b

        a = aa+ca;
        b = bb+cb;

        if (sqrt(a*a + b*b) > 2){
          break;
        }

        n++;
      }

      var brightness = n*16%255//map(n,0,100,0,255)

      if(n===max_iter){
        brightness=0
      }

      var pix = (x+y*width)*4
      pixels[pix+0] = brightness;
      pixels[pix+1] = brightness;
      pixels[pix+2] = brightness;
      pixels[pix+3] = 255
    }
  }
  text(maxslider.value())
  text(minslider.value())
  updatePixels()
}
