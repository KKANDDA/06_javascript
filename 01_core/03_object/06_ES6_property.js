// 프로퍼티 값 단축 구문


let ididid = "p-0001";
let priceppp = 30000;

let product = {
    id:ididid,
    price : priceppp
};
console.log(product);

//ES6 단축 문법
let product2 = {ididid, priceppp};
console.log(product2);

// 계산된 프로퍼티 이름
let prefix = 'key';
let index = 0;

let obj ={};
obj[prefix+'-'+index++]= index;
obj[prefix+'-'+index++]= index;
obj[prefix+'-'+index++]= index;
console.log(obj); // 안 되야 하는 것이 맞으나, ES6 에선 가능하다. 이전 버전에서는 불가능했다.

let obj2 ={
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index
};
console.log(obj2); 

// 메소드 단축

let dog = {
    name : "흰둥이",
    eat : function(food){
        console.log(`${this.name}는 ${food}를 맛있게 먹어요`)
    }
};
dog.eat("고구마");

let dog2 = {
    name : "뽀삐",
    eat(food){
        console.log(`${this.name}는 ${food}를 맛있게 먹어요`);
    }
}
dog2.eat("고구마");