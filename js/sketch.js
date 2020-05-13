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
    if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {

        pencil(windowWidth / 2, windowHeight / 2, random(100, 200), random(200, 400));
    }
}

function pencil(x, y, pencilWidth, pencilHeight) {
    push(); // Start a new drawing state
    fill(0);
    noStroke();
    rect(x, y, pencilWidth, pencilHeight);
    pop(); // Restore original state
}



function mousePressed() {
    // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
    save();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}