// array
// 배열은 여러 개의 값을 순차적으로 나열한 자료구조이다. 자바의 리스트와 비슷..

// 1. 배열 리터럴을 통해 배열 생성
const arr = ['바나나', '복숭아', '키위']; // 대괄호 안의 내용물은 요소이고 뭐든 올 수 있다.
console.log(arr);

// 2. 배열 생성자 함수
const arr2 = new Array();
console.log(arr2);

// 전달 된 인수가 1개이고 숫자인 경우 length 값이 인수인 배열 생성
const arr3 = new Array(10);
console.log(arr3);

// 전달 된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열 생성
const arr4 = new Array(1,2,3);
console.log(arr4);


// 3. Array.of 메소드
// 전달된 인수를 요소로 갖는 배열 생성
console.log("----------------------")
console.log(Array.of(10));
console.log(Array.of(1,2,3));
console.log(Array.of("hello", "js"));

// 배열의 요소는 자신의 위치를 나타내는 인덱스를 가진다.
// 요소에 접근할 때는 대괄호 표기법을 사용한다.
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log(typeof arr); // 타입 자체는 객체이지만 상기와 같은 방법으로 배열을 만들고 인덱스 번호를 통해 요소에 접근할 수 있다.

// 자바스트립트의 모든 값이 객체의 프로퍼티 값이 될 수 있으므로,
// 모든 값이 배열의 요소가 될 수 있다.
const arr5 =[
    "서현준",
    36,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function(){}

]

for (let i=0; i<arr5.length; i++){
    console.log(arr5[i]);
}
