const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1,pig2;
var bird;
function setup(){
    var canvas = createCanvas(1200,00);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,1200,20)
    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810, 180, 300, PI/2);
    bird = new Red(100,100);
    pig1 = new Pig(810, 350);
    pig2 = new Pig(810, 220);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    log2.display();
    bird.display();
    pig1.display();
    pig2.display();
}