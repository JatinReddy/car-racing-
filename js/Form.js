class Form{
    constructor(){
        this.input = createInput("enter name");
        this.button = createButton("play");
        this.greeting = createElement('h2');
    }

    display(){
        var title = createElement('h2')
        title.html("Car Racing");
        title.position(100,0);

        
        this.input.position(100,50);

        this.button.position(300,50);
        //binding of 'this' ()=> arrow function - changes binding of 'this' to the larger object
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            this.greeting.html("Welcome "+ player.name);
            playerCount = playerCount+1;
            player.index = playerCount;

            player.update();
            player.updateCount(playerCount)
        })

    }
}