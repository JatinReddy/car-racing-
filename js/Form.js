class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2')
        title.html("Car Racing");
        title.position(100,0);

        var greeting = createElement('h2')
        
        var input = createInput("enter name")
        input.position(100,50);

        var button = createButton("play");
        button.position(300,50);
        button.mousePressed(function(){


            input.hide();
            button.hide();
            var name = input.value();
            greeting.html("Welcome "+ name);
            playerCount = playerCount+1;

            player.update(name);
            player.updateCount(playerCount)
        })

    }
}