//Psychedelic Generative Drawing that records users input on screen as they manipulate the animation using the sliders. 

function setup() {
  createCanvas(700, 700);
   
   //Set the background color to periwinkle blue
  background(143,153,251);
  angleMode(DEGREES)
  
  //Creates sliders for user input
  s1 = createSlider(1, 10, 5, 1).position(20, 750)
  p1 = createP('Number of shapes').position(20, 710)
  s2 = createSlider(2, 8, 5, 1).position(200, 750)
  p2 = createP('Number of parts').position(200, 710)
  s3 = createSlider(3, 30, 3, 1).position(380, 750)
  p3 = createP('Round Edges to Rough Edges').position(380, 710)
  s4 = createSlider(50, 300, 100, 10).position(20, 850)
  p4 = createP('Mininum radius').position(20, 800)
  s5 = createSlider(50, 400, 1, 2.5).position(200, 850)
  p5 = createP('Maximum radius').position(200, 800)
  s6 = createSlider(0.1, 0.25, 0.1, 0.05).position(380, 850)
  p6 = createP('Rotation speed').position(380, 800)
  s7 = createSlider(0.5, 50, 1, 1).position(550, 850)
  p7 = createP('Stroke Thickness').position(550, 800)
}

function draw() {
  
  translate(width / 2, height / 2)
  
  noFill()

  //Executes shape animation on screen
  for (var n = 0; n < s1.value (); n++) {
      stroke(150 + n * 20, 200 + n * 5, 50)
      beginShape()
      for (var i = 0; i < 360; i += s3.value()) {
        var rad = map(sin(i * s2.value() + frameCount), -1, 1, s4.value(), s5.value())
        var x = rad * cos(i)
        var y = rad * sin(i)
        vertex(x, y)
      }
      endShape(CLOSE)
      rotate(frameCount * s6.value())
    
      strokeWeight (s7. value())

  //Shows text on the screen
  myParagraph = createP('computer please dont crash!!');
  
  posX = width/5;
  posY = height/5;
  
  myParagraph.position(posX, posY);
  
  myParagraph.position(posX, posY);
  
  posX += random(-1, 1);
  posY += random(-1, 1);
    
    //draw circle on the canvas
  ellipse(200, 330, 40, 40)
    
    //draw a triangle on the canvas
  //arguments: x1, y1, x2, y2, x3, y3
  //(specifying three points that define our triangle)
triangle(255, 100, 200, 130, 225, 100);
  
  
  }
}