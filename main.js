function setup() {
    canvas =createCanvas(550, 550);
    canvas.position(550, 100)
    
    video= createCapture(VIDEO);
    video.size(500, 500);
    
    poseNet =ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses);
    }
    
    function draw() {
    background("yellowgreen") 
    }
    
    function modelLoaded() {
        console.log("Posenet has Intialized");
    }
    
    function gotPoses(results) {
        if(results.length > 0) {
            console.log(results);
        }
    }
  
