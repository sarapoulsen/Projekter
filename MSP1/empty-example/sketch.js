var vid;
var vid2;
var vid3;
var vid4;
var vid5;

function setup() {
  vid = createVideo('msp1.mp4', vidLoad);
  vid2 = createVideo('msp2.mp4', vidLoad2);
  vid3 = createVideo('msp3.mp4', vidLoad3);
  vid4 = createVideo('msp4.mp4', vidLoad4);
  vid5 = createVideo('msp5.mp4', vidLoad5);
  createCanvas(1000, 1000);
  textSize(60);
  push();
  strokeWeight(3);
  stroke(0);
  textFont('Arial');
  fill(255);
  text('Mozaic', 40,100);
  pop();

}

function vidLoad() {
  vid.loop();
  vid.size(400,400);
  vid.volume(0);
  vid.position(60, 50);
}

function vidLoad2() {
  vid2.loop();
  vid2.size(400,400);
  vid2.volume(0);
  vid2.position(500, 50);
}

function vidLoad3() {
  vid3.loop();
  vid3.size(400,400);
  vid3.volume(0);
  vid3.position(60, 320);
}

function vidLoad4() {
  vid4.loop();
  vid4.size(400,400);
  vid4.volume(0);
  vid4.position(500, 320);
}

function vidLoad5() {
  vid5.loop();
  vid5.size(400,400);
  vid5.volume(0);
  vid5.position(60, 590);
}
