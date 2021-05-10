    class Paper{
    constructor(x,y,radius){
    var options = {
        restitution:0.8,
        friction:0.1,
        density:0.001,
        isStatic:false
        
    }
    this.paperimage = loadImage("paper.png");
    this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
    World.add(world,this.body);
    
    }


display(){
var pos = this.body.position;
push();
translate(pos.x,pos.y);

fill("yellow");
strokeWeight(4);
stroke("cyan");
//ellipseMode(CENTER);
//ellipse(0,0,this.radius,this.radius);
imageMode(CENTER);
image(this.paperimage,0,0,this.radius,this.radius);

pop();
}
 
}
