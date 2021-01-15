class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB

        //loaded the images 
        this.image = loadImage("polygon.png");

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //using the function image displayed the sling 1&2
        image(this.image,200,20);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        
            imageMode(CENTER);
            image(this.image,200,20);
            
           
            
        }
    }
    
}