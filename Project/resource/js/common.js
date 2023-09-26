
  
$(function () {
  
  let title = document.querySelector('.intro_txt');
  //태그가 body에 작성된 이후에 선택자로 잡혀야 함   
  
   //타이핑 효과
  let textC = "ADSDSADSA"
  let i = 0; 
  
  let goTyping = setInterval(typing, 200);  

  
  function typing () {
    
    let word = textC[i]
    console.log(word)
    
    $('.intro_txt').append(textC[i])
    
    i++;
    
    if (i == 9) { 
      clearInterval(goTyping);    
    }  
  }
  
  //문으로 걸어가는 캐릭터 
  let move = 0;
  $('.character').css('left', move);
  let characterAnimation = setInterval(goCharacter, 25);

  function goCharacter(){
    move += 1;
    $('.character').css('left', `${move}%`);  
    
    if(move > 87){
      clearInterval(characterAnimation);
    }
    
  }
  

  
  
  
});
  
  

  
  
  
  
  

