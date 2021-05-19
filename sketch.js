var canvas,backgroundImage;
var gamestate=0;
var playerCount;

var database;

var form,player,game;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    game =new Game();
    game.getstate();
    game.start();
   
}

function draw(){
    
}
