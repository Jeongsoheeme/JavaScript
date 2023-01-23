// 삼항 조건 연산자 Ternary Operator
// 조건 ? 참인경우 : 거짓인 경우
let fruit = 'orange';
if (fruit === 'apple') {
    console.log('🍎');
} else {
    console.log('😍');
}

fruit === 'apple' ? console.log('🍎') : console.log('😍');

let emoji = fruit === 'apple' ? '🍎' : '😍';
console.log(emoji);

let emogi = fruit === 'apple' ? '사과' : '이모티콘'