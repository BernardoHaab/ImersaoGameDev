class Character {
    xPosition = 0;
    yPosition = height - 135;

    characterWidht = 220;
    characterHeight = 270;


    constructor(image) {

        this.image = image;

        const imageWidht = this.image.width;
        const imageHeight = this.image.height;

        const xMatrix = imageWidht / this.characterWidht;
        const yMatrix = imageHeight / this.characterHeight;


        this.matrix = [];

        for (let y = 0; y < xMatrix; y++) {
            for (let x = 0; x < yMatrix; x++) {
                const xMap = x * this.characterWidht;
                const yMap = y * this.characterHeight;
                this.matrix.push([xMap, yMap]);
            }
        }

        this.currentFrame = 0;
    }

    show() {
        image(this.image,
            this.xPosition, this.yPosition,
            110, 135,
            this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1],
            this.characterWidht, this.characterHeight);

        this.animation();
    }

    animation() {
        this.currentFrame++;
        if (this.currentFrame >= this.matrix.length - 1) {
            this.currentFrame = 0;
        }
    }
}