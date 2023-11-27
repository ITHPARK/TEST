//이벤트 루프

//자바스크립트는 싱글 스레드 기반 언어로써 하나의 작업만 순서대로 실행이 가능.
//이런 작업은 작업이 왼료될 때 까지 다른 작업을 할 수 없어 화면이 멈추거나 할 수 있는 단점을 보완하기위해
//자자스크립트는 ajax, promise, seTimeout 등의 비동기 함수를 지원한다. (이러한 비동기 함수로 콜백을 좀 더 효율적으로 처리 가능)


//자바스크립트의 함수의 호출과 처리 방식

//자바스크립트는 함수의 호출을 Call Stack에 기록을 한다.
//호출 순서대로 스택에 기록을 하고 가장 나중에 들어온 스택을 먼저 하나씩 실행하는 LIFO(Last In First Out) 방식이다.

//예제
function one () { two(); console.log(1) }
function two () { three(); console.log(2) }
function three () { four(); console.log(3) }
function four () { five(); console.log(4) }
function five () {console.log(5)}


one(); //5 4 3 2 1 결과 출력

//왜 5 4 3 2 1 인가?

//one이라는 함수를 호출하면 Call Stack에 one two three four five 순으로 콜스택에 쌓이게 된다.
//콜스택에 모두 쌓이게 되면 쌓였던 역순으로 함수를 실행하기 떄문에 5 4 3 2 1의 출력이 되는것이다.


//promise eventLoop

//예제

function PromiseFunc(){
  return new Promise(function(res, rej){
    res(1);
  })
}

console.log('asd');
PromiseFunc().then(console.log);
console.log('zxc');
//asd zxc 1 결과 출력

//왜 asd zxc 1 인가?

//콘솔 asd를 출력하고 PromiseFunc 함수를 실행한다. 이 함수의 콜백 then은  Microtask Queue에 적재 된다.
//EventLoop가 Microtask Queue에 적재된 then 콜백을 다시 Call Stack으로 가져오고 함수가 실행 된다.
//EventLoop는 실행중인 Task 즉 Call Stack에서 실행중인 작업이 있는지를 주기적으로 확인하고 작업이 없다면 Queue에 적재된 작업을 Call Stack으로 불러와 실행한다.


//Microtask Queue?
//EventLoop에는 Queue라는 것이 존재. Task Queue(Macrotask)와 Microtask Queue이다. 
//Task Queue(Macrotask)에는 setTimeout(), setInterval(), setImmediate()와 같은 비동기 함수를 담고
//Microtask Queue에는 Promise나 async/await, process.nextTick, Object.observe, MutationObserver과 같은 비동기 호출을 담는다.
// 이 2개의 Queue의 차이점은 우선순위의 차이이다. Microtask Queue 담긴 함수들이 우선순위를 가지고 있으며 즉, 먼저 실행된다.

//예제

// setTimeout(function(){
//   console.log('Macrotask')
// },0)

// Micorotask = () => {
//   return new Promise ((resolve, reject)=> {
//     resolve(1);
//   })
// }

// Micorotask().then((res) => {console.log(res+1)});

//setTimeout을 Call Stack에 호출 => Call Stack에 호출된 setTimeout의 콜백을 Macrotask Queue에 적재 => Microtask 함수를 Call Stack에 호출 => Microtask Queue에 콜백을 적재 => 
//Microtask Queue에 적재된 Microtask 함수의 콜백을 Call Stack에 호출하여 실행 => Macrotask Queue에 적재된 setTimeout의 콜백을 Call Stack에 호출하여 실행

//결과는  2 Macrotask로 나중에 호츌한 프로미스의 콜백이 먼저 실행됨











