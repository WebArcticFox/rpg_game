import './index.scss';
// import MyUser from './assets/Male-3-Walk.png';
// import terrainAtlas from './assets/terrain.png';
// import worldCfg from './configs/world.json';
// import sprites from './configs/sprites';
import ClientGame from './client/ClientGame';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});

//
// const canvas = document.getElementById('game');
// const ctx = canvas.getContext('2d');
//
// const canvasHeight = canvas.offsetHeight;
// const canvasWidth = canvas.offsetWidth;
//
// const spriteW = 48;
// const spriteH = 48;
// const shots = 3;
// let position = 0;
// let cycle = 0;
//
// const buttonPressed = {
//   bottom: false,
//   left: false,
//   right: false,
//   top: false,
// };
//
// let pY = canvasWidth/2 - spriteW / 2;
// let pX = canvasHeight/2 - spriteH / 2;
//
// function keyDownHandler(e) {
//   switch (e.key) {
//     case 'Down':
//       buttonPressed.bottom = true;
//       break;
//     case 'ArrowDown':
//       buttonPressed.bottom = true;
//       break;
//     case 'Up':
//       buttonPressed.top = true;
//       break;
//     case 'ArrowUp':
//       buttonPressed.top = true;
//       break;
//     case 'Left':
//       buttonPressed.left = true;
//       break;
//     case 'ArrowLeft':
//       buttonPressed.left = true;
//       break;
//     case 'Right':
//       buttonPressed.right = true;
//       break;
//     case 'ArrowRight':
//       buttonPressed.right = true;
//       break;
//     default:
//       break;
//   }
//   if (Object.values(buttonPressed).some((value) => value === true)) {
//     e.preventDefault();
//   }
// }
//
// function keyUpHandler(e) {
//   switch (e.key) {
//     case 'Down':
//       buttonPressed.bottom = false;
//       break;
//     case 'ArrowDown':
//       buttonPressed.bottom = false;
//       break;
//     case 'Up':
//       buttonPressed.top = false;
//       break;
//     case 'ArrowUp':
//       buttonPressed.top = false;
//       break;
//     case 'Left':
//       buttonPressed.left = false;
//       break;
//     case 'ArrowLeft':
//       buttonPressed.left = false;
//       break;
//     case 'Right':
//       buttonPressed.right = false;
//       break;
//     case 'ArrowRight':
//       buttonPressed.right = false;
//       break;
//     default:
//       break;
//   }
// }
//
// document.addEventListener('keydown', keyDownHandler);
// document.addEventListener('keyup', keyUpHandler);
//
// const img = document.createElement('img');
// img.src = MyUser;
//
// const terrain = document.createElement('img');
// terrain.src = terrainAtlas;
//
// ctx.strokeStyle = '#7FFF00';
// for (let i = 0; i < 600; i += 20) {
//   for (let j = 0; j < 600; j += 20) {
//     ctx.moveTo(i - 4, j - 4);
//     ctx.quadraticCurveTo(i, j, i + 6, j + 3);
//   }
// }
//
// terrain.addEventListener('load', () => {
//   const {map} = worldCfg;
//   map.forEach((cfgRow, y) => {
//     cfgRow.forEach((cfgCell, x) => {
//       const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
//       ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteH, spriteW, spriteH);
//     });
//   })
// });
//
// function walk(){
//   switch (true) {
//     case buttonPressed.bottom:
//       position = 0;
//       if (pY + spriteH >= canvasHeight) {
//         pY = canvasHeight-spriteH;
//       } else {
//         pY += 10;
//       }
//       cycle = (cycle + 1) % shots;
//       break;
//     case buttonPressed.top:
//       position = spriteW * 3;
//       if (pY <= 0) {
//         pY = 0;
//       } else {
//         pY -= 10;
//       }
//       cycle = (cycle + 1) % shots;
//       break;
//     case buttonPressed.left:
//       position = spriteW;
//       if (pX <= 0) {
//         pX = 0;
//       } else {
//         pX -= 10;
//       }
//       cycle = (cycle + 1) % shots;
//       break;
//     case buttonPressed.right:
//       position = spriteW * 2;
//       if (pX + spriteW >= canvasWidth) {
//         pX = canvasWidth-spriteW;
//       } else {
//         pX += 10;
//       }
//       cycle = (cycle + 1) % shots;
//       break;
//     default:
//       break;
//   }
//   //ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//
//   ctx.fillStyle = '#719200';
//   //ctx.fillRect(0, 0, canvasWidth, canvasHeight);
//   ctx.stroke();
//   ctx.drawImage(img, cycle * spriteW, position, spriteW, spriteH, pX, pY, 48, 48);
//
//   window.requestAnimationFrame(walk)
// }
//
// img.addEventListener('load', () => {
//   window.requestAnimationFrame(walk);
// });
