const fruits = ['π', 'π', 'π', 'π'];

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// const fruits = ['π', 'π', 'π', 'π'];
// μΆκ°, μ­μ  - μ’μ§ μμ λ°©μ 
fruits[6] = 'π'; // μΈλ±μ€λ‘ λ°λ‘ λ£λκ²μ μ’μ§ μλ€. μ€μλ‘ λ λ©λ¦¬ μΆκ°λ  μ μλ€
console.log(fruits);

delete fruits[1];
console.log(fruits); // μ­μ λκ³  κ·Έμλ¦¬μ emptyκ° λλ€

