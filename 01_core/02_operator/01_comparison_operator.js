// 비교 연산자
// 좌항과 우항의 비교 연산자를 비교한 다음 그 결돠를 불리언 값을 반환한다.
// if 문이나 for 문과 같은 제어문의 조선식에서 주로 사용한다.

/*
동등비교 / 일치비교
동등비교: (==, !=) 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.
일치비교: (===, !==) 연산자는 타입과 값이 모두 일치하는지 비교한다. 타입까지 같은지 확인!!
*/ 

// 숫자 1, 문자 '1', true 비교
console.log(`1=='1': ${1=='1'}`)
console.log(`1== true: ${1==true}`) // 타입을 형변환해서 비교
console.log(`1=== '1': ${1==='1'}`)
console.log(`1=== true: ${1===true}`) // 타입을 형변화하지 않고 비교

// 숫자0, 문자 '0', 빈문자열 '', false 비교 
console.log(`0 == '0': ${0=='0'}`);
console.log(`0 == '': ${0==''}`);
console.log(`0 == false: ${0==false}`); // 형변환 이후 값 비교로 참
console.log(`0 === '0': ${0==='0'}`);
console.log(`0 === '': ${0===''}`);
console.log(`0 === '': ${0===false}`);

// null, undefined 비교
console.log(`null == undefined : ${null == undefined}`);
console.log(`null === undefined : ${null === undefined}`);

// NaN 은 자신과 일치하지 않는 유일한 값이다.
console.log(`NaN == NaN : ${NaN == NaN}`);
console.log(`NaN === NaN : ${NaN === NaN}`);

console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`);

// 문자열끼리도 비교가 가능하다.
console.log(`hello === hello : ${'hello' === 'hello'}`);
console.log(`hello !== hello : ${'hello' !== 'hello'}`);

// 대소 비교
console.log(`apple < banana : ${'apple' < 'banana'}`); // 아스키 코드
console.log(`cat < Zoo : ${'cat' < 'Zoo'}`); // 아스키 코드
