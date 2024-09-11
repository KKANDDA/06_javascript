// ESS 까지는 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이였다..
// 이는 몇가지 문제를 야기한다..

// 1. 변수 중복 선언 허용
var msg = "안녕하세요";
console.log(msg);

var msg = "안녕히가세요";
console.log(msg); // 중복 선언을 허용하고 덮어쓸 수 있다.

// 초기화문이 없는 변수 선언문은 무시한다.
var msg;
console.log(msg); // 초기화가 되어있지 않아 마지막 초기화가 적용되었다.

// 2. 함수 레벨 스코프
var i =0;
for(var i=0; i<10; i++){}
console.log(i); // 의도하지 않게 값이 바뀐다.

// 3. 변수 호이스팅
console.log(test);
test = "반갑습니다.";
console.log(test);
var test; // 일단 var test; 가 호이스팅됐삣고, 그러나 초기화가 안 돼서 undefined 가 나오고 뒤이어 초기화가 이뤄졌다.
          // 흐름도 안 맞고 그래서 짐작하기도 어렵다.