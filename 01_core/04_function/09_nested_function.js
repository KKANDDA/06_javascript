// 중첩 함수

// 함수 내부에 정의된 함수를 중첩 함수 또는 내부 함수라고 한다..
// 중첩 함수를 포함하는 함수는 외부 함수라고 한다..

function outer(){ // 중첩 함수
    let outerVal = "외부 함수";

    function inner(){
        let innerVal = "내부 함수";
        console.log(outerVal, innerVal) // 내부함수에서는 외부함수에 접근할 수 있고,
    }
    inner();
}
outer(); // 아웃터를 호출해서 이너를 실행시켰다. // 최상단에서는 내부 함수에 접근할 수 없다.