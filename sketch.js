var ground, ground2, ground3, ground4, groundImage;
var lamborghini, lamborghiniImg, lamborghiniImgC1, lamborghiniImgC2, lamborghiniImgC3;
var tesla, teslaImg
var bugatti, bugattiImg;
var nissan, nissanImg;
var toyota, toyotaImg;
var honda, hondaImg;
var porche, porcheImg;
var gasStation, gasStationImg;

var policeCar, policeCarImg;

var redCarObs, redCarObsFlip, redCarObsImg, redCarObsImgFlip;
var blueCarObs, blueCarObsFlip, blueCarObsImg, blueCarObsImgFlip;
var greenCarObs, greenCarObsFlip, greenCarObsImg,greenCarObsImgFlip;

var BPAGE = 0;
var RACE = 1;
var LOSE = 2;
var WIN = 3;
var gasLeft = 20;
var kilometerLeft = 300;

var gameState = BPAGE;

function preload() {
    lamborghiniImg = loadImage("LamborghiniSiánRoadster.png");
    teslaImg = loadImage("TeslaModelSPlaid.png");
    bugattiImg = loadImage("BugattiVeyron16p4.png");
    nissanImg = loadImage("NissanGTR.png");
    toyotaImg = loadImage("ToyotaSupra2021.png");
    hondaImg = loadImage("HondaCivicTypeR.png");
    porcheImg = loadImage("PorscheCarreraGT.png");
    groundImage = loadImage("path.png");
    gasStationImg = loadImage("gasStation.png");

    redCarObsImg = loadImage("TeslaModelSPlaid.png");
    blueCarObsImg = loadImage("LamborghiniSiánRoadster.png");
    greenCarObsImg = loadImage("PorscheCarreraGT.png");

    redCarObsImgFlip = loadImage("redcarflip.png");
    blueCarObsImgFlip = loadImage("bluecarflip.png");
    greenCarObsImgFlip = loadImage("greencarflip.png");

    lamborghiniImgC1 = loadImage("crashL1.png");
    lamborghiniImgC2 = loadImage("crashL2.png");
    lamborghiniImgC3 = loadImage("crashL3.png");

    policeCarImg = loadImage("policeCarPng.png");
}

function setup() {
    createCanvas(1420, 760);

    gasStation = createSprite(710, 50);
    gasStation.addImage(gasStationImg)
    gasStation.scale = 0.3;
    gasStation.velocityY = 0;
    gasStation.visible = false; 

    ground = createSprite(1000, 270, 500, 400);
    ground.addImage(groundImage);
    ground.velocityY = 20;
    ground.scale = 1;
    ground.visible = false;

    ground2 = createSprite(420, 600, 500, 400);
    ground2.addImage(groundImage);
    ground2.velocityY = -20;
    ground2.scale = 1;
    ground2.visible = false;

    ground3 = createSprite(150, 600, 500, 400);
    ground3.addImage(groundImage);
    ground3.velocityY = -20;
    ground3.scale = 1;
    ground3.visible = false;

    ground4 = createSprite(1270, 270, 500, 400);
    ground4.addImage(groundImage);
    ground4.velocityY = 20;
    ground4.scale = 1;
    ground4.visible = false;

    var randomNumber = random(900, 1000);
    redCarObs = createSprite(randomNumber, -800);
    redCarObs.addImage(redCarObsImg);
    redCarObs.velocityY = 2;
    redCarObs.scale = 0.5;
    redCarObs.lifetime = 1400;
    redCarObs.visible = false;

    var randomNumber1 = random(1050, 1150);
    blueCarObs = createSprite(randomNumber1, -1500);
    blueCarObs.addImage(blueCarObsImg);
    blueCarObs.velocityY = 3.5;
    blueCarObs.scale = 0.5;
    blueCarObs.lifetime = 1200;
    blueCarObs.visible = false;

    var randomNumber2 = random(1200, 1350);
    greenCarObs = createSprite(randomNumber2, -800);
    greenCarObs.addImage(greenCarObsImg);
    greenCarObs.velocityY = 1;
    greenCarObs.scale = 0.5;
    greenCarObs.lifetime = 2000;
    greenCarObs.visible = false;

    lamborghini = createSprite(250, 650, 50, 100);
    lamborghini.addImage(lamborghiniImg);
    lamborghini.scale = 0.5;

    tesla = createSprite(400, 650);
    tesla.addImage(teslaImg);
    tesla.scale = 0.5;

    bugatti = createSprite(550, 650);
    bugatti.addImage(bugattiImg);
    bugatti.scale = 0.5;

    nissan = createSprite(700, 650);
    nissan.addImage(nissanImg);
    nissan.scale = 0.5;

    toyota = createSprite(850, 650);
    toyota.addImage(toyotaImg);
    toyota.scale = 0.5;

    honda = createSprite(1000, 650);
    honda.addImage(hondaImg);
    honda.scale = 0.5;

    porche = createSprite(1150, 650);
    porche.addImage(porcheImg);
    porche.scale = 0.5;

    policeCar = createSprite(lamborghini.x - 10, lamborghini.y + 50, 50, 100);
    policeCar.addImage(policeCarImg);
    policeCar.scale = 0.5;
    policeCar.visible = false;

}

function draw() {
    background("green");

    if(redCarObs.y >= 800) {
        redCarObs.y = -800;
    } else if(redCarObs.y >= 800) {
        blueCarObs.y = -1500;
    } else if(redCarObs.y >= 800) {
        greenCarObs.y = -800;
    }

    if(ground.y >= 500) {
        ground.y = 373;
    }

    if(ground2.y < 300) {
        ground2.y = 420;
    }

    if(ground3.y < 300) {
        ground3.y = 420;
    }

    if(ground4.y >= 500) {
        ground4.y = 373;
    }

    if(gameState == BPAGE) {
        background("rgb(100,42,42)");
        fill("white");
        textSize(16);
        text("Lamborghini Sián Roadster", 165, 550);
        text("Tesla Model S Plaid+", 320, 750);
        text("Bugatti Veyron 16.4", 480, 550);
        text("Nissan GT-R", 650, 750);
        text("Toyota Supra 2021", 790, 550);
        text("Honda Civic Type R+", 930, 750);
        text("Porsche Carrera GT", 1070, 550);

        textSize(50);
        fill("lightblue");
        text("CAR THEIF GAME", 500, 100);

        fill("red");
        textSize(40);
        text("Instructions", 620, 150)
        fill("black");
        textSize(20);
        text("You are the thief. You stole some precious gems and the police are following you. They have all the nessary weapons they need to take you down.", 50, 200);
        text("Lucky for you because a set of the fastest race cars. In the cars below pick the car you want. Choose wisely, because once you pick one, you can't", 50, 240);
        text("change it. Sadly, you are 300 km away from your home, which is hidden in a secure forest. To get there you have to pass the obstacles the police", 60, 280);
        text("have set infront of you. So, what are you waiting for? Pick a car and get out of this area!", 290, 320);
    }

    if(gameState == BPAGE && mousePressedOver(lamborghini)) {
        gameState = RACE;
        lamborghini.x = 1016;

        
    }  else if(gameState == RACE) {
        ground.visible = true;
        ground2.visible = true;
        ground3.visible = true;
        ground4.visible = true;
        policeCar.visible = true;
        textSize(20);
        if(gasLeft > 7) {
            policeCar.x = lamborghini.x - 5;
            policeCar.y = lamborghini.y + 190;
        }

        fill("black");
        text("Gas Left: " + gasLeft, 645, 100);
        text("Kilometers Left: " +kilometerLeft, 620, 130);

        if(frameCount%50 == 0 && gasLeft >= 1) {
            gasLeft -= 1;
        }

        lamborghini.y = 450;

        if(lamborghini.isTouching(ground2) || lamborghini.isTouching(ground3)) {
            if(frameCount%20 == 0 && gasLeft >= 1) {
                kilometerLeft += 1;
            } 
        } else if(lamborghini.isTouching(ground) || lamborghini.isTouching(ground4)) {
            if(frameCount%30 == 0 && gasLeft >= 1) {
                kilometerLeft -= 1;
            }
        }
        
        if(keyDown("left") && gasLeft >= 1) {
            lamborghini.x = lamborghini.x-6;
        } else if(keyDown("right") && gasLeft >= 1) {
            lamborghini.x = lamborghini.x+6;
        }

        if(gasLeft <= 15) {
            // gasStation.debug = true;
            gasStation.velocityY = 5;
            gasStation.visible = true; 
            if(lamborghini.isTouching(gasStation)) {
                gasStation.velocityY = 0; 
                gasLeft+=80;
                gasStation.y = 50; 
                gasStation.visible = false; 
            }
        }

        if(gasLeft <= 0) {
            ground.velocityY=0;
            ground2.velocityY=0;
            ground3.velocityY=0;
            ground4.velocityY=0;
            gameState = LOSE;
        }

        if(gasLeft <= 7) {
            policeCar.velocityY = -0.3;
            policeCar.x = lamborghini.x - 5;
        }

        if(policeCar.isTouching(lamborghini)) {
            policeCar.velocityY = 0;
            gameState = LOSE;
        }

        if(frameCount%300 == 0) {
            redCarObs.visible = true;
        } else if(frameCount%400 == 0) {
            blueCarObs.visible = true;
        } else if(frameCount%500 == 0) { 
            greenCarObs.visible = true;       
        }

        if(lamborghini.isTouching(redCarObs)) {
            lamborghini.scale = 1.5;
            lamborghini.addImage(lamborghiniImgC2);
            redCarObs.velocityY = 4;
            redCarObs.velocityX = -4;
        } else if(lamborghini.isTouching(blueCarObs)) {
            lamborghini.scale = 1.5;
            lamborghini.addImage(lamborghiniImgC3);
            blueCarObs.velocityY = 4;
            blueCarObs.velocityX = -4;
            gameState = LOSE;
        } else if(lamborghini.isTouching(greenCarObs)) {
            lamborghini.scale = 1.5;
            lamborghini.addImage(lamborghiniImgC1);
            greenCarObs.velocityY = 4;
            greenCarObs.velocityX = 4;
        }
        // lamborghini.bounceOff(redCarObs);
        // lamborghini.bounceOff(blueCarObs);
        // lamborghini.bounceOff(greenCarObs);

        if(frameCount%300 == 0) {
            var randomNumber = random(100, 200);
            redCarObsFlip = createSprite(randomNumber, -50);
            redCarObsFlip.addImage(redCarObsImgFlip);
            redCarObsFlip.velocityY = 15;
            redCarObsFlip.scale = 0.5;
            redCarObsFlip.lifetime = 500;
        } else if(frameCount%400 == 0) {
            var randomNumber = random(200, 350);
            blueCarObsFlip = createSprite(randomNumber, -50);
            blueCarObsFlip.addImage(blueCarObsImgFlip);
            blueCarObsFlip.velocityY = 15;
            blueCarObsFlip.scale = 0.5;
            blueCarObsFlip.lifetime = 500;
        } else if(frameCount%500 == 0) {
            var randomNumber = random(350, 500);
            greenCarObsFlip = createSprite(randomNumber, -50);
            greenCarObsFlip.addImage(greenCarObsImgFlip);
            greenCarObsFlip.velocityY = 15;
            greenCarObsFlip.scale = 0.5;
            greenCarObsFlip.lifetime = 700;
        }

        if(kilometerLeft <= 0) {
            gameState = WIN;
        }

        tesla.destroy();
        bugatti.destroy();
        nissan.destroy();
        toyota.destroy();
        honda.destroy();
        porche.destroy();
    } 
    if(gameState == LOSE) {
        textSize(20);
        fill("white");
        text("Oh oh! You got caught.", 600, 380)
        greenCarObs.destroy();
        blueCarObs.destroy();
        redCarObs.destroy();
        ground.velocityY=0;
        ground2.velocityY=0;
        ground3.velocityY=0;
        ground4.velocityY=0;
    }

    if(gameState == WIN) {
        textSize(20);
        fill("white");
        text("Yahoo! You got home and escaped.", 600, 380)
        greenCarObs.destroy();
        blueCarObs.destroy();
        redCarObs.destroy();
        ground.velocityY=0;
        ground2.velocityY=0;
        ground3.velocityY=0;
        ground4.velocityY=0;
    }
    
    // else if(gameState == BPAGE && mousePressedOver(tesla)) {
    //     gameState = RACE;
    //     background("red");

    //     tesla.x = 710;
    //     lamborghini.destroy();
    //     bugatti.destroy();
    //     nissan.destroy();
    //     toyota.destroy();
    //     honda.destroy();
    //     porche.destroy();
    // } else if(gameState == BPAGE && mousePressedOver(bugatti)) {
    //     gameState = RACE;
    //     background("grey");

    //     bugatti.x = 710;
    //     tesla.destroy();
    //     lamborghini.destroy();
    //     nissan.destroy();
    //     toyota.destroy();
    //     honda.destroy();
    //     porche.destroy();
    // } else if(gameState == BPAGE && mousePressedOver(nissan)) {
    //     gameState = RACE;
    //     background("white");

    //     nissan.x = 710;
    //     tesla.destroy();
    //     bugatti.destroy();
    //     lamborghini.destroy();
    //     toyota.destroy();
    //     honda.destroy();
    //     porche.destroy();
    // } else if(gameState == BPAGE && mousePressedOver(toyota)) {
    //     gameState = RACE;
    //     background("yellow");

    //     toyota.x = 710;
    //     tesla.destroy();
    //     bugatti.destroy();
    //     nissan.destroy();
    //     lamborghini.destroy();
    //     honda.destroy();
    //     porche.destroy();
    // } else if(gameState == BPAGE && mousePressedOver(honda)) {
    //     gameState = RACE;
    //     background("orange");

    //     honda.x = 710;
    //     tesla.destroy();
    //     bugatti.destroy();
    //     nissan.destroy();
    //     toyota.destroy();
    //     lamborghini.destroy();
    //     porche.destroy();
    // } else if(gameState == BPAGE && mousePressedOver(porche)) {
    //     gameState = RACE;
    //     background("green");

    //     porche.x = 710;
    //     tesla.destroy();
    //     bugatti.destroy();
    //     nissan.destroy();
    //     toyota.destroy();
    //     lamborghini.destroy();
    //     honda.destroy();
    // }

    drawSprites();
}