var ball;
var database;
var ballPosRef;
var pos;


function setup(){
    createCanvas(500,500);

    database = firebase.database();

    var ballPosRef = database.ref("ball/position")
    //turning ON a listener
    //.on(event - "value", callback function - automatically run a function and pass the snapshot of data)
    ballPosRef.on("value",readPosition)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

// arrow keys are pressed - write position in the database - readPosition from the database to change ball here
function draw(){
    background("white");
    if(pos!== undefined){

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }

    drawSprites();
}
}

//update values in the remote database
function writePosition(x,y){
    database.ref("ball/position").set({x: pos.x+x, y: pos.y+y })
    
}

// To set ball positions according to database value
function readPosition (data){
    pos = data.val();
    ball.x = pos.x;
    ball.y = pos.y;
}
