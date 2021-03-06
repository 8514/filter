function preload(){
}

function setup(){
canvas=createCanvas(300,300);
canvas.center(); 
video=createCapture(VIDEO);
video.size(330,330);
video.hide();

posenet=ml5.poseNet(video, modelLoded);
posenet.on('pose',gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    }

function modelLoaded(){
console.log('Posenet Is Initialized');    
}

function gotPoses(results)
{
 if(results.length > 0)
 {
 console.log(results);
 console.log("nose x = " + results[0].pose.nose.x);
 console.log("nose y = " + results[0].pose.nose.y);    
 }   
}


function take_snapshot(){
save('myFilterImage.png');    
}

