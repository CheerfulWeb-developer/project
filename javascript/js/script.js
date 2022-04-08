"use sctrict";

const numberOfFims = +prompt("Сколько фильмов вы уже посмотрели", "0");

    
const personalMovieDB = {
    count: numberOfFims,
    movies: {},
    actors: {},
    generes: [],
    privat: false 
};

const a = prompt("Один из последних просмотренных фильмов?",""),
      b = prompt("На сколько оцеените его?",""),
      c = prompt("Один из последних просмотренных фильмов?",""),
      d = prompt("Один из последних просмотренных фильмов?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);