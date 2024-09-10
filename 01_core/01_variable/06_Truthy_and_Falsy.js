// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Tryuthy Falsy 로 구분한다.
// 암묵적 타입 변환이 일어난다.

let test1; // undefined 
console.log(!!test1); // ! 하나로 undefined를 불리언 타입의 참으로 형변환 시켜 삐고, 다시 ! 를 사용해 거짓으로 맹글었다. 언디파인드가 참이 됐다가 거짓이 되었다.

// 객체 리터럴
let test ={
    a : null,
    b : 0,
    fun(){
        console.log("testtest");
    }
};

test = null;
if(test?.b){ // b = 0, 0 은 Fslsy // ? 는 테스트가 null 인지 아닌 지를 먼저 확인하는 용도
    console.log("true");
}else{
    console.log("false"); // 그러니 거짓
}

test?.b ? console.log(true) : console.log(false);

console.log(test?.fun());