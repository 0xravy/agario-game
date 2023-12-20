
let player;
const playerSize = 24;

let zoom = 2;

let blobs = [];
const blobSize = 64;

const blobsNumber = 600;
const mapSize = 3000;

const numStart = 100;
const numEnd = 255;
function setup() {
  createCanvas(mapSize, mapSize);

  var randomRGB = [
    Math.floor(random(numStart, numEnd)),
    Math.floor(random(numStart, numEnd)),
    Math.floor(random(numStart, numEnd)),
  ];



  player = new Blob(0, 0, playerSize, randomRGB);

  for (let i = 0; i < blobsNumber; i++) {
    const x = random(-width, width);
    const y = random(-height, height);

    randomRGB = [
      Math.floor(random(numStart, numEnd)),
      Math.floor(random(numStart, numEnd)),
      Math.floor(random(numStart, numEnd)),
    ];

    blobs[i] = new Blob(x, y, random(blobSize - 40, blobSize), randomRGB);
  }

}
//
// setInterval(() => {
//   blobs[blobs.length + 1] = new Blob(x, y, random(blobSize - 40, blobSize), randomRGB);
// }, 50);
//
function draw() {
  
  clear();
  background(220, 10);
  rect(100, 100, 100, 200);

  translate(width / 2, height / 2);
  let newZoom = playerSize / player.r;

  if(zoom >= 0.2) {
    zoom = lerp(zoom, newZoom, 0.1);
  }   console.log(zoom);
  scale(zoom);
  translate(-player.pos.x, -player.pos.y);

  for (let i = blobs.length - 1; i >= 0; i--) {
    const blob = blobs[i];

    if (player.eats(blob)) {
      blobs.splice(i, 1);
    }
    blob.show();
  }

  if (player.pos.x <= -mapSize) player.pos.x = -mapSize; // left wall
  if (player.pos.y <= -mapSize) player.pos.y = -mapSize; // top wall
  if (player.pos.x >= mapSize) player.pos.x = mapSize; // right wall
  if (player.pos.y >= mapSize) player.pos.y = mapSize; // bottom wall

  player.show();
  player.update();
}

