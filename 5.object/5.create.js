// const apple = {
//     name: 'apple',
//     display: function(){
//         console.log(`${this.name}: π`);
//     },
// };

// const orange = {
//     name: 'orange',
//     display: function(){
//         console.log(`${this.name}: π`);
//     },
// };

//μμ±μ ν¨μ : λλ¬Έμλ‘ μμ
function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}:${this.emoji}`);
    };
    //return this; // μλ΅κ°λ₯ : μμ±μ ν¨μμμλ μλμΌλ‘ λ¦¬ν΄μ΄ λλ€
}

const apple = new Fruit('apple', 'π');
const orange = new Fruit('orange', 'π');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
console.log(apple.display);