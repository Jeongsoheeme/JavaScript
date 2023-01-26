// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)

// 내가 사용한 식
const all = function(){
    for(let i=0; i <= a; i++){
    }
}

const double = function(){
    for(let i = 0; i <= a; i++){
        let num = i * 2;
        console.log(num);
    }
}

function iterate(a, action){
    if (a > 5){
        return;
    }
    let result = action(a);
    console.log(result);
    return result;
}

iterate(5, all);
iterate(5, double);

// 강의에서 사용한 식
function iterate(max, action){
    for(let i = 0; i <= max; i++){
        action(i);
    }
}

function log(num){
    console.log(num);
}

function double(num) {
    console.log(num * 2);
}

iterate(5, log);
iterate(5, double);

// 바로 console.log를 이용해서 간결하게 나타내 줄 수 있다.
iterate(5, (num) => console.log(num));
iterate(5, (num) => console.log(num * 2));


setTimeout(() => {
    console.log('3초뒤 이 함수가 실행될거예요')
}, 3000);


