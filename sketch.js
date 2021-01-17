var gameState = 0;
var database;
var playerCount = 0;
var game,form,player;
var allPlayers;
var car1, car2, car3,car4;
var cars = []
var car1Image,car2Image,car3Image,car4Image,trackImage,bg2Image;

function preload(){
    car1Image = loadImage("images/car1.png");
    car2Image = loadImage("images/car2.png");
    car3Image = loadImage("images/car3.png");
    car4Image = loadImage("images/car4.png");
    trackImage = loadImage("images/track.jpg");
    bg2Image = loadImage("images/track.png");

}

function setup(){
    createCanvas(displayWidth-50,displayHeight-250);

    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}


function draw(){
    background(bg2Image);

    if(playerCount === 4){
        game.update(1);
    }
    if (gameState === 1){
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
    

}


