let canvas;
let context;
let images = {};
let totalResources = 5;
let numResourcesLoaded = 0;
let fps = 30;
let x = 400;
let y = 190;
let breathInc = 0.1;
let breathDir = 1;
let breathAmt = 0;
let breathMax = 2;
let breathInterval = setInterval(updateBreath, 1000 / fps);
let fpsInterval = setInterval(updateFPS, 1000);
let numFramesDrawn = 0;
let curFPS = 0;

let head;
let body;
let leftArm;
let rightArm;

let monstrAttack = false;
let monsterDead = false;

let headArchive = ['1head', '2head', '3head'];
let bodyArchive = ['1body', '2body', '3body'];
let rightArmArchive = ['1rightArm', '2rightArm', '3rightArm'];
let leftArmArchive = ['1leftArm', '2leftArm', '3leftArm'];

let randomHead = Math.floor(Math.random() * headArchive.length);
let randomBody = Math.floor(Math.random() * bodyArchive.length);
let randomRightArm = Math.floor(Math.random() * rightArmArchive.length);
let randomLefttArm = Math.floor(Math.random() * leftArmArchive.length);


function updateFPS() {

    curFPS = numFramesDrawn;
    numFramesDrawn = 0;
}

function prepareCanvas(canvasDiv, canvasWidth, canvasHeight) {
    canvas = document.createElement('canvas');
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);

    if (typeof G_vmlCanvasManager != 'undefined') {
        canvas = G_vmlCanvasManager.initElement(canvas);
    }
    context = canvas.getContext("2d");

    leftArm = leftArmArchive[randomLefttArm];
    loadImage(leftArm);
    loadImage("1legs");
    body = bodyArchive[randomBody];
    loadImage(body);
    rightArm = rightArmArchive[randomRightArm];
    loadImage(rightArm);
    head = headArchive[randomHead];
    loadImage(head);
}

function loadImage(name) {

    images[name] = new Image();
    images[name].onload = function () {
        resourceLoaded();
    }
    images[name].src = "img/" + name + ".png";
}

function resourceLoaded() {

    numResourcesLoaded += 1;
    if (numResourcesLoaded === totalResources) {

        setInterval(redraw, 1000 / fps);
    }
}

function redraw() {

    canvas.width = canvas.width; // clears the canvas 

    if (monstrAttack) {
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.translate(350, 100);
        context.rotate(70 * Math.PI / 180);
        context.drawImage(images[leftArm], 8, -40);
        context.restore();

    } else {
        if (monsterDead) {
            context.save();
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.translate(350, 100);
            context.rotate(-90 * Math.PI / 180);
            context.drawImage(images[leftArm], -110, 0);
            context.restore();
        } else {
            context.drawImage(images[leftArm], x - 50, y - 36 - breathAmt);
        }
    }

    if (monsterDead) {
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.translate(350, 100);
        context.rotate(-90 * Math.PI / 180);
        context.drawImage(images["1legs"], -100, 50);
        context.drawImage(images[body], -110, 10);
        context.drawImage(images[head], -110, -70);
        context.drawImage(images[rightArm], -70, 10);
        context.restore();
    } else {
        context.drawImage(images["1legs"], x + 10, y - 10);
        context.drawImage(images[body], x, y - 50);
        context.drawImage(images[head], x - 10, y - 125 - breathAmt);
        context.drawImage(images[rightArm], x + 42, y - 42 - breathAmt);
    }

}

function updateBreath() {

    if (breathDir === 1) {
        breathAmt -= breathInc;
        if (breathAmt < -breathMax) {
            breathDir = -1;
        }
    } else { // breath out
        breathAmt += breathInc;
        if (breathAmt > breathMax) {
            breathDir = 1;
        }
    }
}


function monstrAttackAnimation() {
    setTimeout(function () {
        if (!monstrAttack) {
            monstrAttack = true;
            setTimeout(land, 500);
        }
    }, 3000);
}

function monstrDeadAnimation() {
    if (!monsterDead) {
        monsterDead = true;
    }

    setTimeout(function () {
        canvas.className = 'disapearMonstr';
    }, 1000);
}

function land() {
    monstrAttack = false;
}

function aliveMonster() {
    monsterDead = false;
    randomHead = Math.floor(Math.random() * headArchive.length);
    randomBody = Math.floor(Math.random() * bodyArchive.length);
    randomRightArm = Math.floor(Math.random() * rightArmArchive.length);
    randomLefttArm = Math.floor(Math.random() * leftArmArchive.length);
    leftArm = leftArmArchive[randomLefttArm];
    loadImage(leftArm);
    loadImage("1legs");
    body = bodyArchive[randomBody];
    loadImage(body);
    rightArm = rightArmArchive[randomRightArm];
    loadImage(rightArm);
    head = headArchive[randomHead];
    loadImage(head);
    redraw();
    
    randomName();
    setMonsterNameInHTML ();
    canvas.classList.remove('disapearMonstr');
}
