var x = new Object();

function Bird(){
	this.x = 150;
	this.y = height/2;
	
	this.velocity = 0;
	this.gravity = 0.6;
	this.lift = -15;
        
    this.bird_dead = false; 
 	
	this.dead = function(){
		this.bird_dead = true;
		
	}
	
	this.show = function(){
        if(!this.bird_dead){
			fill(255);
		}
		else {
			fill(255, 0, 0);
			this.bird_dead = false;
		}
		ellipse(this.x,this.y,40,40);
	}
	
	this.up = function(){
      	this.velocity +=  this.lift;
	}

	this.update = function(){
		this.velocity += this.gravity; 
		this.velocity *= 0.9;
		this.y += this.velocity;
		
		if(this.y > height){
		 this.y = height;	
		 this.velocity =0;
		}
		
        if(this.y < 0){
		 this.y = 0;	
		 this.velocity =0;
		}
		
	}
	
}