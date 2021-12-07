class Iron{
	constructor(x,y,r)
	{
	var options={
		'restitution':0.8,
        'friction':3,
        'desnsity':30
	}
		this.body = Bodies.rectangle(x, y, 50, 50, options);
    	this.width = 75;
    	this.height = 25;
    	World.add(world, this.body);
	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("lightgray");
			rect(0, 0, this.width, this.height);
			pop()
	}

}