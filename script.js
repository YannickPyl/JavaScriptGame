const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = '/media/shadow_dog.png';
const spriteWidth = 575;
/*
sprite width = 6876px
12 columns
=> 6876 / 12 = 573
*/
const spriteHeight = 523;
/*
sprite height = 5230px
10 rows
=> 5230 / 10 = 523
*/
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % 6;
    /*
    position vraagt als return value 'int' (want is Math.floor).
    staggerFrames = 5 dus ->
    gameFrame 0/5 = 0.0 -> Math.floor(0) = 0 -> 0 % 6 = 0
    gameFrame 1/5 = 0.2 -> Math.floor(0.2) = 0 -> 0 % 6 = 0
    gameFrame 2/5 = 0.4 -> Math.floor(0.4) = 0 -> 0 % 6 = 0
    ...
    gameFrame 5/5 = 1 => Math.floor(1) = 1 -> 1 % 6 = 1
    1 modulus (%) 6 = 1 want 1/6 = 0 en remainder van 0 naar 1 = 1
    */

    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
    if(gameFrame % staggerFrames == 0) {
        if(frameX < 6) frameX++;
        else frameX = 0
        
    }
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();

//https://www.youtube.com/watch?v=CY0HE277IBM&list=PLYElE_rzEw_uryBrrzu2E626MY4zoXvx2
//26'00"

/*
LEGENDE:
ctx = context
sx = source X
sy = source Y
sw = source width
sh = source height
dx = destination X
dy = destination Y
dw = destination width
dh = destination height
*/