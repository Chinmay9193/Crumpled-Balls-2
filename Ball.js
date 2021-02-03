class Ball{
    //objects have properties and functions
    //properties in a class(blueprint) is mentioned inside constructor()
    constructor(x,y,radius){
        var options = {
        
            restitution: 0.3,
            isStatic:false,
            density: 1.2,
            friction: 0.5

          }
          this.body = Bodies.circle(x,y,radius,options);
          this.radius= radius;
          this.image = loadImage("paper.png")
          World.add(world,this.body);
          
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2)
        pop();
    }

}