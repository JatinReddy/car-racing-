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
        }
    }

    play(){
        form.greeting.hide();
        Player.getPlayersInfo();

        console.log(allPlayers);
        //allPlayers - player1,player2,player3... 
        //for-in loop
        var x = 300
        var  y = 300
        for(var plr in allPlayers){
            text(allPlayers[plr].name + " : " + allPlayers[plr].distance,x,y)
            y = y + 30
        }
        if (keyIsDown (UP_ARROW)){
            player.distance = player.distance+50;
            player.update();
        }
    }
}