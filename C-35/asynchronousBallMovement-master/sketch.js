var hypnoticball,database;
var position;


function setup(){

    database=firebase.database();

    createCanvas(500,500);
    hypnoticball = createSprite(350,350,10,10);
    hypnoticball.shapeColor = "red";

//read

var hypnoticballPosition=database.ref('ball/positions');

hypnoticballPosition.on("value",readPosition, showError)


}

function draw(){
    background("white");
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

function writePosition(x,y){

    database.ref("ball/positions").set({
        'x' : position.x + x,
        'y' : position.y + y
    })
    
}

function readPosition(data){

position=data.val();//reading x,y

hypnoticball.x=position.x;
hypnoticball.y=position.y;



}
function showError(){

console.log("Error please check");

}