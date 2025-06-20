// method Chaining : 메소드를 chain처럼 연결해서(붙여서) 쓸 수 있도록 하는 것

const a = 'Hello~';

// split: 문자를 인수 기준으로 쪼개서 배열로 반환.
// reverse: 배열을 뒤집기.
// join: 배열을 인수 기준으로 문자로 병합해 반환.

const b = a.split('').reverse().join(''); // 메소드 체이닝...

console.log(a); // Hello~
console.log(b); // ~olleH