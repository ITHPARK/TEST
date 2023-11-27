import * as 





//API = 쉽게 말해 클라이언트가 서버에 요청한 데이터를 제공하는 것. 상호작용을 위한 인터페이스

//API의 4가지 방식

// SOAP API 
// 이 API는 단순 객체 접근 프로토콜을 사용한다. 클라이언트와 서버는 XML을 사용하여 메시지를 교환한다. 과거에 더 많이 사용되었으며 유연성이 떨어지는 API.

// RPC API
// 이 API를 원격 프로시저 호출이라고 한다. 클라이언트가 서버에서 함수나 프로시저를 완료하면 서버가 출력을 클라이언트로 다시 전송한다.

// Websocket API
// Websocket API는 JSON 객체를 사용하여 데이터를 전달하는 또 다른 최신 웹 API 개발이다. WebSocket API는 클라이언트 앱과 서버 간의 양방향 통신을 지원한다.
// 서버가 연결된 클라이언트에 콜백 메시지를 전송할 수 있어 REST API보다 효율적이다.

// REST API
// 오늘날 웹에서 볼 수 있는 가장 많이 사용되고 유연한 API이다. 클라이언트가 서버에 요청을 데이터로 전송한다.
// 서버가 이 클라이언트 입력을 사용하여 내부 함수를 시작하고 출력 데이터를 다시 클라이언트에 반환한다.

//ajax란 자바스크립트를 활용한 비동기 통신

//ajax 장점
//● 서버에서 처리가 완료될때까지 기다리지 않고 다른 프로세스를 진행할 수 있다.
//● 비동기 방식이기 때문에 동기 방식과 다르게 UI를 변경할 수 있어서 장점이 된다.
//● 웹페이지 속도향상.

//ajax 단점
//● 연속으로 데이터를 요청하면 서버 부하가 증가할 수 있다.
//● 히스토리 관리가 안되므로 보안에 좀 취약하다.
//● HTTP 클라이언트의 기능이 한정되어 있다.


//카카오 API 불러와보기 (제이쿼리)
// $.ajax({
//   method: "GET",
//   url: "https://dapi.kakao.com/v3/search/book?target=title",
//   data: {
//     query: "샬롯의 거미줄"
//   },
//   headers: {
//     Authorization: "KakaoAK 4db8aba0145bf2e77162c1b95630b8a8"
//   },
// }) 
// .done((msg) => {
//   console.log(msg);
// });


// //바닐라 js를 이용한 api 불러오기
// const apiUrl = "https://dapi.kakao.com/v3/search/book?target=title";
// const bookName = '샬롯의 거미줄'
// let abcd;

// //fetch(url, option) url매개변수에 apiUrl과 bookName을 넣어줘야함
// fetch는 HTTP response 객체를 래핑한 Promise 객체를 반환한다.
// fetch(`${apiUrl}&query=${bookName}`, {
//   method: 'GET',
//   headers: {
//     Authorization: "KakaoAK 4db8aba0145bf2e77162c1b95630b8a8"
//   },
// }
// ).then(response => {
//   //response는 서버응답 객체이다.
  
//   //서버응답이 없을 떄 조건문
//   if(!response.ok){
//     //throw = 자바스크립트가 인식하는 오류 이외에 내가 설정한 조건이 맞지 않으면 에러를 발생시킴(콘솔에 뜬다.)
//     throw new Error('에러 발생');
//   }
  
//   //응답을 성공하면 josn으로 파싱하는 Promise를 반환. (Promise는 비동기 프로그래밍을 처리하는 객체)
//   return response.json();
// }
// ).then(data => {
//   // 성공적으로 데이터를 불러왔을 때의 처리
//   console.log(data);
//   console.log(data.documents[2].translators);
// }
// ).catch(error => console.error('Error:', error));


//날씨 api 불러오기

//api url
// const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=37.56&lon=126.98&appid=428580c2b3d1263f19f60c525dc5c39c";

$(function () {

  const weather = new Swiper('.weatherTable', {
    observParents: true,
    observer: true,
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
  });
  
  const coordinate = [[37.56, 126.98], [40.66, -73.93]];
  
  for (let i = 0; i < coordinate.length; i++) {
  
    //api url
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate[i][0]}&lon=${coordinate[i][1]}&appid=428580c2b3d1263f19f60c525dc5c39c`;
  
    fetch(weatherUrl, {
    }).then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`)
      }
      return response.json();
    }).then(data => {
      console.log(data);
  
      const setCountry = data.sys.country;
    
      const country = {
        KR: {
          flag: '대한민국',
          city: '서울'
        },
        US: {
          flag: '미국',
          city: '브루클린'
        }
      }
      
      const setWeather = data.weather[0].main;
      console.log(setWeather);
      
      const curWeather = {
        Clear: '../images/jsApi/ico/ico_sunny.png',
        Rain: '../images/jsApi/ico/ico_rainy.png',
        Mist: '../images/jsApi/ico/ico_fog.png'
      };
      const html = `
        <li class="swiper-slide slide${i}">
          <div class="locate">
            <span class="ico"></span>
            <p>${country[setCountry].city}<span> (${country[setCountry].flag})</span></p>
          </div>
          
          <div class="date">
            <p></p>
          </div>
          
          <div class="weather">
            <strong class="current">${Math.trunc(data.main.temp - 273.15)}°C</strong>
            <div class="info">
              <span class="ico"></span>
              <ul>
                <li class="feel">체감온도: ${Math.trunc(data.main.feels_like - 273.15)}°C</li>
                <li class="max">최고온도: ${Math.trunc(data.main.temp_max - 273.15)}°C</li>
                <li class="min">최저온도: ${Math.trunc(data.main.temp_min - 273.15)}°C</li>
              </ul>
            </div>
          </div>
        </li>
      `
      
      $('.weatherTable .swiper-wrapper').append(html);
      
      $(`.weatherTable .swiper-wrapper .swiper-slide.slide${i} .weather .info .ico`).css('background', `url(${curWeather[setWeather]})no-repeat center`)
      
    }).catch(error => {
      console.error(error);
    });
  }
});













