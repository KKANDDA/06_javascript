// 일반 함수와 다른 점
function Student(name, age){
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}은 ${this.age}세 입니다.`;
    }
}

// 일반 함수와 생성자 함수의 특별한 형식적 차이는 업삳.
// new 연산자와 함께 호출하면 생성자 함수로 동작한다.
// 만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작한다.

const student = Student("강감찬", 35); // new 안 붙이면 일반 함수로 동작한다. 
console.log(student); // 
console.log(age); // this 는 전역을 가르키기 때문에 new 를 붙이지 않으면 의도하지 않은 전역변수가 된다. 하지만 new 를 붙여 생성자를 사용하면 this 는 생성자 안에 갇혀 지역변수가 된다.

// 상기 의도하지 않은 전역 변수화를 막기 위해 ES6 에서는 new.target 을 지원한다.
// 생성자 함수가 new 없이 호출되는 것을 방지하기 위해
function Dog(name, age){
    if(!new.target/*new가 없으면 undefined*/){ // new 없이 호출하면 펄시인데, !를 붙어서 트루시로 만들어서 if문을 발동..
        return new Dog(name, age); // 재귀함수로 new 를 붙여서 리턴
    }
    this.name=name;
    this.age=age;
}

// 대부분의 빌트인 생성자(기본적을 제공해 주는 생성자) 함수(Object, String, Number ...)는
// new 연산자와 함께 호출되었는지를 확인한 후 적절하게 반환한다.
const obj = Object();
console.log(obj);