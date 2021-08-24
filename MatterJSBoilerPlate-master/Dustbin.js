class Dustbin{
    constructor(x, y, w, h) {
      var options = {
        isStatic:true,
        restitution:1
        
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      World.add(world,this.body);
      this.height = h;
      this.width = w;
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
  }