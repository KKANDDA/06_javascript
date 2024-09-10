// 자바스크립트 함수는 프로퍼티 값으로 사용할 수 있다.

let dog = {
    name : "뽀삐",
    //eat : function(food){
    //    console.log(`${this.name}은(는) ${food}을(를) 맛있게 먹어요`);
    //}

    eat : (name, food) =>{ // 매개변수로 받아라 this 못쓴다.
        console.log(`${name}은(는) ${food}을(를) 맛있게 먹어요`);
    }
}

dog.eat("뽀삐","고구마");