function preload(){
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        console.log("mustach x =" + results[0].pose,mustach.x);
        console.log("mustach y =" + results[0].pose,mustach.y);
    }
}

function draw() {
    Image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save('Its-Notable.png');
}