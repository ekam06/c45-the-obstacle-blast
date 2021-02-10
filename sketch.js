const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body



function preload(){


}
function setup(){

createCanvas(1550,700)


o1=new Obstacle(100,0,20,800)
o1.shapeColor=("red")

o2=new Obstacle(200,600,30,400)
o2.shapeColor=("yellow")

o3=new Obstacle(150,100,100,30)
o3.shapeColor=("pink")

o4=new Obstacle(130,580,110,20)
o4.shapeColor=("orange")

o5=new Obstacle(10,500,110,20)
o5.shapeColor=("grey")

o6=new Obstacle(140,290,230,30)
o6.shapeColor=("purple")

o7=new Obstacle(360,280,30,220)
o7.shapeColor=("blue")

o8=new Obstacle(370,540,170,20)
o8.shapeColor=("white")

o9=new Obstacle(380,582,10,180)
o9.shapeColor=("brown")

o10=new Obstacle(380,582,10,120)
o10.shapeColor=("lightGreen")

o11=new Obstacle(270,600,110,20)
o11.shapeColor=("lightBlue")

o12=new Obstacle(285,420,20,120)
o12.shapeColor=("white")

o13=new Obstacle(240,190,120,15)
o13.shapeColor=("red")

o14=new Obstacle(290,80,10,120)
o14.shapeColor=("red")

o15=new Obstacle(200,195,10,80)
o1.shapeColor=("red")

}
function draw(){

  background("black")
  fill ("white")
  text (mouseX+","+mouseY,mouseX,mouseY)

drawSprites()

}
