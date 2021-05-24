class Ground{

    constructor(xGround, yGround, widthGround, heightGround){

        this.body = Bodies.rectangle(xGround, yGround, widthGround, heightGround, {isStatic: true});
        this.width = widthGround;
        this.height = heightGround;
        world.add(myWorld, this.body);
    }

    display(){

        var pos = this.body.position;
        push ();
        rectMode (CENTER);
        fill("red")
        rect(pos.x, pos.y, this.width, this.height)
        pop ();
    }
}