let imageBackground;
let imageCharacter
let scenario;
let song;
let character;

function preload() {
    imageBackground = loadImage("imagens/cenario/floresta.png");
    imageCharacter = loadImage("imagens/personagem/correndo.png");
    song = loadSound("sons/trilha_jogo.mp3")
}

function setup() {
    frameRate(40);
    createCanvas(windowWidth, windowHeight);
    scenario = new Scenario(imageBackground, 3);
    character = new Character(imageCharacter)
    song.loop();
}

function draw() {
    scenario.show();
    scenario.move();

    character.show();

}

