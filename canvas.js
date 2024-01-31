// Checking if the console is working
// console.log("Radhe Radhe");
// console.log("Hello World!");

var canvas =  document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

// ctx.fillStyle = "#FF0000";
// ctx.fillRect(150, 50, 100, 100);
// ctx.fillRect(350, 150, 100, 100);
// ctx.fillRect(450, 250, 100, 100);


// creating a circle
// ctx.beginPath();
// ctx.arc(250, 200, 20, 0, Math.PI*2);
// ctx.lineWidth = 50;
// ctx.strokeStyle = "red";
// ctx.stroke();

// creating an arbitrary shape
// ctx.beginPath();
// ctx.moveTo(20, 20);
// ctx.lineTo(100, 20);
// ctx.lineTo(175, 90);
// ctx.lineTo(20, 90);
// ctx.lineTo(20, 20);
// ctx.lineTo(175, 200);
// ctx.lineTo(20, 175);
// ctx.closePath();
// ctx.stroke();

// creating Triangle

// ctx.beginPath();
// ctx.moveTo(150, 50);
// ctx.lineTo(100, 100);
// ctx.lineTo(200, 100);
// ctx.lineTo(150, 50);
// ctx.stroke();

// multiple circles
for(var i = 0; i <= 100; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.strokeStyle = "red";
    ctx.stroke();
}


