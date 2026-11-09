// Задание 8
// Применив элемент canvas создать мультипликацию по своему усмотрению.
// Движущийся мяч, отскакивающий от границ холста.

var ctx;
var x = 50, y = 50;       // координаты мяча
var dx = 3, dy = 2;       // смещение за один кадр
var radius = 15;

function draw() {
    ctx.clearRect(0, 0, 400, 250);   // очистить холст

    // отрисовка мяча
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#3366cc";
    ctx.fill();

    // отражение от границ холста
    if (x + dx > 400 - radius || x + dx < radius) dx = -dx;
    if (y + dy > 250 - radius || y + dy < radius) dy = -dy;

    x += dx;
    y += dy;
}

function startAnimation() {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    setInterval(draw, 30); // кадры сменяются каждые 30 миллисекунд
}
