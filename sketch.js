const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  box1 = new BlueBox(130,290,20,30);
  box0 = new RedBox(110,290,20,30)
  box2 = new YellowBox(150,290,20,30);
  box3 = new GreenBox(170,290,20,30);
  box4 = new RedBox(190,290,20,30);
  box5 = new GreenBox(210,290,20,30);
  box6 = new YellowBox(230,290,20,30);

  box7 = new RedBox(250,290,20,30);
  box8 = new YellowBox(270,290,20,30);
  box9 = new BlueBox(290,290,20,30);
  box10 = new GreenBox(150,250,20,30);
  box11 = new RedBox(170,250,20,30);

  box12 = new YellowBox(190,250,20,30);
  box13 = new BlueBox(210,250,20,30);
  box14 = new RedBox(230,250,20,30);
  box15 = new GreenBox(250,250,20,30);

  box16 = new YellowBox(170,210,20,30);
  box17 = new RedBox(190,210,20,30);
  box18 = new GreenBox(210,210,20,30);

  box19 = new BlueBox(230,210,20,30);
  box20 = new RedBox(190,170,20,30);

  box21 = new GreenBox(210,170,20,30);

  box22 = new GreenBox(470,190,20,30);
  box23 = new BlueBox(490,190,20,30);
  box24 = new YellowBox(510,190,20,30);
  box25 = new RedBox(530,190,20,30);
  box26 = new GreenBox(550,190,20,30);
  box27 = new BlueBox(570,190,20,30);
  box28 = new YellowBox(590,190,20,30);
  box29 = new GreenBox(610,190,20,30);
  box30 = new RedBox(630,190,20,30);
  box31 = new YellowBox(510,150,20,30);
  box32 = new GreenBox(530,150,20,30);
  box33 = new BlueBox(550,150,20,30);
  box34 = new RedBox(570,150,20,30);
  box35 = new YellowBox(590,150,20,30);
  box36 = new GreenBox(530,110,20,30);
  box37 = new RedBox(550,110,20,30);
  box38 = new BlueBox(570,110,20,30);
  box39 = new YellowBox(550,70,20,30);
  

 

  ball = new Ball(0,0,50);
  spring = new Projectile(ball.body,{x:100,y:50});


 

  ground = new Platform(200,300,250,10);

  groundHovering = new Platform(550,230,250,10);
  
}

function draw() {
  background(247, 223, 178);
  Engine.update(engine);  

  debug:true;

  box0.display()

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();


  ball.display();
  spring.display();
 

  ground.display();
  groundHovering.display();
  
} 

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}




function keyPressed(){
  if(keyCode === 32){
    spring.attach(ball.body);
  }

 
}