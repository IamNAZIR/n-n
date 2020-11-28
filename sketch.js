var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "red"

  newrect = createSprite(100, 100, 50, 50)
  newrect.shapeColor = "red"
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "red"
}



function draw() {
  background(255,255,255);
  
  movingRect.x = mouseX
  movingRect.y = mouseY
  
  isTouching(movingRect,newrect);
  isTouching(movingRect,fixedRect);
  
  drawSprites();
}
function isTouching(oc1,oc2){

  if (oc1.x - oc2.x<oc2.width/2+oc1.width/2 &&
    oc2.x - oc1.x<oc2.width/2+oc1.width/2 &&
    oc2.y - oc1.y<oc2.width/2+oc1.width/2 &&
    oc1.y - oc2.y<oc2.width/2+oc1.width/2) {

      oc2.shapeColor = "lightgreen"
      oc1.shapeColor = "lightgreen"
    
}

else {
  oc2.shapeColor = "red"
  oc1.shapeColor = "red"

}




}