let video;
let yolo;
let status;
let objects = [];

function renderAnimations(contatinerId, animAsset, isLoop) {
  return bodymovin.loadAnimation(
      {
          container: document.getElementById(contatinerId),
          path: animAsset,
          renderer: 'svg',
          loop: isLoop,
          autoplay: isLoop,
      }
  );
}

function init(){
  renderAnimations('visual-id-div','../assets/animations/blind_anim.json',true);
}

init();

function setup() {
  var canvas=createCanvas(320, 240);
  canvas.parent('canvs-div');
  video = createCapture(VIDEO);
  video.size(320, 240);

  // Create a YOLO method
  yolo = ml5.YOLO(video, startDetecting);

  // Hide the original video
  video.hide();
  status = select('#status');
}


function draw() {
  image(video, 0, 0, width, height);
  for (let i = 0; i < objects.length; i++) {
    noStroke();
    fill(0, 255, 0);
    text(objects[i].className, objects[i].x * width, objects[i].y * height - 5);
    console.log(objects[i]);
    speak(objects[i].className);
    noFill();
    strokeWeight(4);
    stroke(0, 255, 0);
    rect(objects[i].x * width, objects[i].y * height, objects[i].w * width, objects[i].h * height);
  }

 
  // say a message
  function speak(text, callback) {
      var u = new SpeechSynthesisUtterance();
      u.text = text;
      u.lang = 'en-US';
   
      u.onend = function () {
          if (callback) {
              callback();
          }
      };
   
      u.onerror = function (e) {
          if (callback) {
              callback(e);
          }
      };
   
      speechSynthesis.speak(u);
  }}

function startDetecting() {
  status.html('Model loaded!');
  detect();
}

function detect() {
  yolo.detect(function(err, results) {
    objects = results;
    detect();
  });
}