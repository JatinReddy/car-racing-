var gameState = 0;
var database;
var playerCount = 0;
var game,form,player;
var allPlayers;


function setup(){
    createCanvas(500,500);

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


