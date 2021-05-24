class Box{

constructor(xBox,yBox,widthBox,heightBox){

var obj={
restitution: 0.8,
friction: 0.2,
density:1.0
}

this.body = Bodies.rectangle(xBox,yBox,widthBox,heightBox, obj);
this.width = widthBox;
this.height = heightBox;
world.add(myWorld, this.body);


}

display(){
    
    push ();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER)
    fill("blue");
    rect(0, 0, this.width, this.height);
    pop ();
}

}