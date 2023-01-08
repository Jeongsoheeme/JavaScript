// 변수규칙!
// 라틴문자(0-9, a-z, A-Z), 대소문자를 구분함, 한국어는 안됨, 예약어 사용 안됨, 숫자로 시작하면 안됨, 특수문자 안됨(_, $ 두가지는 예외), 이모지 안됨
// 여러개의 변수를 1, 2, 3 숫자로 구분하면 안좋음 -> 최대한 의미있는 이름으로 작성하기
// 추천: camelCase (lickThis)

let apple;
let redApple;

// 나쁜예제
let number = 20;

// 좋은예제
let myAge = 20;

// 나쁜예제
let audio1;
let audio2;

// 좋은예제
let backgroundAudio;
let windAudio;

//꿀팁!
let audioBackground;
let audioWind;

//주된 단어 위치를 고정해서 작성하면 앞에 단어만 치면 탭으로 찾을 수 있다.
audioBackground;