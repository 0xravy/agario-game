var playerName = prompt('Enter your name')
document.getElementById("playerName").innerHTML = playerName;

const canvas = document.getElementsByTagName("canvas");

let bg;
var blob;
var blobs = [];
var zoom = 10;


//! ======================================
function setup() {
    createCanvas(3000, 3000);
    blob = new Blob(0, 0, 25);
    blob1 = new Blob(80, 80, 25);

    
    for (var i = 0; i < 1000; i++) {
        var x = random(-width, width);
        var y = random(-height, height);
        blobs[i] = new Blob(x, y, 10);
    }
    
}
//! ======================================
function draw() {



    background(0)


    document.getElementById('playerScore').innerHTML = int(blob.r);
    background(0);

    translate(width/2, height/2);
    var newzoom = 80 / blob.r;
    zoom = lerp(zoom, newzoom, 0.1);
    scale(zoom)
    translate(-blob.pos.x, -blob.pos.y)

    for (var i = blobs.length-1; i >= 0; i--) {
        blobs[i].show();
        if (blob.eats(blobs[i])) {
            blobs.splice(i, 1)
        }
        if (blob1.eats(blobs[i])) {
            blobs.splice(i, 1)
        }

    }

    //
    blob1.show();
    blob1.update();
    blob.show();
    blob.update();

}
