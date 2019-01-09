var video = document.getElementById('video');
var videoStatus = document.getElementById('videoStatus');
var loading = document.getElementById('loading');
var catButton = document.getElementById('catButton');
var dogButton = document.getElementById('dogButton');
var amountOfCatImages = document.getElementById('amountOfCatImages');
var amountOfDogImages = document.getElementById('amountOfDogImages');
var train = document.getElementById('train');
var loss = document.getElementById('loss');
var result = document.getElementById('result');
var predict = document.getElementById('predict');
var featureExtractor;
var classifier;

// A variable to store the total loss
let totalLoss = 0;
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
    renderAnimations('bts-anim','../assets/animations/bts_anim.json',true);
}

init();
if (navigator.mediaDevices.getUserMedia) {
    console.log('nothing 1')
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            console.log('stream');
            video.srcObject = stream;
            //video.play();
            console.log('loaded');
            featureExtractor = ml5.featureExtractor('MobileNet', modelLoaded);
            // Create a new classifier using those features
            classifier = featureExtractor.classification(video, videoReady);

        })
        .catch((err) => { console.log('error'); });
} else {
    console.log('nothing')
}

// A function to be called when the model has been loaded
function modelLoaded() {
    loading.innerText = 'Model loaded!';
}

// Extract the already learned features from MobileNet

// Predict the current frame.
function predict() {
    classifier.predict(gotResults);
}

// A function to be called when the video is finished loading
function videoReady() {
    videoStatus.innerText = 'Video ready!';
    catButton.onclick = function () {
        classifier.addImage('cat');
        amountOfCatImages.innerText = Number(amountOfCatImages.innerText) + 1;
    }

    // When the Cat button is pressed, add the current frame
    // from the video with a label of cat to the classifier
    dogButton.onclick = function () {
        classifier.addImage('dog');
        amountOfDogImages.innerText = Number(amountOfDogImages.innerText) + 1;
    }

    // When the train button is pressed, train the classifier
    // With all the given cat and dog images
    train.onclick = function () {
        classifier.train(function (lossValue) {
            if (lossValue) {
                totalLoss = lossValue;
                loss.innerHTML = 'Loss: ' + totalLoss;
            } else {
                loss.innerHTML = 'Done Training! Final Loss: ' + totalLoss;
            }
        });
    }

    // Show the results
    function gotResults(err, data) {
        // Display any error
        if (err) {
            console.error(err);
        }
        if (data == 'cat') {
            result.innerText = 'Tumour';
        } else {
            result.innerText = 'Non Tumour';
        }
        classifier.classify(gotResults);
    }

    // Start predicting when the predict button is clicked
    predict.onclick = function () {
        classifier.classify(gotResults);
    }
}

// When the Cat button is pressed, add the current frame
// from the video with a label of cat to the classifier
