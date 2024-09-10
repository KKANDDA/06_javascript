// 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.

let student = {
    name : "유관순", // 키 : 밸류
    age : 16
}

console.log(student);

let obj = {
    normal : "normal value",
    '@ s p a c e @' : "space value",
    "":"", // 빈문자열도 가능은 하다. 권장하지 않을 뿐..
    0:1, // 문자로 바뀌고 나옴. 정수는 오름차순으로 정렬, 키 값은 기본적으로 문자열이다.
    var : "var", // 예약어도 가능은하다. 권장하지 않을 뿐..
    normal : "normal" // 덮혔다. 키는 중복되지 않는다.
};

let key2 =1;
obj[key2] = "test value";

console.log(obj); // 변수 이름이 들어가는 것이 아니라, 변수 값이 들어간다. 프로퍼티 키를 동적으로 생성했다. 오름차순!