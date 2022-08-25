function preload(){

}
function setup(){
  canvas=createCanvas(600,450);
  canvas.position(169,300);

  video=createCapture(VIDEO);
  video.hide();

  tint_color="";

}
function draw(){
image(video, 0,0, 600,450);
tint(tint_color);
}
function take_snapshot(){
    save("student_name.png");
}
function filter_tilt(){
    tint_color=document.getElementById("color_name").value;
}