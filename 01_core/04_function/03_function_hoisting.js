// 함수 호이스팅

// 함수가 밑에 있어도 끌어다 쓸 수 있다. 그러나 변수는 안 된다.

console.log(hello);
// console.log(hi); // let 은 막혀있고, var 는 가능하다. 하지만 가능해서 문제가 됐기 때문에 막은 것이다.

console.log(hello('홍길동'));
// console.log(hi('서현준'));

function hello(name){
    return `${name}님 안녕하세요`;
}

let hi = function(name){
    return `${name}님 안녕하세요`;
} // 함수는 실행전 선언이 되어있지만, 변수는 그렇지 않다.

/*
함수 선언문은 언타임 이전 자바스크립트 엔진에 의해 먼저 실행된다.
따라서 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있다.
함수 선언문이 코드의 선두로 끌어 올려진 것 처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅이라고 한다.
*/ 

test();

function test(){
    console.log("이거랑")
}

function test(){
    console.log("이거 중 어떤게 실행이 되나?")
}

//-----------------------

console.log("-------------------------------------------------------------");

// var 를 사용할 때 함수 표현식의 문제점

console.log(funTest) // 펀테스트 변수의 변화를 잘 보자. 맨 처음 var 변수명이 호이스팅 되어있지만 내용이 없기에 언디파인드..
var funTest = () => {
    console.log("1");
}
funTest(); // 호이스팅된 펀테스트에 내용이 담겼다.
var funTest = () => {
    console.log("2");
}
funTest(); // 중복된 이름을 허용해서 내용이 덮혔다.

//------------------- let 은 호이스팅도 안 된다. 중복도 안 된다.

// let funTest = () => {
//     console.log("2");
// }
// funTest();
// let funTest = () => {
//     console.log("2");
// } // 랫은 막혀있다.