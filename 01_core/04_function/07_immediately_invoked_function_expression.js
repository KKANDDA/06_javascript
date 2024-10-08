// 정의하자 마자 바로 실행되는 함수

// 즉시 실행 함수
// 함수 정의와 동시에 즉시 호출되는 함수로 단 한번만 호출할 수 있다.

// 함수 이름이 없는 익명 함수를 사용하는 것이 일반적이다..

(function(){
    console.log("익명 즉시 실행 함수!");
})(); // 웹페이지를 켰을 때 바로 실행시켜줘야 하는 것이 있을 때 사용

// 함수 이름도 작성할 수 있지만 해당 이름으로 다시 호출할 수는 없다..
(function hello(name){
    console.log("기명 즉시 실행 함수!!");
    console.log(`${name}님 안녕하세요`);
})("홍길동"); // 즉시 실행되야하니 전달도 안에서 진행된다.
// hello("홍길동");