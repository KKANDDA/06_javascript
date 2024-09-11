// 생성자 함수

// 객체 리터럴에 의한 객체 생성
const student1 = {
    name:"서현준",
    age:36,
    getInfo(){
        return`${this.name}은 ${this.age}세 입니다.`
    }
};

// 생성자 함수에 의한 객체 생성
// 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여
// 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

function Student(name, age){ // 생성자 함수는 만들 때 대문자로 만든다.
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}은 ${this.age}세 입니다.`
    }
}

const student3 = new Student("서현욱", 35);
const student4 = new Student("서현오", 31);

// 메소드 호출
console.log(student3.getInfo());
console.log(student4.getInfo());

// 자바에서 클래스를 통해 만들어진 객체는 인스턴스라고 부른다.
// 자바스크립트는 기본적으로 객체(오브젝트)이고, 인스턴스라 부를 수 있는 것은 클래스를 통해 만들거나, 생성자 함수를 통해 만든 것이다.

class test {
    constructor(name, age, getInfo){
        this.name = name;
        this.age = age;
        this.getInfo =getInfo;
    }
}

const student5 = new test("서양일", 70, function(){});
console.log(student5);
