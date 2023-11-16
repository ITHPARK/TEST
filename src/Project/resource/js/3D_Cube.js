window.onload = function() {
  const cubeEl = document.querySelector(".cube");
  
  gsap.to(cubeEl, 0, {
          transform: `rotateX(30deg) rotateY(30deg)`,
        },1000);

  let clickX = 0;
  let clickY = 0;

  let moveX = 0;
  let moveY = 0;

  let lastX = 30;
  let lastY = 30;


  ///////////////////
  // 마우스 클릭 이벤트 //
  ///////////////////

  cubeEl.addEventListener("mousedown", (e) => {
    let isClick = true;

    clickX = e.screenX;
    clickY = e.screenY;

    window.addEventListener("mousemove", (e) => {
      if (isClick) {
        const nowX = e.screenX;
        const nowY = e.screenY;

        moveX = lastX + clickY - nowY;
        moveY = lastY - clickX + nowX;
        
        console.log(clickX, clickY)
        console.log(nowX, nowY)
        console.log(`X 회전각 : ${moveX} Y 회전각 : ${moveY}`);

        gsap.to(cubeEl, 0, {
          transform: `rotateX(${moveX}deg) rotateY(${moveY}deg)`,
        },1000);
      }
    });

    window.addEventListener(
      "mouseup",
      (e) => {
        if (isClick) {
          lastX = moveX;
          lastY = moveY;
          isClick = false;
        }
      },
      { once: true }
    );
  });


  ///////////////////
  //   터치 이벤트    //
  ///////////////////

  cubeEl.addEventListener(
    "touchstart",
    (e) => {
      let isTouch = true;

      clickX = e.targetTouches[0].screenX;
      clickY = e.targetTouches[0].screenY;

      window.addEventListener("touchmove", (e) => {
        if (isTouch) {
          const nowX = e.targetTouches[0].screenX;
          const nowY = e.targetTouches[0].screenY;

          moveX = lastX + clickY - nowY;
          moveY = lastY - clickX + nowX;

          console.log(`X 회전각 : ${moveX}
  Y 회전각 : ${moveY}`);

          gsap.to(cubeEl, 0, {
            transform: `rotateX(${moveX}deg) rotateY(${moveY}deg)`,
          });
        }
      });

      window.addEventListener(
        "touchend",
        (e) => {
          if (isTouch) {
            lastX = moveX;
            lastY = moveY;
            isTouch = false;
          }
        },
        { once: true }
      );
    },
    false
  );

}