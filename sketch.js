var gameState = 0;
var database;
var playerCount = 0;
var game,form,player;


function setup(){
    createCanvas(500,500);

    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}


function draw(){
    background("white");

    
    

}


