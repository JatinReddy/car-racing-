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

            car1.addImage(car1Image);
            car2.addImage(car2Image);
            car3.addImage(car3Image);
            car4.addImage(car4Image);

            
        }
    }

    play(){
        form.greeting.hide();
        Player.getPlayersInfo();
        image(trackImage,0,-6*height-100,width,7*height);
        player.getcarEnd();

        //console.log(allPlayers);
        //allPlayers - player1,player2,player3... 
        //for-in loop
        var x = 400;
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
                camera.position.y = cars[index].y-height/2;
                //cars[index].shapeColor = "red";
                fill("red");
                circle(x,y,80);
                console.log(player.distance);
            }

            x = x+200;
            index = index+1;



        }
        drawSprites();
        if (keyIsDown (UP_ARROW)){
            player.distance = player.distance+50;
            player.update();
        }
        if(player.distance >4350){
            gameState = 2;
            player.rank = player.rank+1;
            player.updatecarEnd(player.rank);
            player.update();
        }
    }
    end(){
        console.log("game ended");
        console.log(player.rank);

        var y = 300
        camera.position.x = 400;
        camera.position.y = 300;
        background("orange");

        for(var plr in allPlayers){
            text(allPlayers[plr].name+":"+allPlayers[plr].rank,400,y)
            y = y+30;
            }

    }
}