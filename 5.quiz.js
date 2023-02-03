// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

// 퀴즈1 풀이
// function replace(fruit, from, to) {
//     const replaced = Array.from(fruit);
//     for(let i = 0; i <= replaced.length; i++) {
//         if (replaced[i] === from) {
//             replaced[i] = to;
//         }
//     }
//     return replaced;
// };

// const fruit = ['🍌', '🍓', '🍇', '🍓'];
// const result = replace(fruit, '🍓', '🥝');
// console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// 퀴즈2 내 풀이
// const fruit2 = ['🍌', '🥝', '🍇', '🥝'];
// function count(fruit2, pick) {
//     const array = Array.from(fruit2);
//     const a = [];
//     for(let i = 0; i <= array.length; i++) {
//         if(array[i] === pick){
//             a.push(array[i]);
//         }
//     }
//     return a.length;
// };

// const result2 = count(fruit2, '🥝');
// console.log(result2);

// 퀴즈2 다른 풀이
// function count(array, item) {
//     let counter = 0;
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === item) {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(count([ '🍌', '🥝', '🍇', '🥝' ], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// 퀴즈3 내풀이
let array1 = ['🍌', '🥝', '🍇'];
let array2 = ['🍌', '🍓', '🍇', '🍓'];

function twice(array1, array2){
    const a = [];
    for(let i = 0; i < array1.length; i++){
        for(let i1 = 0; i1 < array2.length; i1++){
            if(array1[i] === array2[i1]){
                a.push(array1[i]);
            }
        }
    }
    return a;
}

console.log(twice(array1, array2));

// 퀴즈3 다른 풀이

function match(input, search) {
    const result = [];
    for(let i = 0; i < input.length; i++){
        if(search.includes(input[i])){
            result.push(input[i]);
        }
    }
    return result;
}
console.log(match(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));