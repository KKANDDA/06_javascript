// ES6 에서 도입된 화살표 함수는 function 키워드 대신
// 화살표를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있다..
// 화살표 함수는 익명 함수로 정의한다. 본문이 한 줄인 함수를 작성할 대 유용하다..

let message;

// 기존 function
message = function 표현식안의함수의이름은의미가없다호출을할수없으니까(){
    return "hello world";
}
console.log(message());

// function 키워드 생략 가능
message = () => {
    return "Array Function";
}
console.log(message());

// 명령문이 하나만 있을 경우 중괄호 생략 가능
message = () => "Array Function are Simple!";
console.log(message()); // 이 때 함수 몸체 내부의 문이 값으로 평가될 수 있으면 암묵적으로 반환 // 함수를 변수처럼 사용할 수 있도록 도와주는 듯..

// 매개변수가 있는 경우
message = (val1, val2) => "Arrow" + val1 + val2;
console.log(message("Function","!"));

// 매개변수가 하나면 소괄호 생략 가능
message = val => "Arrow " + val;
console.log(message("Function!!"));

// 구조 분해 할당
let obj = {
    a:"test",
    b:"value"
}
const test =({a,b}) => `hi ${a} + ${b}`; // {} 안의 키를 추적
console.log(test(obj)); // test 함수에 obj 객체를 인자로 넘기고, test 함수에서 해당 obj 객체의 키값을 추적했다.