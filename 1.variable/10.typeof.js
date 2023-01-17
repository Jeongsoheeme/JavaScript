// typeof:데이터 타입을 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable);

let = '';
console.log(typeof variable);

variable = 123; // 할당된 값에 따라 타입이 결정됨!
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');

//자바스크립트는 dynamic(동적으로 결정)하고 weakly typed(어떤값을 할당하는가에 따라 타입이 달라지는)의 프로그래밍 언어이다.
