//review delete unneeded after working
//  let branchVal;
let slider;
// let button
// val = 255
// lval = 0
tranVal = 0
// let chk1;
// let chk2;
// let chk3;
// let r, g, b, r2, g2, b2, r3, g3, b3;





//needed for sure
let rand;
let randArray = [];
let loops;
let branchLength = 20;
let angle;
let rAngle;
let nrAngle;
let val;
let sliderA;
let sliderB;
let sliderC;
let weight;
//end needed

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth/1.2, windowHeight);
  frameRate(.4);
  stroke('#FAF9F6');
      background('#000035')



strokeWeight(1);




  canvas.parent('mainDTBody');


  // h2Canvas = createElement('h2', 'Background Color');
  // // ps = createP('Background Color');
  // h2Canvas.parent('backgroundColor');
  // Stanbutton = createButton('White');
  // Stanbutton.addClass('Button');
  // Stanbutton.addClass('ButtonActive');
  // Stanbutton.parent('backgroundColor');
  // // button.position(19,19);
  // Stanbutton.mousePressed(changeBGstandard);
  //
  // Invbutton = createButton('Black');
  // Invbutton.addClass('Button');
  // Invbutton.parent('backgroundColor');
  // // button.position(19,19);
  // Invbutton.mousePressed(changeBG);


  // Sliders!
  h2Canvas2 = createElement('h2', 'Branch length');
  h2Canvas2.parent('ForLoop');
  pA = createP('Branch to Galaxy');
  pA.parent('ForLoop');
  sliderA = createSlider(-branchLength, 0, -branchLength).class('slider');
  sliderA.parent('ForLoop');
  let branchVal = sliderA.value();



  h2Canvas3 = createElement('h2', 'Angle');
  h2Canvas3.parent('QV1');
  p2 = createP('2 to 10');
  p2.parent('QV1');
  sliderB = createSlider(4, 12, 8).class('slider');
   // slider2.position(20,160);
  sliderB.parent('QV1');
  // valueDisplayer2 = createP();
  // valueDisplayer2.parent('menu');

  // sliderB = createSlider(2, 10, 8);
  // sliderB.position(10, 40);
  // sliderB.style('width', '80px');





  // p3 = createP('x-coordinate for the anchor point');
  // p3.parent('QV1');
  // slider3 = createSlider(0, 255, 120).class('slider');
  //  // slider3.position(20,190);
  // slider3.parent('QV1');
  // // valueDisplayer3 = createP();
  // // valueDisplayer3.parent('menu');
  //
  // p4 = createP('y-coordinate for the anchor point');
  // p4.parent('QV1');
  // slider4 = createSlider(0, 255, 120).class('slider');
  //  // slider4.position(20,220);
  // slider4.parent('QV1');
  // valueDisplayer4 = createP();
  // valueDisplayer4.parent('menu');

  h2Canvas3 = createElement('h2', 'Loops');
  h2Canvas3.parent('QV2');
  p5 = createP('Ungrow to Grow');
  p5.parent('QV2');
  sliderC = createSlider(3, 11, 8).class('slider');
   // slider5.position(20,250);
  sliderC.parent('QV2');
//   sliderC = createSlider(3, 10, 8);
// sliderC.position(10, 70);
// sliderC.style('width', '80px');


  // valueDisplayer5 = createP();
  // valueDisplayer5.parent('menu');
  h2Canvas4 = createElement('h2', 'Stroke Weight');
  h2Canvas4.parent('QV3');
  p6 = createP('Heavy to Light');
  p6.parent('QV3');
  sliderD = createSlider(0, 50, 10).class('slider');
   // slider6.position(20,280);
   sliderD.parent('QV3');
   // valueDisplayer6 = createP();
   // valueDisplayer6.parent('menu');

   // h2Canvas5 = createElement('h2', 'Transform');
   // h2Canvas5.parent('transform');
   // p7 = createP('Rotate X');
   // p7.parent('transform');
   // slider7 = createSlider(1, 20, 1).class('slider');
   //  // slider6.position(20,280);
   //  slider7.parent('transform');
    // valueDisplayer7 = createP();
    // valueDisplayer7.parent('menu');

    // p8 = createP('Rotate Y');
    // p8.parent('menu');
    // slider8 = createSlider(0, 300, 0).class('slider');
    //  // slider6.position(20,280);
    // slider8.parent('menu');



   // Buttons!
   //
   //
   // pt = createP('Translate');
   // pt.parent('transform');
   // TranButtonOff = createButton('Off');
   // TranButtonOff.parent('transform');
   // TranButtonOff.addClass('ButtonActive');
   // TranButtonOff.addClass('Button');
   // // button.position(20, 400);
   // TranButtonOff.mousePressed(translateOff);
   //
   // TranButtonOn = createButton('On');
   // TranButtonOn.parent('transform');
   // // TranButtonOn.addClass('ButtonActive');
   // TranButtonOn.addClass('Button');
   // // button.position(20, 400);
   // TranButtonOn.mousePressed(translateOn);
   //
   //   p9 = createP('Translate');
   //   p9.parent('transform');
   //   slider9 = createSlider(0, 5, tranVal).class('slider');
   //   // slider6.position(20,280);
   //   slider9.parent('transform');
   //   // valueDisplayer9 = createP();
   //   // valueDisplayer9.parent('menu');
   //   p9.hide();
   //   slider9.hide();

   Savebutton = createButton('Save Image');
   Savebutton.parent('save');
   Savebutton.addClass('Button');
   Savebutton.addClass('Save');
   // button.position(20, 400);
   Savebutton.mousePressed(downloadPNG);

   // Savebutton = createButton('Reset Canvas');
   // Savebutton.parent('save');
   // Savebutton.addClass('Button');
   // // button.position(20, 400);
   // Savebutton.mousePressed(resetCanvas);

   // Savebutton = createButton('Add to Gallery');
   // Savebutton.parent('menu');
   // Savebutton.addClass('Button');
   // // button.position(20, 400);
   // Savebutton.mousePressed(galleryRun);

}

function downloadPNG() {
  saveCanvas();
}

// function fGenerator(string) {
//     for (let charcter of string) {
//       if (character == 'F') {
//         randArray = [random(angle,-angle)];
//       }
//     }
//   }
// function resetCanvas() {
//   reset();
// }

// function galleryRun() {
//   /**
//  * Start Here with the mousepressed event or some other event handler
//  */
//   canvas.elt.toBlob(
//     function (blobFile) {
//       console.log(blobFile);
//       addToAlbum(blobFile, "album1");
//     },
//     "PNG",
//     1
//   );
// }

// function addToAlbum(file, albumName) {
//   var albumPhotosKey = encodeURIComponent(albumName) + "/";
//   var fileName = "imageat" + Date.now() + ".png";
//   var photoKey = albumPhotosKey + fileName;
//
//   // Use S3 ManagedUpload class as it supports multipart uploads
//   var upload = new AWS.S3.ManagedUpload({
//     params: {
//       Bucket: "drawingtoolgallerybucket",
//       Key: photoKey,
//       Body: file,
//       ACL: "public-read"
//     }
//   });
//
//   var promise = upload.promise();
//
//   promise.then(
//     function (data) {
//       //alert("Successfully uploaded photo.");
//       console.log("photo loading success");
//       viewAlbum(albumName);
//     },
//     function (err) {
//       console.log("error loading photo", err.message);
//       //return alert("There was an error uploading your photo: ", err.message);
//     }
//   );
//
// }


// chk1.onchange = function() {
//   if (chk1.checked) {
//     stroke(23, 240, 6);
//   }
// }

function changeBGstandard() {
  val = 255;
  lval = 0;
  Stanbutton.addClass('ButtonActive');
  Invbutton.removeClass('ButtonActive');

  // background(val);
}

function changeBG() {
  val = 0;
  lval = 255;
  Invbutton.addClass('ButtonActive');
  Stanbutton.removeClass('ButtonActive');
  // background(val);
}

function translateOff() {
    tranVal = 0;
    TranButtonOff.addClass('ButtonActive');
    TranButtonOn.removeClass('ButtonActive');
    p9.hide();
    slider9.hide();
}

function translateOn() {
    // tranVal = 3;

    TranButtonOn.addClass('ButtonActive');
    TranButtonOff.removeClass('ButtonActive');



    p9.show();
    slider9.show();
    tranVal = slider9.value();
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

  // tranVal = slider9.value();




//start
//
//
function draw() {
   // translate(width/2, height/2);
  val=   sliderA.value();
    background('#000035')
  angleNumber = sliderB.value();
  angle = Math.PI / angleNumber;
  loops = sliderC.value();
  weight = sliderD.value();
  // clear();
// background(val);
  // nrAngle = random(-angle);
  // clear();
  // noLoop();
  // clear();
      let turtleString = "B";
    for (let i=0; i < loops; i++) {

   turtleString = turtleString.replaceAll("B","F+[B+]-B[-B]FF");
  // noLoop();
    }


  // turtleString.replaceAll("F","F+[F+]-F[-F]");
 print(turtleString);
 // run he turtlestring array through for loop to append random angle numbers to a new array thatt will be looped hrough in the function below
  //print();
  // stroke('white');
  // strokeWeight(branchLength / 10);
  translate(width/2,height/1.1);
  renderString(turtleString);

function renderString(string) {

  for (let character of string) {
    if (character == 'F') {
      rand = random(angle,-angle);

      // noLoop();
      rotate(rand);

          // rotate(rAngle);
        strokeWeight(branchLength / weight);
      // line(0, 0, 0, -branchLength);
            line(0, 0, 0, val);

      translate(0, -branchLength);
      // F++
      // noLoop();
      // strokeWeight(branchLength/50);
      // line(0, 0, 0, -branchLength);
      // //  line(0, 0, -branchLength, 0);
      // // line(-branchLength, 0, 0, 0);
      // translate(0, -branchLength);
    } else if (character == '+') {
      rotate(angle);
    } else if (character == '-') {
      rotate(-angle);
    } else if (character == '[') {
      branchLength /= 2;
      push();
    } else if (character == ']') {
      branchLength *= 2;
      pop();
    }
  }
}









  // clear();

// //   background(val);
// // for (x = 2; x <= slider1.value()*2.5; x = x+ 3)
// //   for (y = 0; y <= 300; y = y +10) {
// //
//  branchVal = slider1.value();
//
//background('#000035')
// stroke('#FAF9F6');

// turtleString.replaceAll("F","F+[F+]-F[-F]");
// print(turtleString);
// stroke('white');
// strokeWeight(10);
// translate(width/2,height/1.1);
// renderString(turtleString);
//     noFill();
//     beginShape();
//     stroke(lval);
//
//     if(chk1.checked){
//       stroke(r, g, b);
//     }
//     strokeWeight(.06);
//     vertex(200, slider2.value()*1.5);
//     quadraticVertex(x/6, y/PI, slider3.value(), slider4.value());
//     endShape();
//     beginShape();
//     stroke(lval);
//     if(chk2.checked){
//       stroke(r2, g2, b2);
//     }
//     strokeWeight(.03);
//     vertex(10, slider5.value());
//     quadraticVertex(x/PI, y/HALF_PI, 30, 20);
//     endShape();
//     beginShape();
//       stroke(lval);
//       if(chk3.checked){
//         stroke(r3, g3, b3);
//       }
//     strokeWeight(0.05);
//     vertex(100, slider6.value()*1.5);
//     quadraticVertex(x, y, 300, 200);
//     endShape();
//     rotate(x*slider7.value()*3);
//     translate(slider9.value()*tranVal, slider9.value()*tranVal);
//
//
//
//     }
//       valueDisplayer1.html('For (x = 2; x <=' + slider1.value() + ' * 2.5; x = x+ 3)');
//
  }

//end









  // valueDisplayer1.html('The value is '+slider1.value());
  // valueDisplayer2.html('The value is '+slider2.value());
  // valueDisplayer3.html('The value is '+slider3.value());
  // valueDisplayer4.html('The value is '+slider4.value());
  // valueDisplayer5.html('The value is '+slider5.value());
  // valueDisplayer6.html('The value is '+slider6.value());
  // valueDisplayer7.html('The value is '+slider7.value());
  // // valueDisplayer8.html('The value is '+slider1.value());
  // valueDisplayer9.html('The value is '+slider9.value());
  // rotate(y*slider8.value());
  // noLoop();


//  pos = pos + slider.value();
//  pos2 = pos2 + slider2.value();
