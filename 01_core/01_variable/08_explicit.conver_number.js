// 숫자 타입으로 변환

console.log("============= 숫자 타입으로 변환 =============")

//1. Number 생성사 함수를 new 연산자 없이 호출
console.log(Number('10'));
console.log(Number('10.01'));
console.log(Number(true));

// 2. perseInt, parseFloat 함수 이용
console.log(parseInt('10'));
console.log(parseFloat('10'));
console.log(parseInt('10.01')); // 소숫점 이하 절삭
console.log(parseFloat('10.01')); // 소숫점 이하 보전