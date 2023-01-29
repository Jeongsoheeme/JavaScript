// 접근제어자 - 캡슐화
// private(#)-내부에서는 사용할 수 있고 외부에서는 사용할 수 없다, public(기본), protected
class Fruit {
    #name;
    #emoji;
    #type = '과일';
    constructor(name, emoji) {
        this.#name = name;
        this.#emoji = emoji;
    } 
    display = () => {
        console.log(`${this.#name}:${this.#emoji}`);
    };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함
console.log(apple);