class Box{
    constructor(){
        var options = {
            restitution: 1.0
        }
        this.body = Bodies.rectangle(200, 100, 50, 50, options);
        World.add(world, this.body);
    }
    
    display(){
        var position = this.body.position
        rectMode(CENTER);
        fill(255);
        rect(position.x, position.y, this.width, this.height);
    }
}   