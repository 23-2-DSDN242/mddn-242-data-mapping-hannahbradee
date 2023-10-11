let sourceImg=null;
let maskImg=null;
//let renderCounter=0;

// change these three lines as appropiate

let sourceFile = "input_3.jpg";
let maskFile   = "Mask_3.png";
let textureFile = "TexMask_3.png";
let outputFile = "output_3.png";



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


let X_STOP = 1920;
let Y_STOP = 1080;
let OFFSET = 20;


let renderCounter=0;




function draw () {
 
  


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
      
   

      set(i, j, pix);
      
    }
  
  }



  renderCounter = renderCounter + num_lines_to_draw;
  updatePixels();

  // print(renderCounter);
  if(renderCounter > Y_STOP) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }

 
 


//   }
  // renderCounter = renderCounter + 1;
  // if(renderCounter > 10) {
  //   console.log("Done!")
  //   noLoop();
  //   // uncomment this to save the result
  //   // saveArtworkImage(outputFile);
  // }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}


