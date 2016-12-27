function Paddle(xPos, yPos, width, height, speed, context) {
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.context = context;
}

function Ball(xPos, yPos, radius, context) {
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.radius = radius;
    this.context = context;
}

function Player(context) {
    this.paddle = new Paddle(782, 237.5, 8, 75, 10, context);
 }

function Computer(context) {
    this.paddle = new Paddle(10, 237.5, 8, 75,10, context);
}

Paddle.prototype.render = function () {
    this.context.beginPath();
    this.context.rect(this.xPosition, this.yPosition, this.width, this.height);
    this.context.fill();
 };

Ball.prototype.render = function (context) {
    context.beginPath();
    context.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI, false);
    context.strokeStyle = 'black';
    context.stroke();
    context.fillStyle = 'black';
    context.fill();
};

Player.prototype.render = function (context) {
    this.paddle.render(context);
};

Computer.prototype.render = function (context) {
    this.paddle.render(context);
};

var player = new Player();
var computer = new Computer();
var ball = new Ball(400, 275, 10);

function render(context) {
    player.render(context);
    computer.render(context);
    ball.render(context);
}

window.onload = function () {
    var canvas = document.getElementById("pongTable");
    var context = canvas.getContext('2d');
    render(context);
};
