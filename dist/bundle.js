/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project/resource/study/js/jsApi.js":
/*!************************************************!*\
  !*** ./src/Project/resource/study/js/jsApi.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jsEventLoop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsEventLoop.js */ \"./src/Project/resource/study/js/jsEventLoop.js\");\n\r\n\r\n\r\nconsole.log((0,_jsEventLoop_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\r\n//API = 쉽게 말해 클라이언트가 서버에 요청한 데이터를 제공하는 것. 상호작용을 위한 인터페이스\r\n\r\n//API의 4가지 방식\r\n\r\n// SOAP API \r\n// 이 API는 단순 객체 접근 프로토콜을 사용한다. 클라이언트와 서버는 XML을 사용하여 메시지를 교환한다. 과거에 더 많이 사용되었으며 유연성이 떨어지는 API.\r\n\r\n// RPC API\r\n// 이 API를 원격 프로시저 호출이라고 한다. 클라이언트가 서버에서 함수나 프로시저를 완료하면 서버가 출력을 클라이언트로 다시 전송한다.\r\n\r\n// Websocket API\r\n// Websocket API는 JSON 객체를 사용하여 데이터를 전달하는 또 다른 최신 웹 API 개발이다. WebSocket API는 클라이언트 앱과 서버 간의 양방향 통신을 지원한다.\r\n// 서버가 연결된 클라이언트에 콜백 메시지를 전송할 수 있어 REST API보다 효율적이다.\r\n\r\n// REST API\r\n// 오늘날 웹에서 볼 수 있는 가장 많이 사용되고 유연한 API이다. 클라이언트가 서버에 요청을 데이터로 전송한다.\r\n// 서버가 이 클라이언트 입력을 사용하여 내부 함수를 시작하고 출력 데이터를 다시 클라이언트에 반환한다.\r\n\r\n//ajax란 자바스크립트를 활용한 비동기 통신\r\n\r\n//ajax 장점\r\n//● 서버에서 처리가 완료될때까지 기다리지 않고 다른 프로세스를 진행할 수 있다.\r\n//● 비동기 방식이기 때문에 동기 방식과 다르게 UI를 변경할 수 있어서 장점이 된다.\r\n//● 웹페이지 속도향상.\r\n\r\n//ajax 단점\r\n//● 연속으로 데이터를 요청하면 서버 부하가 증가할 수 있다.\r\n//● 히스토리 관리가 안되므로 보안에 좀 취약하다.\r\n//● HTTP 클라이언트의 기능이 한정되어 있다.\r\n\r\n\r\n//카카오 API 불러와보기 (제이쿼리)\r\n// $.ajax({\r\n//   method: \"GET\",\r\n//   url: \"https://dapi.kakao.com/v3/search/book?target=title\",\r\n//   data: {\r\n//     query: \"샬롯의 거미줄\"\r\n//   },\r\n//   headers: {\r\n//     Authorization: \"KakaoAK 4db8aba0145bf2e77162c1b95630b8a8\"\r\n//   },\r\n// }) \r\n// .done((msg) => {\r\n//   console.log(msg);\r\n// });\r\n\r\n\r\n// //바닐라 js를 이용한 api 불러오기\r\n// const apiUrl = \"https://dapi.kakao.com/v3/search/book?target=title\";\r\n// const bookName = '샬롯의 거미줄'\r\n// let abcd;\r\n\r\n// //fetch(url, option) url매개변수에 apiUrl과 bookName을 넣어줘야함\r\n// fetch는 HTTP response 객체를 래핑한 Promise 객체를 반환한다.\r\n// fetch(`${apiUrl}&query=${bookName}`, {\r\n//   method: 'GET',\r\n//   headers: {\r\n//     Authorization: \"KakaoAK 4db8aba0145bf2e77162c1b95630b8a8\"\r\n//   },\r\n// }\r\n// ).then(response => {\r\n//   //response는 서버응답 객체이다.\r\n  \r\n//   //서버응답이 없을 떄 조건문\r\n//   if(!response.ok){\r\n//     //throw = 자바스크립트가 인식하는 오류 이외에 내가 설정한 조건이 맞지 않으면 에러를 발생시킴(콘솔에 뜬다.)\r\n//     throw new Error('에러 발생');\r\n//   }\r\n  \r\n//   //응답을 성공하면 josn으로 파싱하는 Promise를 반환. (Promise는 비동기 프로그래밍을 처리하는 객체)\r\n//   return response.json();\r\n// }\r\n// ).then(data => {\r\n//   // 성공적으로 데이터를 불러왔을 때의 처리\r\n//   console.log(data);\r\n//   console.log(data.documents[2].translators);\r\n// }\r\n// ).catch(error => console.error('Error:', error));\r\n\r\n\r\n//날씨 api 불러오기\r\n\r\n//api url\r\n// const weatherUrl = \"https://api.openweathermap.org/data/2.5/weather?lat=37.56&lon=126.98&appid=428580c2b3d1263f19f60c525dc5c39c\";\r\n\r\n$(function () {\r\n\r\n  const weather = new Swiper('.weatherTable', {\r\n    observParents: true,\r\n    observer: true,\r\n    direction: 'horizontal',\r\n    slidesPerView: 1,\r\n    spaceBetween: 20,\r\n  });\r\n  \r\n  const coordinate = [[37.56, 126.98], [40.66, -73.93]];\r\n  \r\n  for (let i = 0; i < coordinate.length; i++) {\r\n  \r\n    //api url\r\n    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate[i][0]}&lon=${coordinate[i][1]}&appid=428580c2b3d1263f19f60c525dc5c39c`;\r\n  \r\n    fetch(weatherUrl, {\r\n    }).then(response => {\r\n      if (!response.ok) {\r\n        throw new Error(`${response.status}`)\r\n      }\r\n      return response.json();\r\n    }).then(data => {\r\n      console.log(data);\r\n  \r\n      const setCountry = data.sys.country;\r\n    \r\n      const country = {\r\n        KR: {\r\n          flag: '대한민국',\r\n          city: '서울'\r\n        },\r\n        US: {\r\n          flag: '미국',\r\n          city: '브루클린'\r\n        }\r\n      }\r\n      \r\n      const setWeather = data.weather[0].main;\r\n      console.log(setWeather);\r\n      \r\n      const curWeather = {\r\n        Clear: '../images/jsApi/ico/ico_sunny.png',\r\n        Rain: '../images/jsApi/ico/ico_rainy.png',\r\n        Mist: '../images/jsApi/ico/ico_fog.png'\r\n      };\r\n      const html = `\r\n        <li class=\"swiper-slide slide${i}\">\r\n          <div class=\"locate\">\r\n            <span class=\"ico\"></span>\r\n            <p>${country[setCountry].city}<span> (${country[setCountry].flag})</span></p>\r\n          </div>\r\n          \r\n          <div class=\"date\">\r\n            <p></p>\r\n          </div>\r\n          \r\n          <div class=\"weather\">\r\n            <strong class=\"current\">${Math.trunc(data.main.temp - 273.15)}°C</strong>\r\n            <div class=\"info\">\r\n              <span class=\"ico\"></span>\r\n              <ul>\r\n                <li class=\"feel\">체감온도: ${Math.trunc(data.main.feels_like - 273.15)}°C</li>\r\n                <li class=\"max\">최고온도: ${Math.trunc(data.main.temp_max - 273.15)}°C</li>\r\n                <li class=\"min\">최저온도: ${Math.trunc(data.main.temp_min - 273.15)}°C</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      `\r\n      \r\n      $('.weatherTable .swiper-wrapper').append(html);\r\n      \r\n      $(`.weatherTable .swiper-wrapper .swiper-slide.slide${i} .weather .info .ico`).css('background', `url(${curWeather[setWeather]})no-repeat center`)\r\n      \r\n    }).catch(error => {\r\n      console.error(error);\r\n    });\r\n  }\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://my_js/./src/Project/resource/study/js/jsApi.js?");

/***/ }),

/***/ "./src/Project/resource/study/js/jsEventLoop.js":
/*!******************************************************!*\
  !*** ./src/Project/resource/study/js/jsEventLoop.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hello)\n/* harmony export */ });\n//이벤트 루프\r\n\r\n//자바스크립트는 싱글 스레드 기반 언어로써 하나의 작업만 순서대로 실행이 가능.\r\n//이런 작업은 작업이 왼료될 때 까지 다른 작업을 할 수 없어 화면이 멈추거나 할 수 있는 단점을 보완하기위해\r\n//자자스크립트는 ajax, promise, seTimeout 등의 비동기 함수를 지원한다. (이러한 비동기 함수로 콜백을 좀 더 효율적으로 처리 가능)\r\n\r\n\r\n//자바스크립트의 함수의 호출과 처리 방식\r\n\r\n//자바스크립트는 함수의 호출을 Call Stack에 기록을 한다.\r\n//호출 순서대로 스택에 기록을 하고 가장 나중에 들어온 스택을 먼저 하나씩 실행하는 LIFO(Last In First Out) 방식이다.\r\n\r\n//예제\r\nfunction one () { two(); console.log(1) }\r\nfunction two () { three(); console.log(2) }\r\nfunction three () { four(); console.log(3) }\r\nfunction four () { five(); console.log(4) }\r\nfunction five () {console.log(5)}\r\n\r\n\r\none(); //5 4 3 2 1 결과 출력\r\n\r\n//왜 5 4 3 2 1 인가?\r\n\r\n//one이라는 함수를 호출하면 Call Stack에 one two three four five 순으로 콜스택에 쌓이게 된다.\r\n//콜스택에 모두 쌓이게 되면 쌓였던 역순으로 함수를 실행하기 떄문에 5 4 3 2 1의 출력이 되는것이다.\r\n\r\n\r\n//promise eventLoop\r\n\r\n//예제\r\n\r\nfunction PromiseFunc(){\r\n  return new Promise(function(res, rej){\r\n    res(1);\r\n  })\r\n}\r\n\r\nconsole.log('asd');\r\nPromiseFunc().then(console.log);\r\nconsole.log('zxc');\r\n//asd zxc 1 결과 출력\r\n\r\n//왜 asd zxc 1 인가?\r\n\r\n//콘솔 asd를 출력하고 PromiseFunc 함수를 실행한다. 이 함수의 콜백 then은  Microtask Queue에 적재 된다.\r\n//EventLoop가 Microtask Queue에 적재된 then 콜백을 다시 Call Stack으로 가져오고 함수가 실행 된다.\r\n//EventLoop는 실행중인 Task 즉 Call Stack에서 실행중인 작업이 있는지를 주기적으로 확인하고 작업이 없다면 Queue에 적재된 작업을 Call Stack으로 불러와 실행한다.\r\n\r\n\r\n//Microtask Queue?\r\n//EventLoop에는 Queue라는 것이 존재. Task Queue(Macrotask)와 Microtask Queue이다. \r\n//Task Queue(Macrotask)에는 setTimeout(), setInterval(), setImmediate()와 같은 비동기 함수를 담고\r\n//Microtask Queue에는 Promise나 async/await, process.nextTick, Object.observe, MutationObserver과 같은 비동기 호출을 담는다.\r\n// 이 2개의 Queue의 차이점은 우선순위의 차이이다. Microtask Queue 담긴 함수들이 우선순위를 가지고 있으며 즉, 먼저 실행된다.\r\n\r\n//예제\r\n\r\n// setTimeout(function(){\r\n//   console.log('Macrotask')\r\n// },0)\r\n\r\n// Micorotask = () => {\r\n//   return new Promise ((resolve, reject)=> {\r\n//     resolve(1);\r\n//   })\r\n// }\r\n\r\n// Micorotask().then((res) => {console.log(res+1)});\r\n\r\n//setTimeout을 Call Stack에 호출 => Call Stack에 호출된 setTimeout의 콜백을 Macrotask Queue에 적재 => Microtask 함수를 Call Stack에 호출 => Microtask Queue에 콜백을 적재 => \r\n//Microtask Queue에 적재된 Microtask 함수의 콜백을 Call Stack에 호출하여 실행 => Macrotask Queue에 적재된 setTimeout의 콜백을 Call Stack에 호출하여 실행\r\n\r\n//결과는  2 Macrotask로 나중에 호츌한 프로미스의 콜백이 먼저 실행됨\r\n\r\n\r\n\r\n\r\nfunction hello() {\r\n  return '헬로우 웹팩';\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://my_js/./src/Project/resource/study/js/jsEventLoop.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Project/resource/study/js/jsApi.js");
/******/ 	
/******/ })()
;