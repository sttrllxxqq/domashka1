let str1 = prompt("Введіть перший рядок:");
let str2 = prompt("Введіть другий рядок:");
let str3 = prompt("Введіть третій рядок:");
console.log(`${str1}${str3}${str2}`);

//

let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");
let sum = parseInt(num1) + parseInt(num2);
let sub = parseInt(num1) - parseInt(num2);
let mul = parseInt(num1) * parseInt(num2);
let div = parseInt(num1) / parseInt(num2);
alert(`${num1}+${num2}=${sum}\n${num1}-${num2}=${sub}\n${num1}*${num2}=${mul}\n${num1}/${num2}=${div}`);

//

let hours = prompt("Введіть кількість годин:");
let seconds = Number(hours) * 60 * 60;
alert(`У ${hours} годинах ${seconds} секунд`);
