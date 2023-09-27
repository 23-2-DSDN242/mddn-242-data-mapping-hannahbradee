let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "Input_3.jpg";
let maskFile   = "Mask_3.png";
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255, 255, 255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}


function draw () {
  for(let i=0;i<20000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    if(mask[0] > 128) {
      let pointSize = 5;
      rect(x, y, pointSize, pointSize);
    }
    else {
      let pointSize = 20;
      ellipse(x, y, pointSize, pointSize); 
          
    }
    //Squares(10,10,50);
    
  }
  //function Squares(x,y,size){
  
   // for(let ii=0; ii<50; ii+10){
     // fill(0,0,0,50);
     // rect(x+ii, y+ii, size, size);
   // }
 // }

  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
