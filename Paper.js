class Paper {
    constructor(x,y,r){
    
        var options = { 
            'isStatic' : false,
            'restitution' : 0.3,
            'density' : 1.2,
            'friction' : 0.5
        }
        
       
        
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;

        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
      
        push();
        translate(pos.x, pos.y);
        
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("red");
        ellipse(0, 0, this.r,this.r);
        pop();
      }
    };
    
    