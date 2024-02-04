function preload()
{

}

function setup(){
   canvas= createCanvas(1000,700);
   canvas.position(300,200);
   video = createCapture(VIDEO);
   video.hide();

   
}

function draw()
{
    image(video,100,100,800,500);
  
    fill(128,0,0);
    stroke(128,0,0);
    circle(30, 30, 50);

    fill(128,0,0);
    stroke(128,0,0);
    circle(970, 30, 50);

    fill(128,0,0);
    stroke(128,0,0);
    circle(970, 675, 50);

    fill(128,0,0);
    stroke(128,0,0);
    circle(30, 675, 50);
    
    fill(0,128,0);
    stroke(0,128,0);
    rect(49, 10, 900, 40);
      
    fill(0,128,0);
    stroke(0,128,0);
    rect(49, 654, 900, 40);

    fill(0,128,0);
    stroke(0,128,0);
    rect(10, 45, 40, 609);

    fill(0,128,0);
    stroke(0,128,0);
    rect(950, 45, 40, 609);
}

function take_snapshot()
{
   save('student_name.png');
}

