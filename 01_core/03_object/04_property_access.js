// 프로퍼티 접근

let dog = {
    name : "뽀삐",
    eat : function(food){
        console.log(`${this.name}은 ${food}를 맛있게 먹어요`)
    }
};

console.log(dog.name);
dog.eat("고구마");

dog["eat"]("고구마"); // 대괄호 표기법을 쓸 때는 따옴표를 넣어야 한다.
console.log(dog['name']);

let obj = {
    'dash-key' : 'dash-value',
    0:1
}

// 식별자(key) 네이밍 규칙
// 허용하는 문자
// 영문자, 숫자(첫 글자는 올 수 없음)
// 예약어는 사용할 수 없음
// 대소문자를 구분함
// 카멜케이스로 작성함
// 하지만 지키지 않아도 작동은 함. 권장할 뿐! 다만 상기 규칙을 어겼을 경우 대괄호[] 사용법을 이용해야 한다.

console.log(obj['dash-key']);
// console.log(obj.dash-key); // 일반적으로 객체명.키 으로 접근 가능해야 하나, 규칙에서 벗어난 키는 객체명["키"] 로 접근해야 한다.

console.log(obj[0]); // 정수는 자동 형변환을 해준다.
console.log(obj['0']);
// console.log(obj.0); // 일반적인 사용법
