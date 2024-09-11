// 매개변수와 전달인자

function hello(name){
    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    console.log(name);

    // 모든 인자는 암묵적으로 arguments 객체의 프로퍼티로 보관한다.
    console.log(arguments);

    return `${name}님 안녕하세요!`;
}

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// console.log(name); 실행을 해야 오류가 난다. 힌트만 줄 뿐..

let result = hello("홍길동");
console.log(result);

// 함수는 매개변수의 갯수와 인자의 갯수가 일치하는지 체크하지 않는다.
// 인수가 부족해서 할당되지 않은 매게변수의 값은 undefined 이다.
result = hello();
console.log(result);

// 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시한다.
// 모든 인수는 암묵적으로 arguments 에 보관된다.
result = hello("홍길동", "유관순"); // 유관순 보관됨
console.log(result); // 홍길동만 출력됨

// 인수를 전달하지 않았을 경우, undefined 를 전달하였을 경우
// ES6에서 도입된 매개변수 기본값을 사용할 수 있다.
function hi(name="서현준"){
    
    if(arguments.length!==1 || /*디폴트값 서현준을 출력하고 싶다면 앞의 조건은 삭제*/ typeof name !== 'string' || name.length === 0){
        throw new TypeError(`인수는 1개여야 하고 문자열이어야 하며 빈 문자열을 허용하지 않습니다.`)
    }
    
    return `${name} 안녕`;
}
result = hi(5); // 정수를 넣어서
result = hi(); // 아무것도 안 넣어줬지만
console.log(result); // 기본값이 나왔다.