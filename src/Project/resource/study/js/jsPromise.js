// *promise

//비동기 처리를 하는 자바스크립트에서는 콜백으로 처리를 한다.
//비동기 처리에 매번 콜백 함수를 사용하는 것은 비효율 적이므로 Promise를 사용한다.

//Promise의 장점

//비동기 처리 시점을 명확하게 표현할 수 있다.
//연속된 비동기 처리 작업을 수정, 삭제, 추가하기 편하고 유연하다.
//비동기 작업 상태를 쉽게 확인할 수 있다.
//코드의 유지 보수성이 증가한다.

//Promise는 객체이다. 
//Promise는 매개변수로 resolve와 reject를 인자로 전달 받고  resolve는 성공, reject는 실패했을 때는 반환한다.



const user_db = {
  "철수": {
    age: 10,
    height: 180,
    weight: 70
  },
  "영희": {
    age: 12,
    height: 160,
    weight: 46
  }
}

//객체의 길이를 구하는 방법 
console.log(Object.keys(user_db).length)


const getUser =()=> {
  //프로미스 객체를 생성 
  return new Promise((resolve, reject) => {
  
    
    if(Object.keys(user_db).length < 1 ){
    
      //실패했을 때 
      reject(new Error("디비가 비어있습니다."));
      
    }else {
    
      //성공했을 때 
      resolve(user_db);
    
    }
    
  });
}

//후솓처리 메소드 then과 catch를 통해서 처리결과 또는 에러를 출력

//then: Promise의 실행결과를 반환한다. 성공했으면 resolve를 실패했으면 reject를 반환
//catch: 역시Promise를 반환하지만 실패했을 때를 반환

getUser().then((msg) => {

  console.log(msg);
  
}).catch((msg) => {

  console.error(msg);
  
})
  
  




