Webcam.set({
height:200,
width:250,
image_format:'jpeg',
jpeg_quality:90
})

Webcamera = document.getElementById("webpreview");

Webcam.attach(Webcamera)

function jailtime() {
    Webcam.snap(function(data_uri) {
        document.getElementById("Hacking").innerHTML = '<img id="something" src="'+data_uri+'">';

    });
}

console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gMgZPK4Lz/model.json",loaded);
function loaded() {
console.log("Model Loaded?");
}

function policedatabase() {
    img = document.getElementById("something");
    classifier.classify(img, gotresult);
}


function gotresult(error, result) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(result)
        document.getElementById("object1").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(5);   
    }
}