// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (i = 0; i < 2; i++) {
//     let a = prompt("Один из последних просмотренных фильмов?", "");
//     let b = prompt("Как вы его оцените?", "");

//     if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log ('done');
//     } else {
//         console.log ('Error');
//         i--;
//     }
// }
// if (personalMovieDB.count < 10) {
//     console.log ('Просмотрено мало фильмов');
// } else if (10 <= personalMovieDB.count <= 30) {
//     console.log ('Вы классический зритель');
// } else if (30 < personalMovieDB.count) {
//     console.log ('Вы - КИНОМАН');
// } else {
//     console.log ('Произошла ошибка');
// }


// console.log(personalMovieDB);



    // for (let i = 2; i <= 16; i++) {
    //     if (i % 2 === 0) {
    //         continue;
    //     } else {
    //         console.log(i);
    //     }
    // }

    // let i = 2;
    // while ( i < 17) {  
    //     if (i % 2 !== 0) {
    //         console.log (i)
    //     }  
    //     i++;
    // }

    // Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

    // function fifthTask() {
    //     const arrayOfNumbers = [];
    
    //     // Пишем решение вот тут
    //     let i = 5;
    //     while (i < 10) {
    //         arrayOfNumbers[i];
    //         i++;
    //     }
        
    //     // Не трогаем
    //     return arrayOfNumbers;
    // }

    // const arrayOfNumbers = [];
    
    //     // Пишем решение вот тут
    //     let i = 5;
    //     while (i <= 10) {
    //         arrayOfNumbers.push(i);
    //         i++;
    //     }

    //     console.log(arrayOfNumbers)

    //     const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];

    // for (i = 0; i < arr.length; i++) {
    //     result.push(arr[i])
    // }
    
    // console.log(result)

    // const data = [5, 10, 'Shopping', 20, 'Homework'];

    // // Пишем решение вот тут
    // for ( let i = 0; i < data.length; i++)
    //     if (typeof(data[i]) == 'number') {
    //         data[i] = data[i]*2;
    //     } else {
    //         data[i] = `${data[i]} - done`;
    //     }

    //     console.log(data)

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // for (i = data.length; i < data.length; i--) {
    
    //     result.push(data[i])
    // }
    // console.log(result)

    // let result = "";
    // const length = 6;

    // for (let i = 0; i < length; i++) {
    //     for (let j = 0; j < length - i; j++) {
    //         result += " ";
    //     }
    //     for (let j = 0; j < 2 * i + 1; j++) {
    //         result += "*";
    //     }
    //     result += '\n'; 
    // }

    // console.log(result)

//     const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

// function returnNeighboringNumbers(num) {
//     return [num-1, num, num+1]
// }

// console.log(returnNeighboringNumbers(5))

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }
//     return str;
// }
// let x = getMathResult(10, 2);

// console.log(x)


// function calculateVolumeAndArea(num) {
//     let obm;
//     let sqr;
    
//     if ( typeof(num) !== 'number'|| num < 0  || !Number.isInteger(num)) {
//         console.log("При вычислении произошла ошибка")
//     } else {
//         obm = num*num*num;
//         sqr = 6*num*num;
//     console.log(`Объем куба: ${obm}, площадь всей поверхности: ${sqr}`)
        // return `Объем куба: ${obm}, площадь всей поверхности: ${sqr}`;

//     }

// }
// calculateVolumeAndArea(22);

// function getCoupeNumber(num) {
//     if (num === 0 || num > 36) {
//         console.log("Таких мест в вагоне не существует")
//     } 
//     if (typeof(num) !== 'number'|| num < 0  || !Number.isInteger(num)) {
//         console.log("Ошибка. Проверьте правильность введенного номера места")
//     } 
    // else if (1 <= num && num <= 4){
    //     console.log(1)
    // } else if (5 <= num && num <= 8){
    //     console.log(2)
    // } else if (9 <= num && num <= 12){
    //     console.log(3)
    // } else if (13 <= num && num <= 16){
    //     console.log(4)
    // } else if (17 <= num && num <= 20){
    //     console.log(5)
    // } else if (21 <= num && num <= 24){
    //     console.log(6)
    // } else if (25 <= num && num <= 28){
    //     console.log(7)
    // } else if (29 <= num && num <= 32){
    //     console.log(8)
    // } else if (33 <= num && num <= 36){
    //     console.log(9)
    // }

    //--------------------------
//     return Math.ceil(num / 4);

// }

// console.log(getCoupeNumber(33));

// function getTimeFromMinutes(num) {
//     if (typeof(num) !== 'number'|| num < 0  || !Number.isInteger(num)){
//     return"Ошибка, проверьте данные" 
//     }

//     if (num < 60 & num >= 0 || num <= 600 && num >= 300) {
//         let ost = (num/60 - Math.floor(num/60))*60;
//         return `Это ${Math.floor(num/60)} часов и ${Math.round(ost)} минут`
//     }
//     if (num < 300 & num > 119) {
//         let ost = (num/60 - Math.floor(num/60))*60;
//         return `Это ${Math.floor(num/60)} часа и ${Math.round(ost)} минут`
//     }
//     if (num >= 60 && num < 120) {
//         let ost = (num/60 - Math.floor(num/60))*60;
//         return `Это ${Math.floor(num/60)} час и ${Math.round(ost)} минут`
//     }
//     } 
// getTimeFromMinutes(550)

// function findMaxNumber(num1, num2, num3, num4) {
//     if (typeof(num1) !== 'number' || typeof(num2) !== 'number' || typeof( num3) !== 'number' || typeof(num4) !== 'number') {
//         console.log ("0")
//     } else {console.log(Math.max(num1, num2, num3, num4));}
// }

// findMaxNumber(4, -5, 5, 16.2)

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     console.log(result) ;
// }

// fib(7)

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         console.log(str) ;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     console.log(exp);
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     console.log(str);
// }

// showProgrammingLangs(personalPlanPeter);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// const family1 = [];

// function showFamily(arr) {
//     let fam = `Семья состоит из: `;
//     if (arr.length === 0){
//         console.log('Семья пуста')
//     } else {
//         for (let i of arr) {
//             fam += `${i} `
//         };
//         console.log(fam);
//     }
// }

// showFamily(family);
// showFamily(family1);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for (let i of arr) {
//         console.log(i.toLowerCase())
//     }
// };
// standardizeStrings(favoriteCities)

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//          console.log('Ошибка')
//     } else {
        
//         console.log(str.split('').reverse().join(''))
//     }
// }

// reverse(someString)


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let avaluable = '';
//     arr.length === 0 ? avaluable = 'Нет доступных валют' : avaluable = 'Доступные валюты:\n';
    
//     for (let i of arr) {
//         if ( i === missingCurr){
//             avaluable
//         } else {avaluable += `${i}\n`}
         
//     }
//     console.log(avaluable)
// }

// availableCurr([...baseCurrencies,...additionalCurrencies], 'CNY')


// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     filmCount: function() {
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "")
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//         }
//     },
//     rememberMyFilms: function() {
//         for (i = 0; i < 2; i++) {
//             let a = prompt("Один из последних просмотренных фильмов?", "");
//             let b = prompt("Как вы его оцените?", "");
        
//             if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log ('done');
//             } else {
//                 console.log ('Error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log ('Просмотрено мало фильмов');
//         } else if (10 <= personalMovieDB.count <= 30) {
//             console.log ('Вы классический зритель');
//         } else if (30 < personalMovieDB.count) {
//             console.log ('Вы - КИНОМАН');
//         } else {
//             console.log ('Произошла ошибка');
//         }
//     },
//     showMyDB: function() {
//         if (personalMovieDB.privat == false) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (i = 1; i < 4; i++){
//          let genresUnswer = prompt(`Ваш любимый жанр под номером ${i}?`, '');

//             if (genresUnswer == null ||  genresUnswer === '') {
//                 console.log("Вы ввели некоректные данные или не ввели данные");
//                 i--;
//             } else {personalMovieDB.genres[i - 1] = genresUnswer; };
         
//          };
//          personalMovieDB.genres.forEach( function(item, index) {
//             console.log(`Любимый жанр #${index + 1} - это ${item}`)
//          })
         
//          // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`, ''); --- альтернатива
        
//      },     
    
// };

// Задача:
// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂
// Но эта задача содержит несколько подзадач внутри:
// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {

//     let sqrAllShops = 0;

//     for (let i of data.shops) {
//         let sqrShop = i.width*i.length*data.height;
//         sqrAllShops += sqrShop;  
//     };
    

//     if (sqrAllShops*shoppingMallData.moneyPer1m3 <= shoppingMallData.budget) {
//         return 'Бюджета достаточно'
//     } else {
//         return 'Бюджета недостаточно'
//     }

// };

// isBudgetEnough(shoppingMallData);


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam','Sem'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     console.log([a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]) 
// }

// sortStudentsByGroups(students);

// function createCounter() {
// let counter = 0
//   const myFunction = function() {
//    counter = counter + 1
//     return counter
//      }
//     return myFunction
// }
//  const increment = createCounter()
//  const c1 = increment()
//  const c2 = increment()
//  const c3 = increment()
//  console.log('example increment', c1, c2, c3)

//  function makeCounter() {
//     let count = 0;
  
//      const xxx = function () {
//       return count++; // есть доступ к внешней переменной "count"
//     };

//     return xxx;
//   } 
//   let counter = makeCounter(); 
//   console.log( counter() ); // 0
//   console.log( counter() ); // 1
//   console.log( counter() ); // 2

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow))

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if ((parseFloat(fDish.price) + parseFloat(sDish.price)) < parseFloat(average)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     let copy = JSON.parse(JSON.stringify(data))
//     // const copy = Object.assign({}, data);

//     copy.waitors[0] = {name: 'Mike', age: 32};
//     return copy;
// }

// console.log(transferWaitors(restorantData));
// console.log(restorantData);

// function pow (x, n) {
//     if (n === 1) {
//         return x
//     } else {
//         return x * pow(x, n - 1)
//     }
// }

// console.log(pow(4, 3));

// function rec (x, n) {
//     let result = 1;

//     for (i = 0; i < n; i++) {
//         result *= x;
//     }
//     console.log(result)
// }

// rec(2, 4)

// const students = {
//     js: [{
//         name: "John",
//         progress: 100
//     }, {
//         name: "Ivan",
//         progress: 60 
//     }],

//     html: {
//         basic: [{
//             name: "Peter",
//             progress: 20
//         }, {
//             name: "Ann",
//             progress: 18
//         }],

//         pro: [{
//             name: "Sam",
//             progress: 10
//         }],
//         semi: [{
//             name: "Potter",
//             progress: 3
//         }, {
//             name: "Anka",
//             progress: 5
//         }]
            
//     }
// }

// function getTotalProgresByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for ( let i = 0; i < course.length; i++){
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)){
//                 students += subCourse.length;

//                 for ( let i = 0; i < subCourse.length; i++){
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }
    
//     return total / students;
// }


// console.log(getTotalProgresByIteration(students));

// РЕКУРСИЯ!!!!!!!!-----------------------------------------------------------
// function getTotalProgresByRecursion(data) {
//     if (Array.isArray(data)){
//         let total = 0;

//         for ( let i = 0; i < data.length; i++){
//             total += data[i].progress;
//         }
//         return [total, data.length]
//     } else {
//        let total = [0, 0];

//        for (let subData of Object.values(data)){
//         const subDataArr = getTotalProgresByRecursion(subData);

//         total[0] += subDataArr[0];
//         total[1] += subDataArr[1];
//        }
       
//        return total;
//     }
// }

// const result = getTotalProgresByRecursion(students);

// console.log(result[0] / result[1])

// function deepCount(a){
//     let sum = a.length;
//     for ( i = 0; i < a.length; i++) {
//         if (Array.isArray(a[i])) {}
//             sum += deepCount(a[i]);
    
//     }
//     console.log(sum);
// }
// deepCount([2, 5, 4, [2, 6]]);

// // function deepCount(a){
// //     let count = a.length;
// //     for (let i=0; i < a.length; i++) {
// //         if (Array.isArray(a[i])) {
// //             count += deepCount(a[i]);
// //         }
// //     };
// //     return count;
// // }

// console.log(deepCount(["1", 5, ["3", [3, [6, 6], 5]], ["10"]]))
// -----------------------------------------------------------------------------------------------

// let sum = 0;
// a.forEach((item, i) => {

// })

// function pow (x, n) {
//     if (n === 1) {
//         return x
//     } else {
//         return x * pow(x, n - 1)
//     }
// }

// console.log(pow(4, 3));


// function factorial(num) {
//     if (num === 1 || num <= 0) {
//         return 1
//     }  else if (!Number.isInteger(num) || typeof(num) == 'string') {
//         console.log("Число не корректного формата")
//     }
//         else {
//         return num*factorial(num - 1)
//     }
// }

// console.log(factorial(0));

// let n = 0;
// function amountOfPages(summary){
//     let arr = [];
//     let res = '';
    
//     for (let i = 1; i <= summary; i++) {
//         arr.push(i);   
//     };

//     const newArr = arr.map(String);

//     for (i = 0; i < arr.length; i++){
        
//         res += newArr[i];

//         if (res.length == summary){
//             n = (i+1);
//         }
//     }
    
//     return n
// }

// amountOfPages(25)
// console.log(n)


// function isPangram(string) {

// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// const setArr = new Set(arr);

// let newStr = string.toLowerCase().split('').sort().join('').trim().split('');

// const setStr = new Set(newStr);
// let nnstr =  Array.from(new Set(setStr));

// // if (nnstr.length == 26) console.log(true) ;
// console.log(nnstr.length == 26)
// };
// isPangram('The quick brown fox jumps over the lazy dog')