class Ground
{
    constructor(){
        var features = 
        {
          isStatic : true
        }
        this.ground=Bodies.rectangle(400,790,800,10,features)
       
        World.add(myworld,this.ground) 
        
      }
      display(){
        fill("yellow")


        
        rectMode(CENTER)
        rect (this.ground.position.x,this.ground.position.y,800,10)
      }
}