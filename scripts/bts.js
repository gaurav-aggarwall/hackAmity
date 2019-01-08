
function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById('image').setAttribute('src',e.target.result);
      document.getElementById('image').setAttribute('width',150);
      document.getElementById('image').setAttribute('height',200);
    };

    reader.readAsDataURL(input.files[0]);
    predictModel();
  }
}

function predictModel() {
  console.log('reached');
  const image = document.getElementById('image');
  // The result tag in the HTML
  const result = document.getElementById('result');
  // The probability tag in the HTML
  const probability = document.getElementById('probability');

  // Initialize the Image Classifier method with MobileNet
  const classifier = ml5.imageClassifier('MobileNet', function () {
    console.log('Model Loaded!');
    classifier.predict(image, function (err, results) {
      result.innerText = results[0].className;
      probability.innerText = results[0].probability.toFixed(4);
    });
  });
}
// Make a prediction with the selected image
// This will return an array with a default of 10 options with their probabilities
