// function(함수) : 특정 동작(기능)을 수행하는 일부 코드의 집합(부분)

// 함수 선언
function hello() {
    // 실행 코드
    console.log("Hello")
};

// 함수 호출(실행행) ()
hello();
hello();
hello();


// return으로 함수 밖으로 값을 내보낼 수 있다(반환)
function returnFunc() {
    return 123
};

let a = returnFunc();
console.log(a)


// a와 b는 매개변수(Parameters)
function sum(a, b) {
    return a + b
};

let b = sum(1, 2);  // 1, 2는 인수(Arguments)
let c = sum(4, 6);
console.log(b, c);


// 기명(이름 있는) 함수
// 함수 선언!
function hello() {
    console.log("Hello")
};

// 익명(이름 없는) 함수 (데이터로 활용되거나 변수에 할당하여 사용함)
// 함수 표현!
let world = function () {
    console.log("World")
};

hello();
world();


const heropy = {
    name: 'Heropy',
    age: 85,
    getName: function() {       // method(메소드) : 객체 안에 정의된 함수 (객체의 동작)
        return this.name        // this: this가 소속된 객체
    }
};

const hisName = heropy.getName();        // getName 메소드 호출
console.log(hisName);