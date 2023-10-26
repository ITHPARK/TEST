
  
$(function () {
  
  let title = document.querySelector('.intro_txt');
  //태그가 body에 작성된 이후에 선택자로 잡혀야 함   
  
   //타이핑 효과
  let textC = "ADSDSADSA"
  let i = 0; 
  
  let goTyping = setInterval(typing, 200);  

  
  function typing () {
    
    let word = textC[i]
    
    $('.intro_txt').append(textC[i])
    
    i++;
    
    if (i == 9) { 
      clearInterval(goTyping); 
      $('.loading_animate').fadeIn(1500);
      
    }  
  }
});

  
  

  
  
  
  
  

