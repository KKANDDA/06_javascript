// 논리 연산자
// ||, &&, !

//OR, AND 연산자 표현식의 결과가 떄로는 불리언이 아닐 수 있다.. 
console.log(`apple` || `banana`); // 둘다 트루시면 앞에 것을 뱉고 (앞이 연산되면 뒤는 안 함.)
console.log(false || `banana`); // 둘 중 하나가 트루시면 트루시인 것을 뱉는다.

console.log(`apple` && `banana`); // 둘다 비교하여 뒤에 것을 뱉는다.
console.log(false && 'banana'); // 둘다 트루여야 하니 거짓
console.log(null && 'banana'); // Falsy 일 경우 Falsy 인 값 그 자체를 뱉는다. false 와 Falsy 는 다르다. 거짓과 거짓으로 판단했다는 차이..


// 응용!!!!!!!
let num = 1;

if(num % 2 == 0){
    console.log("짝수입니다.")
}else{
    console.log("홀수입니다.")
}
num%2 == 0 && console.log("짝수입니다.") // 앤드는 둘다 참이어야 하는데, 앞에서 벌써 거짓이 떴으니 뒤는 읽지도 않았다.
num%2 == 0 || console.log("홀수입니다.") // 오아는 둘중 하나가 참이면 출력한다. 그리고 앞이 참이면 뒤를 읽지 않으니 이런 응용이 가능하다.


let obj = null;
//객체라고 기대하는 변수가 null 또는 undefined 일 때

let val = obj && obj.value;