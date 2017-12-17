var bird;
var pipes = [];
/*var mySound;

function preload(){
	mySound = loadSound('../sound/hit.mp3');
}
*/

function setup() {
  createCanvas(520,640);
  bird = new Bird();
  pipes.push(new Pipe());
  
}


function draw() {
    background(0);
	for(i = pipes.length-1 ; i >= 0 ; i--){
	    pipes[i].show();
	    pipes[i].update();
		
		if(pipes[i].hits(bird)){
			fill(0, 102, 153);
			textSize(50);
			text("HITS",200,300);  
            		
		}
		
		if(pipes[i].offScreen()){
			pipes.splice(i,1);
		}
	}
	
	bird.show();
	bird.update();   
	
	if(frameCount % 20 == 0){
	   pipes.push(new Pipe());
	}	
	
}

function keyPressed(){
	if (key == ' '){
		bird.up();
	}
}