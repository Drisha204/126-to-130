lwx=0;
lwy=0;
rwx=0;
rwy=0;
slw=0;
srw=0;
song="";
function setup()
{
canvas=createCanvas(600,500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

posenet=ml5.poseNet(video,modelloaed);
posenet.on('pose',gotposes);
}
function modelloaed()
{
console.log('modelloaed');
}
function draw()
{
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    if(srw>0.2)
    {

    
    circle(rwx,rwy,20);
    if(rwy>0 && rwy<=100)
    {
        document.getElementById("sp").innerHTML="speed=0.5x";
        song.rate(0.5);   
    }
    else if(rwy>100 && rwy<=200)
    {
        document.getElementById("sp").innerHTML="speed=1x";
        song.rate(1);   
    }
    else if(rwy>200 && rwy<=300)
    {
        document.getElementById("sp").innerHTML="speed=1.5x";
        song.rate(1.5);   
    }
    else if(rwy>300 && rwy<=400)
    {
        document.getElementById("sp").innerHTML="speed=2x";
        song.rate(2);   
    }
}
    if(slw>0.2)
    {
        
    
    circle(lwx,lwy,20);
    number=Number(lwy);
    remove=floor(number);
    volume=remove/500;
    document.getElementById("vo").innerHTML="volume="+volume;
    song.setVolume(volume);
    }
}
function preload()
{
    song=loadSound("music.mp3");
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotposes(results)
{
    if(results.length>0)
    {
 console.log(results);
 slw=results[0].pose.keypoints[9].score;
 srw=results[0].pose.keypoints[10].score;
 console.log("slw="+slw+"srw="+srw);
lwx=results[0].pose.leftWrist.x;
lwy=results[0].pose.leftWrist.y;
console.log("lwx="+lwx+"lwy="+lwy);
rwx=results[0].pose.rightWrist.x;
rwy=results[0].pose.rightWrist.y;
console.log("rwx="+rwx+"rwy="+rwy);


    }
}