// 재귀함수

// 자기 자신을 호출하는 함수

// 함수가 자기 자신을 호출하는 것으 재귀호출이라고 한다..
// 재귀호출을 수행하는 함수인 재귀함수는 반복되는 처리를 위해 사용한다.

// 팩토리얼
function factorial(n){
    // n이 1이하일 때 재귀를 멈춘다..
    if(n<=1) return 1;
    // 재귀호출
    return n* factorial(n-1)
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

factorial(5) = 5* factorial(4)
factorial(4) = 4* factorial(3)
factorial(3) = 3* factorial(2)
factorial(2) = 2* factorial(1)
factorial(1) = 1

