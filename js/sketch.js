// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;
let pencil;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER);
    pencil = new Pencil(windowWidth / 2, windowHeight / 2, random(100, 200), random(200, 400));
}

function draw() {
    // Conditionellle nous permettant de savoir si la souris est appuyée
    // et si le timer est écoulé
    if (frameCount % (timer * 60) == 0) {
        pencil.afficher();
    }
}

class Pencil {
    constructor(x, y, pencilWidth, pencilHeight) {
        this.x = x;
        this.y = y;
        this.pencilWidth = pencilWidth;
        this.pencilHeight = pencilHeight;
    }

    afficher() {
        background(0);
        fill(random(200, 255), random(200, 250), random(0, 65));
        noStroke();
        rect(this.x, this.y, this.pencilWidth, this.pencilHeight);

        triangle(this.x - this.pencilWidth / 2, this.y + this.pencilHeight / 2, this.x + this.pencilWidth / 2, this.y + this.pencilHeight / 2, this.x, this.y + this.pencilHeight);

        stroke(80);
        line(this.x + this.pencilWidth / 3, this.y + this.pencilHeight / 2, this.x + this.pencilWidth / 3, this.y - this.pencilHeight / 2);
        line(this.x - this.pencilWidth / 3, this.y + this.pencilHeight / 2, this.x - this.pencilWidth / 3, this.y - this.pencilHeight / 2);
        line(this.x - this.pencilWidth / 200, this.y + this.pencilHeight / 2, this.x - this.pencilWidth / 200, this.y - this.pencilHeight / 2);

        noStroke();
        fill(random(240, 255), random(150, 185), random(200, 215));
        rect(this.x, this.y - this.pencilHeight / 2, this.pencilWidth, this.pencilHeight / 4);
        fill(random(150, 200));
        rect(this.x, this.y - this.pencilHeight / 3, this.pencilWidth, this.pencilHeight / 7);
    }

}





function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}