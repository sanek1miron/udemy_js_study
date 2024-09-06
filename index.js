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


// let numberOfFilms;



// function filmCount() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }

// filmCount();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (i = 0; i < 2; i++) {
//         let a = prompt("Один из последних просмотренных фильмов?", "");
//         let b = prompt("Как вы его оцените?", "");
    
//         if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log ('done');
//         } else {
//             console.log ('Error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log ('Просмотрено мало фильмов');
//     } else if (10 <= personalMovieDB.count <= 30) {
//         console.log ('Вы классический зритель');
//     } else if (30 < personalMovieDB.count) {
//         console.log ('Вы - КИНОМАН');
//     } else {
//         console.log ('Произошла ошибка');
//     }
// }

// detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

// detectPersonalLevel();

// function writeYourGenres() {
//    for (i = 1; i < 4; i++){
//     let genresUnswer = prompt(`Ваш любимый жанр под номером ${i}?`, '');

//     personalMovieDB.genres[i - 1] = genresUnswer; 
    
//     // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`, ''); --- альтернатива
//    }
// }

// writeYourGenres();
// console.log(personalMovieDB)

// function filmCount() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }

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

