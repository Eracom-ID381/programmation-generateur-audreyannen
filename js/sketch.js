// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER);
}

function draw() {
    // Conditionellle nous permettant de savoir si la souris est appuyée
    // et si le timer est écoulé
    if (frameCount % (timer * 60) == 0) {

        pencil(windowWidth / 2, windowHeight / 2, random(100, 200), random(200, 400));
    }
}

function pencil(x, y, pencilWidth, pencilHeight) {
    fill(0);
    noStroke();
    rect(x, y, pencilWidth, pencilHeight);

    triangle(x - pencilWidth / 2, y + pencilHeight / 2, x + pencilWidth / 2, y + pencilHeight / 2, x, y + 300);
}





function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}