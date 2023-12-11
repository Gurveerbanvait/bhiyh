//anamation intro

// canvas setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables
let player = {
  x: 400,
  y: 300,
  W: 25,
  h: 25,
  dx: 5,
  dy: 0,
  a: 0.5,
  // speed: 10
  jumpSpeed: -15,
  color: "blue",
};

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

//Draw Function
window.addEventListener("load", draw);

function draw() {
  if (leftPressed) {
    player.x += -player.speed;
  } else if (rightPressed) {
    player.x += player.speed;
  }

  if (upPressed) {
    player.y += -player.speed;
  } else if (downPressed) {
    player.y += player.speed;
  }

  //drawing
  //backround
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // draw player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.W, player.h);

  //animation loop
  requestAnimationFrame(draw);
}

//event stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
  if (e.code === "ArrowLeft") {
    leftPressed = true;
  } else if (e.code === "ArrowRight") {
    rightPressed = true;
  } else if (e.code === "ArrowUp") {
    upPressed = true;
  } else if (e.code === "ArrowDown") {
    downPressed = true;
  }
}

document.addEventListener("keyup", keyupHandler);

function keyupHandler(e) {
  if (e.code === "ArrowLeft") {
    leftPressed = false;
  } else if (e.code === "ArrowRight") {
    rightPressed = false;
  } else if (e.code === "ArrowUp") {
    upPressed = false;
  } else if (e.code === "ArrowDown") {
    downPressed = false;
  }
}

if (player.y + player.h > cnv.height) {
  player.y = cnv.height - player.h;
  player.dy = 0;
}
