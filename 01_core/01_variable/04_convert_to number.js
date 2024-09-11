// 숫자 타입으로 변환

console.log("======= 숫자 타입으로 변환 =========")

// 산술 연산자
console.log(10-'5');
console.log(10*'5');
console.log(10/'5'); // 더하기를 제외하면 숫자로 변환.. 
console.log(10%"java"); // 산술 연산이 불가하면 형변환이고 뭐고 없다.

// 비교 연산자
console.log(10>'5');

// +단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+''); // 하지만 더하기 연산자라고 다 스트링으로 변하는 것은 아니다. 여기선 숫자 0이다.
console.log(+'1');
console.log(+'javascript');
console.log(+true);
console.log(+false);
console.log(+null); // 널은 의도적으로 개발자가 넣었기 때문에 형변환이 되지만
console.log(+undefined); // 언디파이드는 아니 된다.
console.log(+[]);



