class Bob{
  constructor(x,y){
    
    var options={
      'restitution':1.3,
      'density':0.4,
      'friction':0.3
    }

      this.body=Bodies.circle(x,y,32.5,options)
      this.radius=32.5;

      World.add(world,this.body);
}

display(){

  var pos=this.body.position;

  fill(255,20,147);
  ellipseMode(CENTER);
  ellipse(pos.x,pos.y,this.radius*2,this.radius*2);
}
}