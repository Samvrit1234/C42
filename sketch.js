var sc, mn, hr;

function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();

   angleMode(DEGREES);
   scAngle = map(sc,0,60,0,360);
   mnAngle = map(mn,0,60,0,360);
   hrAngle = map(hr,0,60,0,360);

      

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 

   stroke(255,0,0);
   strokeWeight(7);
   line(200,200,400,0);

  drawSprites();
}