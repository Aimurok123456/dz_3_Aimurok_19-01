// Задача №1.
// Если переменная а больше нуля - то в ggg запишем функцию,
// которая выводит один !, иначе запишем функцию,
// которая выводит два !.
let a;
if (a > 0) {
    let ggg = function() {
        console.log('!');
    }
} else {
    let ggg = function() {
        console.log('!!');
    }
}

// Задача №2.
// Заполните массив 10-ю иксами с помощью цикла

let arr = [];

for( i = 1; i <= 10; i++ ) {
    arr[i] = 'x';
}
console.log(arr);



// Задача №3.
// Сделайте функцию, которая считает и выводит
// количество своих вызовов.
// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4


function creatCounter() {
    let i = 1;
    return function() {return i++};
}

let func = creatCounter();

console.log(func());
console.log(func());
console.log(func());
console.log(func());

