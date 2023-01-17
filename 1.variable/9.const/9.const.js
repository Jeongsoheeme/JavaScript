// let 재할당이 가능
let a = 1;
a = 2;

//const 재할당이 불가능
//1. 상수
//2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 재할당 하면 안됨!

//1. 상수
const MAX_FRUITS = 5;

//2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

// apple = {};
console.log(apple);
apple.name = 'orange';
apple.display = '🍏';
console.log(apple);
// object(객체)는 '힙(Heap)이라는 메모리 공간에 따로 할당'되어있고 객체변수는 object가 할당된 '객체의 메모리 주소(Heap)'를 저장하고 있다.
// const로 선언된 변수의 object(객체) 값을 재할당 하게 되면 const 변수의 메모리에 저장된 '메모리 주소'가 바뀌지 않기에 해당 메모리 주소를 따라가 object 정보를 변경(mutable) 할 수 있다. (중요)
