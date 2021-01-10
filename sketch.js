var gameState = 0;
var database;
var playerCount = 0;
var game,form,player;
var allPlayers;
var car1, car2, car3,car4;
var cars = []


function setup(){
    createCanvas(displayWidth-50,displayHeight-250);

    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}


function draw(){
    background("white");

    if(playerCount === 2){
        game.update(1);
    }
    if (gameState === 1){
        game.play();
    }
    
    

}


