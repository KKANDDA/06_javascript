/*
object (객체)
자바스크립트는 객체 기반 프로그래밍 언어로 원시 값(단순 값)을 제외한 나머지 값(함수, 배열 등)은 모두 객체이다.
객체는 0개 이상의 프로퍼티로 구성된 집합이며, 프로퍼티는 key 와 value 로 구성된다.
자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있다.
프로퍼티 값이 함수일 경우 method 라고 부른다.

객체 생성 방법
자바스크립트는 프로토타입 기반 객체지향 언어로 클래스 기반 언어와는 달리 다양한 객체 생성 방법을 지원한다.
*/

// 객체 리터럴(개발자가 생성한 의도된 값을 리터럴이라 한다.)
let student ={
    name : "유관순",
    age : 16,
    getInfo : function(){
        console.log(`${this.name}은 ${this.age}세 입니다.`)
    }
};

console.log(typeof student);
console.log(student);
console.log(student.getInfo());

// Object 생성자 함수
let student2 = new Object();
student2.name = "홍길동";
student2.age = 20;

student2.greet = function(){
    console.log(`${this.name}은 ${this.age}세 입니다.`)
};

student2.greet();

let student3 ={}; // 빈 객체
console.log(typeof student3);
console.log(student3);

class Student4 { // 자바에서 봤던 것들이다. 클래스 안의 메소드들.. 
    constructor(name, age){ // 메소드
        this.name = name;
        this.age = age;
    }
}
const studentA = new Student4("이순신", 30);
console.log(studentA); 