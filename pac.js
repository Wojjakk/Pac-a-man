const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw(){
  ctx.beginPath();
  ctx.fillStyle = "#6945ED";
  ctx.arc(x, y, playerwidth, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.rect(u, v, 700, 700);
  ctx.stroke();
}
var x = 100;
var y = 100;
var playerwidth = 40;
var dirx = 0;
var diry = 0;
var u = 50;
var v = 50;

setInterval(() => {
  x += dirx;  
  y += diry;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  }, 1000/75);


  document.addEventListener('keydown', (e) =>{
    console.log(`${e.code}`);
    switch(e.code) {
    case 'KeyA':
     dirx = -2;
     diry = 0;
      break;
    case 'KeyD':
      dirx = 2;
      diry = 0;
      break;
    case 'KeyW':
      diry = -2;
      dirx = 0;
      break;
    case 'KeyS':
      diry = 2;
      dirx = 0;
      break;
  }
  });


    
