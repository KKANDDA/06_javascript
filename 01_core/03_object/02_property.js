// 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.

let student = {
    name : "유관순", // 키 : 밸류
    age : 16
}

console.log(student);

let obj = {
    normal : "normal value", // 프로퍼티는 키의 중복을 허락하지 않는다. 밑에서 확인해 보자.
    '@ s p a c e @' : "space value", // 문자열 내의 띄어쓰기도 특수기호도 문자열일 뿐이다.
    "":"", // 빈문자열도 가능은 하다. 권장하지 않을 뿐..
    0:1, // 키가 문자로 바뀌어서 나옴. 그리고 정수라면 오름차순으로 정렬, 키는 기본적으로 문자열이다.
    var : "var", // 예약어도 가능은하다. 권장하지 않을 뿐..
    normal : "normal" // 키는 중복되지 않는다. 그래서 값이 덮혔다.
};

let key2 = 1;
obj['11121'] = "test value"; // 대괄호를 사용하여 키를 호출했다.
obj.normal="value";
obj['normal']="yamyam";

console.log(obj); // 변수 이름이 들어가는 것이 아니라, 변수 값이 들어간다. 프로퍼티 키를 동적으로 생성했다. 오름차순!