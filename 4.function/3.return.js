// return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
function add(a, b){
    return a + b;
}
const result = add(1, 2);
console.log(result);

// return을 함수 중간에 하게 되면 함수가 종료됨
function print(num){
    if (num < 0){
        return;
    } // 사용예: 무거운 일들을 실행하기 이전에 조건을 붙여서 해당 조건에 부합하지 않으면 일찍이 함수를 종료시켜버린다. return undefined;을 return;으로 줄여서 씀.
    console.log(num); // -> 무거운 일
}

print('text'); //굳이 반환할 필요 x