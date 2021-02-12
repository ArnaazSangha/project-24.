

class Dustbin {
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.width=200;
		this.height=100;
		this.thickness=20;
		this.angle=0;
        var options={
			isStatic:true,
			
		}
		this.bottom=Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
		World.add(world,this.bottom);

		this.left=Bodies.rectangle(this.x-this.width/2,this.y-this.width/2,this.thickness,this.height,options);
		Matter.Body.setAngle(this.left,this.angle)
		World.add(world,this.left);

		this.right=Bodies.rectangle(this.x+this.width/2,this.y-this.width/2,this.thickness,this.height,options);
		Matter.Body.setAngle(this.right,this.angle)
		World.add(world,this.right);

		


		
	}

	display(){
		var posbottom=this.bottom.position;
		var posleft=this.left.position;
		var posright=this.right.position;

		push()
			translate(posleft.x, posleft.y);
			rectMode(CENTER)
			
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.thickness, this.height);
		pop()

		push()
			translate(posright.x, posright.y);
			rectMode(CENTER)
			
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(-1*this.angle)
			rect(0,0,this.thickness, this.height);
		pop()

		push()
		translate(posbottom.x, posbottom.y);
		rectMode(CENTER)
		
		angleMode(RADIANS)
		fill(255)
		stroke(255)
		
		rect(0,0,this.width, this.thickness);
	pop()

		
	
	}


}



