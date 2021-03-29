class Ball

{
    constructor(x,y,r){
        var ballF={
           isStatic:false,
           restitution:0.8
          }
         this.ball = Bodies.circle(x,y,r,ballF)
         World.add(myworld,this.ball)
         this.r=r
         
      }
      display(){
          push ()
          translate (this.ball.position.x,this.ball.position.y)
          rotate (this.ball.angle)
        ellipseMode(CENTER)
        ellipse (0,0,this.r)
        pop ()
      }
}