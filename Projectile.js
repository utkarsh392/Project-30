class Projectile{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:4,
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }


    attach(body){
        Matter.Body.setPosition(body,{x:100,y:300});
        this.body.bodyA = body;
    }

    release(){
        this.body.bodyA = null;  
    }

    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(1);
            stroke("grey");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}