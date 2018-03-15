var img;  // Declare variable 'img'.
var img2;
var img3;
var img4;
var img5;


function setup() {
  createCanvas(1000, 1000);
  img = loadImage("vaerk2.jpg");  // Load the image
  img2 = loadImage("vaerk1.png");
  img3 = loadImage("vaerk3.jpg");
  img4 = loadImage("vaerk5.jpg");
  img5 = loadImage("vaerk4.jpg");

  push();
    textSize(40);
    textFont('Helvetica');
    strokeWeight(3);
    stroke(0);
    fill(255);
    text('KØB EN KUSSE', 60,90);
  pop();
  push();
    textSize(16);
    noStroke();
    fill(0);
    text('SARA POULSEN & NICOLINE MARCUSLUND OVERBYE', 60,115);
  pop();
  push();
    textSize(12);
    noStroke();
    textFont('Helvetica');
    fill(0);
    text('Frisk fersk fisse. Saftigt saltet skræv. Varm velvoksen vulva. Hvad end du er', 60,140);
    text('til, kan du finde det i slagterbutikken i Bjerringbro (og måske snart i dit lokale', 60,160);
    text('supermarked). "KØB EN KUSSE" er et værk der på humoristisk vis kritiserer', 60,180);
    text('objektiviseringen af kvinder. Forskelligartede fisser i tekstil udstilles i plastik-', 60,200);
    text('bakker som man kender dem fra kødafdelingen i supermarkedet. Herpå er', 60,220);
    text('også mærkater med pris, fedtprocent, pakkedato, sidste anvendelsesdato,',60,240);
    text('samt varens navn. Forskelligheden i form, farve og størrelse af kønsorganer-', 60,260);
    text('ne afspejler mangfoldigheden og understreger, at ingen kvinder er ens.', 60, 280);
    pop();
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  // Displays the image at point (0, height/2) at half size
  image(img, 60, 300, img.width/4, img.height/4);
  image(img2, 300, 290, img2.width/4, img2.height/4);
  image(img3, 620, 300, img3.width/6, img3.height/6);
  image(img4, 300, 590, img4.width/3, img4.height/3);
  image(img5, 640, 620, img5.width/2, img5.height/2);


}
