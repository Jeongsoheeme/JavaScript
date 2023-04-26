// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍌', '🍎', '🍇'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); //true

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤
let length = fruits.push('🍑'); //배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('🍓'); //배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop();
console.log(fruits); // 배열
console.log(lastItem); // 배열 제일 마지막 요소

// 제거 - 제일 앞
let lastItem2 = fruits.shift();
console.log(fruits); // 배열
console.log(lastItem2); // 배열 제일 마지막 요소

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1);
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(deleted);
fruits.splice(1, 0, '🍎', '🍇'); // 0이라서 중간에 안지우고 요소를 넣을 수 있다.
console.log(fruits); // 배열 자체를 수정(업데이트)