//캔버스 기본 설정들
const canvas = document.getElementById('characterCanvas');
const ctx = canvas.getContext('2d');

///캔버스 요소들이 더 선명하게 보이게 하는 방법///


const dpr = window.devicePixelRatio; // 1 (디바이스 환경마다 다르게 값이 나올 수 있음)


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

//캐릭터 위치 상태객체
player = {
    x: 0,
    dxRight : 0,
    speed: 10,
}

//키가 눌린 상태
let keyState = false;

//일정 시간 이후에 다시 이벤트를 실행할 변수
let lastInputTime = 0;

//각 프레임을 나눠 배열로 만듦
const cycleLoop = [0, 1, 2 ,3 ,4 ,5 ];

// 프레임 시작 번호
let currentLoopIndex = 0;

//프레임 내가 설정한 프레임마다 다음 컷으로 이돟시킬 변수
let frameCount = 0;

//눌렀던 키를 떼면 애니메이션이 멈추게할 변수
let stopAnimation = false; 

//함수가 실행되면 시간을 다시 받을 수 있게하는 변수
let timeOut = false;

//재귀함수가 중첩실행되지 않게 막는 스위치
let funcUnnesting = false;

//cancelAnimationFrame 사용을 위해 requestAnimationFrame담을 변수
let startAnimation;



//캐릭터 이미지 생성
const characterImg = new Image();
characterImg.src = "../images/character/character_walk.png";


//캐릭터를 그리는 함수
function drawPlayer() {
    //drawImage(이미지, 이미지에서 x좌표, 이미지에서 y좌표, 이미지에서 x크기, 이미지에서 y크기, x좌표, y좌표, x크기, y크기)
    ctx.drawImage(characterImg, 0, 0, cWidth, cHeight, 0, canvasHeight - 90, scWidth, scHeight);
    ctx.drawImage(characterImg, cWidth*1, 0, cWidth, cHeight, cWidth*1*scale, canvasHeight - 90, scWidth, scHeight);
    ctx.drawImage(characterImg, cWidth*2, 0, cWidth, cHeight, cWidth*2*scale, canvasHeight - 90, scWidth, scHeight);
    ctx.drawImage(characterImg, cWidth*3, 0, cWidth, cHeight, cWidth*3*scale, canvasHeight - 90, scWidth, scHeight);
    ctx.drawImage(characterImg, cWidth*4, 0, cWidth, cHeight, cWidth*4*scale, canvasHeight - 90, scWidth, scHeight);
    ctx.drawImage(characterImg, cWidth*5, 0, cWidth, cHeight, cWidth*5*scale, canvasHeight - 90, scWidth, scHeight);
}


function drawFrame (frameX, frameY, canvasX, canvasY, ) {
    ctx.drawImage(characterImg, frameX * cWidth, frameY * cHeight, cWidth, cHeight, canvasX, canvasY, scWidth, scHeight);
}


//캐릭터 최소, 최대 위치 
function detect () {
    if(player.x < 0){
        player.x = 0;
    }
    
    if(player.x  + (cWidth * scale)> canvas.width){
        player.x = canvas.width - (cWidth * scale);
    }
}


function updatePos () {
    player.x += player.dxRight;
    detect();
}


function keyDown (e) {

    if(
        e.key === 'ArrowRight' ||
        e.key === 'Right'
    ){
        player.dxRight = player.speed; 
        

        //스위치가 켜진상태
        keyState = true;     
        stopAnimation = true;
        
        if(keyState && funcUnnesting <= 1) {
            startAnimation = requestAnimationFrame(step);           
        }
        
    }
}

function keyUp (e) {

    if(
        e.key === 'ArrowRight' ||
        e.key === 'Right'
    ){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(startAnimation);
        player.dxRight = 0;
        frameCount = 0;
        stopAnimation = false;
        funcUnnesting = 1;
        
        ctx.drawImage(characterImg, 0, 0, cWidth, cHeight, player.x, canvasHeight - 90, scWidth, scHeight);
        
    }
    
}


window.addEventListener('load', function () {
    ctx.drawImage(characterImg, 0, 0, cWidth, cHeight, 0, canvasHeight - 90, scWidth, scHeight);
});

document.addEventListener('keydown',  keyDown);
document.addEventListener('keyup',  keyUp);




function step() {      

    timeOut = true;
    funcUnnesting ++;
    
    $('.key_press').fadeOut();

    //함수를 실행할 때 마다 frameCount를 1씩 올린다.
    //frameCount가 5이하면 프레임 requestAnimationFrame를 실행 
    //frameCount가 5가 넘으면 frameCount을 0으로 설정하고 다음컷으로 이동한다
    frameCount++;    
    if (frameCount < 2.5) {
        startAnimation = requestAnimationFrame(step);   
        return;
    }
    frameCount = 0;  
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updatePos();
    drawFrame(cycleLoop[currentLoopIndex], 0, player.x, canvasHeight - 90);
            
    currentLoopIndex++;
        
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
    }
        
    if(stopAnimation){
        startAnimation = requestAnimationFrame(step);   
    }
    
    if(player.x >= 1090) {
        cancelAnimationFrame(startAnimation);
        $('.intro').animate({
            opacity: '0'
        }, 400, 'easeInBack');
    }
    
}

