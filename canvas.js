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
// for(var i = 0; i <= 100; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     ctx.beginPath();
//     ctx.arc(x, y, 20, 0, Math.PI * 2);
//     ctx.strokeStyle = "red";
//     ctx.stroke();
// }

// ANIMATING CICRLES
// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var dy = 3;
// var dx = 3;
// var radius = 30;
// function animate(){
//     requestAnimationFrame(animate);

//     ctx.clearRect(0, 0, innerWidth, innerHeight);

//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2);
//     ctx.strokeStyle = "red";
//     ctx.stroke();

//     if((x + radius) > innerWidth || (x - radius) < 0){
//         dx = -dx;
//     }

//     if((y + radius) > innerHeight || (y - radius) < 0){
//         dy = -dy;
//     }

//     x += dx;
//     y += dy;

// }

// animate();

// INTERACTIVITY OF THE ELEMENTS PRESENT IN THE CANVAS

var mouse = {
    x: undefined,
    y: undefined
}

var colorArray = [
    '#0FC2C0',
    '#0CABA8',
    '#008F8C',
    '#015958',
    '#023535'
]

var maxRadius = 50;

window.addEventListener('mousemove', 
function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})


// CREATING MULTIPLE ANIMATED CIRCLES

function Circle(x, y, radius, dx, dy){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.minRadius = radius;

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    this.update = function(){
        if((this.x + this.radius) > innerWidth || (this.x - this.radius) < 0){
            this.dx = -this.dx;
        }
    
        if((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        // interactivity

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y -this.y < 50 && mouse.y - this.y > -50){
            if(this.radius < maxRadius)
            this.radius+=1;
        }

        else if(this.radius > this.minRadius){
            this.radius-=1;
        }
        this.draw();
    }
}

// var circle = new Circle(200, 200, 20, 3, 3);
var circleArray = [];


function init(){
    circleArray = [];
    for(let i = 0; i < 800; i ++){
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dy = Math.random() - 0.5;
        var dx = Math.random() - 0.5;
        var radius = Math.random() * 3 + 1;
        circleArray.push(new Circle(x, y, radius, dx, dy));
    }
}

function animate(){
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

init();
animate();
