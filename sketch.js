let sourceImg=null;
let maskImg=null;
//let renderCounter=0;

// change these three lines as appropiate to switch between photos and masks.

let sourceFile = "Input_6.jpg";
let maskFile   = "Mask_6.png";
let textureFile = "TexMask_6.png";
let outputFile = "output_6.png";



function preload() {

  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
  textureImg= loadImage(textureFile)
  colorMode(HSB);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255, 255, 255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  textureImg.loadPixels();
 
}

//setting the boundaries on the canvas to control what portion of the canvas gets rendered. 

let X_STOP = 1920;
let Y_STOP = 1080;
let OFFSET = 20;


let renderCounter=0;




function draw () {
 
  
//this for loop and if statement set the sin wave effect for the main mask.
//it also sets the effect for the main source image, however ive kept it plain.

  angleMode(DEGREES);
  let num_lines_to_draw = 40;
  // get one scanline
  for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<Y_STOP; j++) {
    for(let i=0; i<X_STOP; i++) {
      colorMode(RGB);
      let mask = maskImg.get(i-420,j);

      if (mask[1] < 128) {
        let wave = sin(i);
        let slip = map(wave, -2, 2, OFFSET, OFFSET);
        pix = sourceImg.get(i+slip-420, j+slip);

        
      }
      else {
        
        let wave = sin(j*4);
        let slip = map(wave, -3, -0, -OFFSET, OFFSET);
        pix = sourceImg.get(i+slip-420, j+slip);
    
      }

      //this is the code that controls the top texture mask that i have made to frame the main subject of each image (Bertie).
      
      let back_color = [255, 255, 255, 255];

      let tex = textureImg.get(i-420, j);
      if(tex[1] > 10 && tex[1] < 250) {
        for(k=0; k<3; k++) {
          pix[k] = map(10, 0, 100, pix[k], tex[k]);
        }
      }
      
      if(tex[1] > 10) {
        set(i, j, pix);
      }
      else {
        set(i, j, back_color);
      }
      
    }
  
  }



  renderCounter = renderCounter + num_lines_to_draw;
  updatePixels();

  // print(renderCounter);
  if(renderCounter > Y_STOP) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
     saveArtworkImage(outputFile);
  }

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }

}

