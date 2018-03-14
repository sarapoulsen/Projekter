var vid;

function setup() {
  vid = createVideo('mspfinal.mp4', vidLoad);
  createCanvas(1000, 1000);
  textSize(60);
  push();
  strokeWeight(3);
  stroke(0);
  textFont('Arial');
  fill(255);
  text('Mozaic', 60,140);
  pop();
push();
}

function vidLoad() {
  vid.loop();
  vid.size(600,600);
  vid.volume(0);
  vid.position(60, 50);
}
pop();
