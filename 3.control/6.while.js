// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행
let num = 5;
while(num >= 0){
    console.log(num);
    num--;
}

let isActive = true;
let i = 0;
while(isActive) {
    console.log('아직살아있다!');
    if (i === 1000) {
        break;
    }
    i++;
}

// while은 조건이 맞았을때 비로소 실행하고 do-while은 조건이 맞던 아니던 실행을 먼저 한다(do-while문은 꼭 먼저 한번 실행을 할 때 사용한다).
do {
    console.log('do-while 아직살아있다!');
} while (isActive);