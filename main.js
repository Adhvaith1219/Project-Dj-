song_1="";
song_2="";

leftWrist_x=0;
leftWrist_y=0;

rightWrist_x=0;
rightWrist_y=0;


function preload(){
    song_1=loadSound("Future.mp3");
    song_2=loadSound("Sucker.mp3");

    
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);  
        leftWrist_x=results[0].pose.leftWrist.x;
        leftWrist_y=results[0].pose.leftWrist.y;

         console.log("leftWristX = "+leftWrist_x+", leftWristY = "+leftWrist_y);

         rightWrist_x=results[0].pose.rightWrist.x;
         rightWrist_y=results[0].pose.rightWrist.y;

         console.log("rightWristX = "+rightWrist_x+", rightWristY = "+rightWrist_y);
    }

}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song_1.play();
    song_2.play();
    song_1.setVolume(2.5);
    song_2.setVolume(2.5);
    song_1.rate(1);
    song_2.rate(1);

}