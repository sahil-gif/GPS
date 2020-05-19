
function setup() {
  createCanvas(400, 400);
	frameRate(5);
	
}

function draw() {
  background(220);
	
		navigator.geolocation.getCurrentPosition(

    
    function(position) {
			background(220);
			textSize(32);
			text("latitude: " + position.coords.latitude, 5, 100);
			text("longitude: " + position.coords.longitude, 5, 200);

       
         

    },

    
    function(error){

        

    }
);
	
}