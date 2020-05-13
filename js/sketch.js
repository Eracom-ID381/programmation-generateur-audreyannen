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
    background(0);
    fill(random(200, 255), random(200, 250), random(0, 65));
    noStroke();
    rect(x, y, pencilWidth, pencilHeight);

    triangle(x - pencilWidth / 2, y + pencilHeight / 2, x + pencilWidth / 2, y + pencilHeight / 2, x, y + pencilHeight);

    stroke(80);
    line(x + pencilWidth / 3, y + pencilHeight / 2, x + pencilWidth / 3, y - pencilHeight / 2);
    line(x - pencilWidth / 3, y + pencilHeight / 2, x - pencilWidth / 3, y - pencilHeight / 2);
    line(x - pencilWidth / 200, y + pencilHeight / 2, x - pencilWidth / 200, y - pencilHeight / 2);

    noStroke();
    fill(random(240, 255), random(150, 185), random(200, 215));
    rect(x, y - pencilHeight / 2, pencilWidth, pencilHeight / 4);
    fill(random(150, 200));
    rect(x, y - pencilHeight / 3, pencilWidth, pencilHeight / 7);
}





function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}