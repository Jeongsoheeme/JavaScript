// 고차함수 이용해서 풀어보기!

// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input : ['🍌', '🍓', '🍇', '🍓'];
// output: [ '🍌', '🥝', '🍇', '🥝' ];

// 나의 풀이
// let arr = ['🍌', '🍓', '🍇', '🍓'];

// function replace(array, from, to) {
//    return array.map((item) => {
//         if(item === from){
//             return to;
//         } else {
//             return item;
//         }
//     });
// }
// console.log(replace(arr, '🍓', '🥝'));

// 다른풀이
let arr = ['🍌', '🍓', '🍇', '🍓'];

function replace(array, from, to){
    return array.map((item) => item===from? to:item)
}
console.log(replace(arr, '🍓', '🥝'));



// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// 나의 풀이
// let arr2 = [ '🍌', '🥝', '🍇', '🥝' ];

// function count(array, item){
//     let result = 0;
//     array.map((value) => value === item ? result++ : result);

//     return result;
// }
// console.log(count(arr2, '🥝'));

// 다른 풀이
let arr2 = [ '🍌', '🥝', '🍇', '🥝' ];

function count(array, item){
    return array.filter((value) => value === item).length;
    // return array.reduce((count, value) => {
    //     if (value === item){
    //         count++;
    //     }
    //     return count;
    // }, 0);
}
console.log(count(arr2, '🥝'));




// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

let arr3 = ['🍌', '🥝', '🍇'];
let arr4 = ['🍌', '🍓', '🍇', '🍓'];

// 나의 풀이
// function match(array1, array2){
//     return array1.map((value) => {
//         return array2.filter((value2) => value === value2);
//     });
// };
// console.log(match(arr3, arr4).flat(2));

// 다른 풀이
function match(array1, array2){
    return array1.filter((item) => array2.includes(item));
}
console.log(match(arr3, arr4));

// 퀴즈4: 5이상(보다 큰)의 숫자들의 평균 구해라 
const nums = [3, 16, 5, 25, 4, 34, 21];

// 나의 풀이
// function average(array, num){
//     const filteredArray = array.filter(value => value >= num);
//     const sum = filteredArray.reduce((acc, value) => acc + value, 0);
//     const avg = sum / filteredArray.length;

//     return avg;
// }
// console.log(average(nums, 5));

// 다른 풀이
const result2 = nums 
 .filter((num) => num > 5)
 .reduce((avg, num, _, array) => avg + num / array.length, 0); 
console.log(result2);