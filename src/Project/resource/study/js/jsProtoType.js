//js prototype

//자바스크트 최적화를 위해 사용
//객체를 생성할 때 같은 속성들이 중복되어 메모리를 잡아먹는것을 방지할 수 있음

//프로토 타입 선언 프로토타입의 이름 시작에는 꼭 대문자가 들어가야됨.
function Person(){} 

//프로토타입 객체 추가
var jisoo = new Person();
var joon = new Person();

//프로토 타입의 속성 함수 추가 getType 속성을 추가하고 123123을 리턴한다
Person.prototype.getType = () => {
    return 123123
}

//모두 123123을 반환한다.
console.log(jisoo.getType());//123123
console.log(joon.getType());//123123


console.log('-----------------------------------------------------------------------')
//es6부터 도입된 class 프로토타입 선언
class Obj {

    //constructor의 매개변수를 지정해준다. 프로토 타입 객체 추가 할 때 매개변수 할당값으로 사용가능.
    constructor(abc, asd){
        //프로토타입 속성 추가
        this.firstName = abc;
        this.asd = '사람'
    }
    
    //프로토타입 리턴함수
    say() {
        //firsName는 매개변수로 받은 문자열이 리턴되고 asd는 어떤 객체가 호출하던 사람으로 리턴된다.
        console.log(this.firstName, this.asd);
    }
}

const my = new Obj('박',''); //박 사람
const your = new Obj('김', '');// 김 사람
my.say();
your.say();

console.log(Obj);
console.log(Obj.prototype);

// 변수에 박 사람이 할당됨
let asdf = my.say();

// 참고 블로그 : https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67
