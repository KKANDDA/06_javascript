// in 연산자

// 프로퍼티 존재 여부 확인
// for 문과 함께 객체 내부 키 순회

let student = {
    name : "유관순",
    age : 16,
    test : undefined
}

console.log("name" in student);
console.log("age" in student);
console.log("test" in student);
console.log("height" in student); // 존재 여부 확인

// for in 반복문

for(let key in student){ // 키의 값들을 뽑아올 수 있다.
    console.log(`key : ${key}`);
    console.log(`student[key] : ${student[key]}`);
}
