const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// console.log(personalMovieDB.count)

let a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("Как вы его оцените?", ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt("Как вы его оцените?", "");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);