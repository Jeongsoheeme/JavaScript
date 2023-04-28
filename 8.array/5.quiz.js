// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// output: [ '🍌', '🥝', '🍇', '🥝' ]

// 나의풀이
// let input = ['🍌', '🍓', '🍇', '🍓'];
// let output = Array.from(input);

// for(let i=0; i < input.length; i++){
//     if(input[i] === '🍓'){
//         output.splice(i,1,'🥝');
//     }
// }
// console.log(output);

// 다른풀이
function replace(array, from, to) {
    const replaced = Array.from(array);
    for(let i=0; i < replaced.length; i++){
        if(replaced[i] === from){
            replaced[i] = to;
        }
    }
    return replaced;
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// 나의 풀이
// let input2 = [ '🍌', '🥝', '🍇', '🥝' ];
// let count = 0;

// for(let i = 0; i < input2.length; i++){
//     if(input2[i] === '🥝'){
//         count++;
//     }
// }
// console.log(count);

// 다른 풀이
function count(array2, item){
    let counter = 0;
    for(let i = 0; i < array2.length; i++){
        if(array2[i] === item){
            counter++;
        }
    }
    return counter;
}

console.log(count([ '🍌', '🥝', '🍇', '🥝' ], '🥝'))


// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// 나의 풀이
// let input3 = ['🍌', '🥝', '🍇'];
// let input4 = ['🍌', '🍓', '🍇', '🍓'];
// let output2 = [];

// for(let i = 0; i < input3.length; i++){
//     for (let j = 0; j < input4.length; j++){
//         if(input3[i] === input4[j]){
//             output2.push(input4[i]);
//         }
//     }
// }
// console.log(output2);

// 다른풀이
function match(array, array2){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(array2.includes(array[i])){
            result.push(array[i]);
        }
    }
    return result;
}

console.log(match(['🍌', '🥝', '🍇'],['🍌', '🍓', '🍇', '🍓'],))