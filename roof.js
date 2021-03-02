class Roof {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(390,150,400,40,options);
      this.width = 400;
      this.height = 40
      ;
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;

      rectMode(CENTER);
      fill("gray");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }