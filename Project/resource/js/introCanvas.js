//캔버스 기본 설정들
const canvas = document.getElementById('characterCanvas');
const ctx = canvas.getContext('2d');

///캔버스 요소들이 더 선명하게 보이게 하는 방법///


const dpr = window.devicePixelRatio; // 1 (디바이스 환경마다 다르게 값이 나올 수 있음)
console.log(dpr)


const canvasWidth = 1200;
const canvasHeight = window.innerHeight;

canvas.style.width = canvasWidth + 'px';
canvas.style.height = canvasHeight + 'px';

//디바이스 dpr에 맞추는 작업
ctx.scale(dpr, dpr);

canvas.width = canvasWidth * dpr;
canvas.height = canvasHeight * dpr;

//////////////////////////////////////

const cWidth = 18;
const cHeight = 18;
let scale = 5;
let scWidth = cWidth * scale;
let scHeight = cHeight * scale;

//캐릭터 이미지 생성
const characterImg = new Image();
characterImg.src = "../images/character/character_walk.png";

//캐릭터를 그리는 함수
function drawPlayer() {
    //drawImage(이미지, 이미지에서 x좌표, 이미지에서 y좌표, 이미지에서 x크기, y크기, x좌표, y좌표, x크기, y크기)
    ctx.drawImage(characterImg, 0, 0, cWidth, cHeight, 0, canvasHeight - 90, scWidth, scHeight);
    ctx.drawImage(characterImg, cWidth*2*scale, 0, cWidth, cHeight, cWidth*2*scale, canvasHeight - 90, scWidth, scHeight);
    ctx.drawImage(characterImg, cWidth*3*scale, 0, cWidth, cHeight, cWidth*3*scale, canvasHeight - 90, scWidth, scHeight);
    ctx.drawImage(characterImg, cWidth*4*scale, 0, cWidth, cHeight, cWidth*4*scale, canvasHeight - 90, scWidth, scHeight);
    ctx.drawImage(characterImg, cWidth*5*scale, 0, cWidth, cHeight, cWidth*5*scale, canvasHeight - 90, scWidth, scHeight);
    ctx.drawImage(characterImg, cWidth*6*scale, 0, cWidth, cHeight, cWidth*6*scale, canvasHeight - 90, scWidth, scHeight);
}

characterImg.addEventListener('load', function () {
    drawPlayer();
});

    




