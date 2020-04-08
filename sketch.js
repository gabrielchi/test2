var song; 
var fft;
var button;
var w

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('test.mp3');
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();

  fft = new p5.FFT(0.90, 64);
  w = width / 64;
}

function draw() {
  background(255);
  var spectrum = fft.analyze();  
  stroke(255);

  for (var i = 0; i < spectrum.length; i++){
      var amp = spectrum[i];
      var y = map(amp, 0, 256, height, 0);
      noStroke();
      fill(i, 255, 255);
      rect(i *  w, y, w + 2 , height - y);
  }

}

