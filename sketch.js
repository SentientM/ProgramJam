let r, g, b;
let a;
//The setup function only happens once
function setup() {
createCanvas(750, 750); //create a 500px X 500px canvas
r = random(255);
    g = random(255);
    b = random(255);
a = height/2;
}


//The draw function happens over and over again
function draw() {
  background(245,244,183); //an RGB color for the canvas' background
  //circle
  stroke(r,g,b); // an RGB color for the circle's border
  fill(r,g,b,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,60,60); // center of canvas, 20px dia
  triangle(300, 100, 320, 100, 310, 80);
 
  line(0, a, width, a);
  a = a - 0.5;
  if (a < 0) {
    a = height;
  }


}

function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 375, 375);
  if (d < 400) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}