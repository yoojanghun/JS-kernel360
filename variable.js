// 변수 : 데이터를 저장하고 참조(사용)하는 데이터의 이름
// let, const로 변수 선언

// 재사용이 가능!
// 변수 선언!
let a = 2;
let b = 5;

console.log(a + b); // 7
console.log(a - b); // -3
console.log(a * b); // 10
console.log(a / b); // 0.4


// let : 값(데이터)의 재할당 가능!
console.log(a); // 2

a = 999;
console.log(a); // 999


// const : 값(데이터)의 재할당 불가!
const c = 12;
console.log(c); // 12

c = 999;
console.log(c); // TypeError: Assignment to constant variable.