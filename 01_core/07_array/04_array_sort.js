// 배열 정렬 기준

let numbers = [];

for(let i =0; i<10; i++){
    numbers[i] = Math.floor/*소숫점 내림*/(Math.random()*100)+1;
}
console.log(`정렬 전 numbers : ${numbers}`);

numbers.sort();
console.log(`정렬 후 numbers : ${numbers}`); // 기본적으로 문자열 정렬이기 때문에 정수의 크기로 비교하지 않았다. 컴패어를 이용해야 가능
// 배열은 기본적으로 문자열 정렬이 되므로 한 자리수, 두 자리수가 올바르지 않게, 의도와 다르게 정렬되는 모습을 확인할 수 있다.
// 다른 정렬 기준을 사용하려면 매개변수로 compare 함수 전달


function compare(a,b){ // 이름만 빌려왔을 뿐 하단의 내용, 조건을 꼭 입력해야 한다.
    if(a>b) return 1;
    if(a==b) return 0 ;
    if(a<b) return -1;
}
// numbers.sort(compare); // sort 너 compare 이거 이용해!!
// console.log("매개변수로 compare 전달 후 숫자 오름차순 정렬");
// console.log(numbers);

numbers.sort((a,b)=>a-b); // a-b가 양수면 sort가 자체적으로 순서를 바꾼다. 내림차수는 b-a로 전달인자로 넘겨주면 된다.
console.log(numbers);