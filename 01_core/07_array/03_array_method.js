// 배열 메소드

const arr = [];
const arr2 = Array(); // new 생략가능, 생성자 함수를 사용

// indexOf
// indexOf : 배열에서 요소가 위치한 딘덱스를 리턴
// leastIndexOf : 배열의 요소가 위치한 마지막 인덱스를 리턴
// includes : 배열에 해당 요소 포함 여부 리턴
const foodList = ["물회", "삼계탕", " 냉면", "수박", "물회", "피자", "햄버거", "사철탕", "보신탕", "염소고기", "소고기", "양고기", "요아정"]

console.log(`foodList.indexOf("물회") : ${foodList.indexOf("물회")}`);
console.log(`foodList.indexOf("물회,1") : ${foodList.indexOf("물회", 1)}`); // 인덱스 번호 1부터 탐색을 시켰다.
console.log(`foodList.indexOf("삼겹살") : ${foodList.indexOf("삼겹살")}`); // 요소에 없는 것을 탐색시키면 무조건 -1를 뱉는다.

console.log(`foodList.lastIndexOf("물회") : ${foodList.lastIndexOf("물회")}`) // 마지막 물회의 인덱스 번호를 뱉었다.
console.log(`foodList.lastIndexOf("물회", 1) : ${foodList.lastIndexOf("물회", 1)}`); // 인덱스 번호 1까지 탐색을 시켰다. 0, 1 까지만 탐색
console.log(`foodList.lastIndexOf("삽겹살") : ${foodList.lastIndexOf("삽겹살")}`);

console.log(`foodList.includes("물회") : ${foodList.includes("물회")}`);
console.log(`foodList.includes("삽겹살") : ${foodList.includes("삼겹살")}`); // 있으면 트루 없으면 펄스

// .push : 배열의 맨 뒤에 요소 추가
// .pop : 배열의 맨 뒤에 요소를 반환 후 제거
const chineseFood =["짜장면", "짬뽕", "탕수육"];

console.log(`push 전 chineseFood : ${chineseFood}`);

chineseFood.push("칠리새우");
chineseFood.push("공부가주");

console.log(`push 후 chineseFood : ${chineseFood}`);

console.log(`pop() : ${chineseFood.pop()}`);
console.log(`pop() : ${chineseFood.pop()}`);
console.log(`pop() : ${chineseFood.pop()}`);

console.log(`pop() 후 chineseFood : ${chineseFood}`);

// unshift : 배열의 맨 앞에 요소 추가
// shoift : 배열의 맨 앞 요소를 반환 후 제거

chineseFood.unshift("탕수육");
chineseFood.unshift("공부가주");
console.log(`unshift 후 chineseFood : ${chineseFood}`);

console.log(`shift : ${chineseFood.shift()}`);
console.log(`shift : ${chineseFood.shift()}`);
console.log(`shift() 후 chineseFood : ${chineseFood}`);

// concat : 두 개 이상의 배열을 결합 (mysql 에서 문자 더할 때 사용해 봤다)
const idol1 = ['아이브', '에스파'];
const idol2 = ['뉴진스', '르세라핌'];
const idol3 = ['핑클', 'SES'];

const mix = idol1.concat(idol2);
console.log(mix);

const mix2 = idol3.concat(idol1, idol2);
console.log(mix2);


// slice : 배열의 요소 선택 잘라내기
// splice : 배열의 index 위치 요소를 제거 후 추가
const front = ["html", "css", "javascript", "jQuery"];

// slice(시작 인데스, 종료 인덱스)
console.log(`front.slice(1,3) : ${front.slice(1,3)}`); // 1부터 3 전까지 그래서 1, 2만 나온다.
console.log(front); // 원본 배열에는 영향을 주지 않음

// splice(인덱스, 제거수 , 추가값1, 추가값2 ...)
console.log(`front splice(3,0,"React") : ${front.splice(3,0,"React")}`); // 배열 안에 추가만 하고 싶으면 제거 수를 넣지 않으면 되고
console.log(front);

console.log(`front.splice(4,1,"flutter") : ${front.splice(4,1,"flutter")}`); // 제거하고 싶다면 제거할 요소의 갯수를 넣는다. 해당 인덱스부터 1개가 지워지고 그 자리에 들어갔다.
console.log(front);


// join : 배열을 구분자로 결합하여 문자열로 반환
const snackList = ["사탕","초콜릿","껌","과자"];
console.log(snackList); // 배열 그 자체를 보여준다. []
console.log(`snackList.join() : ${snackList.join()}`); // 아무 것도 입력하지 않았을 때믄 기본 값이 , 이다! // .toString 이 생략되어 있다.
console.log(`snackList.join("/") : ${snackList.join("/")}`); // 문자열로 감싸야 사용된다.


// recerse : 배열의 순서를 뒤집음
console.log(`[1,2,3,4,5].reverse() : ${[1,2,3,4,5].reverse()}`);
