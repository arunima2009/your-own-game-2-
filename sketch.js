
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var background, backgroundImg 
var gun, gunImg
var earth, earthImg
var rocket, rocketImg
var Ufo,UfoImg

function setup()
{
  createCanvas(400,400);

  //background image
  background = createSprite(165,485,1,1)
  background.addImage(backgroundImg)  
  background.scale = 1.3
 
}

function preload(){
  backgroundImg = loadImage("assets/px1366710-image-kwvxxeqp.jpg")
  gunImg = loadImage("assets/3-34703_gun-fire-png-macro-photography-transparent-png.png")
  earthImg = loadImage("assets/download.jpg")
  rocketImg = loadImage("assets/images.png")
  UfoImg = loadImage("assets/8c5c31b34a6a900969e65a403b2d42f2.png")
}

function draw() 
{
  background(51);
 
}

