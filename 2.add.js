const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// const fruits = ['🍌', '🍎', '🍇', '🍑'];
// 추가, 삭제 - 좋지 않은 방식 
fruits[6] = '🍓'; // 인덱스로 바로 넣는것은 좋지 않다. 실수로 더 멀리 추가될 수 있다
console.log(fruits);

delete fruits[1];
console.log(fruits); // 삭제되고 그자리에 empty가 된다

