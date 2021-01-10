class Game{
    constructor(){
        
    }

    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
            car1 = createSprite(200,height-100,30,30);
            car2 = createSprite(400,height-100,30,30);
            car3 = createSprite(600,height-100,30,30);
            car4 = createSprite(800,height-100,30,30);
            
            cars = [car1,car2,car3,car4]
            
        }
    }

    play(){
        form.greeting.hide();
        Player.getPlayersInfo();

        //console.log(allPlayers);
        //allPlayers - player1,player2,player3... 
        //for-in loop
        var x = 200;
        var  y = height-100;
        var index = 0;
        //index - cars array .. player.index 
        //3rd player -- player.index = 3, index = 2 for car3
        for(var plr in allPlayers){
           //text(allPlayers[plr].name + " : " + allPlayers[plr].distance,x,y)
           y = height-100-allPlayers[plr].distance
           cars[index].x = x
           cars[index].y = y
            if(index === player.index - 1){
                camera.position.x = width/2;
                camera.position.y = cars[index].y
                cars[index].shapeColor = "red"
            }

            x = x+200;
            index = index+1;



        }
        drawSprites();
        if (keyIsDown (UP_ARROW)){
            player.distance = player.distance+50;
            player.update();
        }
    }
}