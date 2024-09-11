// 함수 표현식

// 1급 객체는 변수에 할당할 수 있다. 함수는 1급 객체이다.

// 1급 객체는 리턴값이 존재하는 객체를 말한다. void 형식의 함수도 리턴 한다.

// 선언문과 표현식의 차이, 표현식은 변수에 담는 것을 말한다.



let hello = function(name){
    return `${name}님 안녕하세요`;
} // 변수에 함수만 담겨있으면
console.log(hello('홍길동')) // 변수명으로 함수를 호출할 수 있다.

let hello2 = {
    fun1:function(name){
    return `${name}님 안녕하세요`;
    }
} // 함수에 키 값이 있으면
console.log(hello2.fun1('서현준')) // 키로 꺼내야 한다.



let calc = function add(a,b){
    return a+b;
}

console.log(calc(10,20));
// console.log(add(10,20));
// 표현식으로 담기면, 함수로 호출 할 수 없고, 변수로 호출해야 한다.
