//creacion de sprites
var kaizer;
var piso1, piso2;

var pared1;

var techo1;

var  pisosGroup, techos, paredes, paredesGroup;

function preload(){
  
}

function setup() {
createCanvas(600,600);
//creacion de grupos

pisosGroup = new Group();
paredesGroup = new Group();


var a = cuartos_arriba(-100,50);
var b = cuartos_abajo(0,100);
var c = cuartos_derecha(100,200);
var d = cuartos_izquierda(-100,200);




//creacion del personaje principal
kaizer = createSprite(50,300,10,10);
}

function draw() {
background("black");

// console.log(mouseX, mouseY);

kaizer.velocityX = 0;
//camara
camera.position.x = kaizer.x;
camera.position.y = kaizer.y;
//gravedad
if(kaizer.isTouching(paredesGroup||pisosGroup)){
  kaizer.velocityY = 0;
}


if(keyDown("A")){
  kaizer.x=  kaizer.x-2;
}
if(keyDown("D")){
  kaizer.x =  kaizer.x+2;
}
if(keyDown("W")){
  kaizer.y=  kaizer.y-2;
}
if(keyDown("S")){
  kaizer.y =  kaizer.y+2;
}
if(keyWentDown("SPACE")){
  kaizer.y = kaizer.y-70;
  kaizer.velocityY =  kaizer.velocityY+5;
}

 kaizer.collide(paredesGroup);
 kaizer.collide(pisosGroup);
//  kaizer.collide(techos);


//camera.off();
  drawSprites();
}

function pisos(x,y){
      var p = createSprite(x,y,110,10);
      pisosGroup.add(p);
}
function puertas1(x,y){
  var t1 = createSprite(x-35,y,40,10);
  var t2 = createSprite(x+35,y,40,10);
  pisosGroup.add(t1);
  pisosGroup.add(t2);
}
function puertas2(x,y){
  var w1 = createSprite(x,y-35,10,40);
  var w2 = createSprite(x,y+35,10,40);
  paredesGroup.add(w1);
  paredesGroup.add(w2);
}
function paredes(x,y){
    var w = createSprite(x,y,10,100);
    paredesGroup.add(w);
}
function cuartos_arriba(i,j){
  paredes(i+50,j+100);
  pisos(i+100,j+150);
  paredes(i+150,j+100);
  puertas1(i+100,j+50);
}
function cuartos_abajo(i,j){
  paredes(i+50,j+100);
  puertas1(i+100,j+150);
  paredes(i+150,j+100);
  pisos(i+100,j+50);
}
function cuartos_izquierda(i,j){
  puertas2(i+50,j+100);
  pisos(i+100,j+150);
  paredes(i+150,j+100);
  pisos(i+100,j+50);
}
function cuartos_derecha(i,j){
paredes(i+50,j+100);
pisos(i+100,j+150);
puertas2(i+150,j+100);
pisos(i+100,j+50);
}

function balas(x,y){

}

function pinchos(){

}