import './index.scss';
import MyUser from './assets/Male-3-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const spriteW = 48;
const spriteH = 48;
const shots = 3;
let position = 0;
let cycle = 0;

const buttonPressed = {
  bottom: false,
  left: false,
  right: false,
  top: false,
};

let pY = 300 - spriteW / 2;
let pX = 300 - spriteH / 2;

function keyDownHandler(e) {
  switch (e.key) {
    case 'Down':
      buttonPressed.bottom = true;
      break;
    case 'ArrowDown':
      buttonPressed.bottom = true;
      break;
    case 'Up':
      buttonPressed.top = true;
      break;
    case 'ArrowUp':
      buttonPressed.top = true;
      break;
    case 'Left':
      buttonPressed.left = true;
      break;
    case 'ArrowLeft':
      buttonPressed.left = true;
      break;
    case 'Right':
      buttonPressed.right = true;
      break;
    case 'ArrowRight':
      buttonPressed.right = true;
      break;
    default:
      break;
  }
}

function keyUpHandler(e) {
  switch (e.key) {
    case 'Down':
      buttonPressed.bottom = false;
      break;
    case 'ArrowDown':
      buttonPressed.bottom = false;
      break;
    case 'Up':
      buttonPressed.top = false;
      break;
    case 'ArrowUp':
      buttonPressed.top = false;
      break;
    case 'Left':
      buttonPressed.left = false;
      break;
    case 'ArrowLeft':
      buttonPressed.left = false;
      break;
    case 'Right':
      buttonPressed.right = false;
      break;
    case 'ArrowRight':
      buttonPressed.right = false;
      break;
    default:
      break;
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = MyUser;

ctx.strokeStyle = '#7FFF00';
for (let i = 0; i < 600; i += 20) {
  for (let j = 0; j < 600; j += 20) {
    ctx.moveTo(i - 4, j - 4);
    ctx.quadraticCurveTo(i, j, i + 6, j + 3);
  }
}

img.addEventListener('load', () => {
  setInterval(() => {
    switch (true) {
      case buttonPressed.bottom:
        position = 0;
        if (pY + 50 >= 600) {
          pY = 550;
        } else {
          pY += 10;
        }
        cycle = (cycle + 1) % shots;
        break;
      case buttonPressed.top:
        position = spriteW * 3;
        if (pY <= 0) {
          pY = 0;
        } else {
          pY -= 10;
        }
        cycle = (cycle + 1) % shots;
        break;
      case buttonPressed.left:
        position = spriteW;
        if (pX <= 0) {
          pX = 0;
        } else {
          pX -= 10;
        }
        cycle = (cycle + 1) % shots;
        break;
      case buttonPressed.right:
        position = spriteW * 2;
        if (pX + 50 >= 600) {
          pX = 550;
        } else {
          pX += 10;
        }
        cycle = (cycle + 1) % shots;
        break;
      default:
        break;
    }
    ctx.clearRect(0, 0, 600, 600);

    ctx.fillStyle = '#719200';
    ctx.fillRect(0, 0, 600, 600);
    ctx.stroke();
    ctx.drawImage(img, cycle * spriteW, position, spriteW, spriteH, pX, pY, 48, 48);
  }, 120);
});
