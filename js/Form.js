class Form{
    constructor(){
        this.input = createInput("enter name");
        this.button = createButton("play");
        this.greeting = createElement('h2');
        this.reset = createButton("reset");
        this.title = createElement('h1')
    }

    display(){
        
        this.title.size(300,50)
        this.title.html("Car Racing");
        this.title.position((width-50)/2,(height-250)/2);

        
        this.input.position((width-50)/2,(height-100)/2);
        
        this.button.position((width-50)/2,(height-50)/2);
        //binding of 'this' ()=> arrow function - changes binding of 'this' to the larger object
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.title.hide();
            player.name = this.input.value();
            this.greeting.html("Welcome "+ player.name);
            this.greeting.position((width-50)/2,(height-250)/2);
            playerCount = playerCount+1;
            player.index = playerCount;

            player.update();
            player.updateCount(playerCount)
        })

        this.reset.mousePressed(()=> {
            player.updateCount(0);
            game.update(0);


        })

    }
}