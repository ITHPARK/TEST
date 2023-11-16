//캔버스 기본 설정들
const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');


//그림이 흐릿하게 보일 때///////////////////////////////////////
// dpr에 맞춰 캔버스의 그리기 영역을 키우고 이를 축소하는 방식.
    //캔버스의 DPR 정보
    const dpr = window.devicePixelRatio;

    // 캔버스 요소의 설정 가져오기
    const canvasWidth = 1200;
    const canvasHeight = window.innerHeight;
    
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;

    // scale() 함수를 사용하여 캔버스 유닛 크기 보정
    ctx.scale(dpr, dpr);
////////////////////////////////////////////////////////////////

    //캔버스 기본 사각형 그리기
    // function draw (){
    //         // 3. '선' 사각형 그리기
    //         ctx.strokeStyle = 'blue';
    //         ctx.strokeRect(10, 10, 100, 100);

    //         // 4. '색' 사각형 그리기
    //         ctx.fillStyle = 'pink';
    //         ctx.fillRect(10, 150, 100, 100);

    //         // 5. '선+색' 사각형 그리기
    //         ctx.strokeRect(10, 300, 100, 100);
    //         ctx.fillRect(10, 300, 100, 100);

    //         // 6. 사각형 모양으로 지우기
    //         ctx.fillRect(10, 450, 100, 100); // 먼저 '색' 사각형을 그리고,
    //         ctx.clearRect(20, 500, 100, 100); // 일부 영역을 지운다.

    // }
    // draw();
    
//이미지 업로드
const imgC = new Image();

imgC.src = "../images/character/canvas_character.png"

imgC.addEventListener('load', function () {
    console.log(player);

    drawPlayer();
});
    
//플레이어 위치 좌표
const player = {
    w: 60, //캐릭터 요소 너비
    h: 80, //캐릭터 요소 높이
    x: 100, //캐릭터 요소 x좌표값
    y: 50, //캐릭터 요소 y좌표값
    speed: 5, //움직이는 스피드
    //x이동거리 값
    dxLeft: 0,
    dxRight: 0,
    //y이동거리 값
    dyUp: 0, 
    dyDown: 0,
};

//캔버스 초기화 함수
function clear (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//캐릭터를 그리는 함수
function drawPlayer() {
    ctx.drawImage(imgC, player.x, player.y, player.w, player.h);
}

//캐릭터가 이동 할 수 있는 최대 이동거리
function detectWall (){

    //가장 왼쪽 벽면
    if(player.x < 0){
        player.x = 0;
    }
    
    //가장 오른쪽 벽면 (가장 끝으로 좌표에서 플레이어요소의 너비를 빼주면 오른쪽 최대 이동거리)
    if(player.x + player.w > canvas.width){
        player.x = canvas.width - player.w;
    }
    
    //가장 위쪽 벽면
    if(player.y < 0){
        player.y = 0;
    }
    
    //가장 아래쪽 벽면 (가장 끝으로 좌표에서 플레이어요소의 높이를 빼주면 아래쪽 최대 이동거리)
    if(player.y + player.h > canvas.height){
        player.y = canvas.height - player.h;
    }
    
}

//이동했을 떄 새로운 위치 업데이트
function newPos () {
    player.x += (player.dxLeft + player.dxRight);
    player.y += (player.dyUp + player.dyDown);
    detectWall();
}

//업데이트 함수
function update () {
    clear();
    drawPlayer();
    newPos();
    requestAnimationFrame(update);
    ctx.drawImage(imgC, player.x, player.y, player.w, player.h);
};

//방향별 키 함수
function moveRight() { player.dxRight = player.speed; console.log('asd ')}
function moveLeft () {player.dxLeft = -player.speed}
function moveDown () {player.dyDown = player.speed}
function moveUp () {player.dyUp = -player.speed}

function keyDown (event) {

    if(event.key === 'ArrowRight' || event.key === 'Right') {
        moveRight();
    }else if(event.key === 'ArrowLeft' || event.key === 'Left'){
        moveLeft();
    }else if(event.key === 'ArrowUp' || event.key === 'Up'){
        moveUp();
    }else if(event.key === 'ArrowDown' || event.key === 'Down'){
        moveDown();
    }
    
}

//키를 눌렀다 떼면 멈춤
function keyUp (e){

    //x축 키를 떼면 x축 이동 멈춤
    //방향 마다 나누면 동시에 눌렀을 때 제자리에 위치 가능
    if(
        e.key === 'ArrowRight' ||
        e.key === 'Right'
    ){
        player.dxRight = 0;
        
    }else if(
        e.key === 'ArrowLeft' || 
        e.key === 'Left' 
    ){
        player.dxLeft = 0;
    }else if(
        e.key === 'ArrowUp' || 
        e.key === 'Up'
    ){
        player.dyUp = 0;
    }else if(
        e.key === 'ArrowDown' || 
        e.key === 'Down'
    ){
        player.dyDown = 0;  
    }
} 


document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);


update();











