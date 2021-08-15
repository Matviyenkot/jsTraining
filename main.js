"use strict";

// const result = confirm("are you here?");
// console.log(result);

// const answers = [];

// answers[0] = prompt('what is your name?', '');
// answers[1] = prompt('what is your surname?', '');
// answers[2] = prompt('how old are you?', '');

// document.write( typeof(answers) );

// const myname = "Taras";

// console.log (`Hi, ${myname}`);


// alert();

const numOfFilms = +prompt('how much movies have you watched?', '2');


const PersonalMovieDB = {
    count: numOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('what is last movie?', ''),
      b = +prompt('which ball you give?', ''),
      c = prompt('what is last movie?', ''),
      d = +prompt('which ball you give?', '');


PersonalMovieDB.movies[a] = b;
PersonalMovieDB.movies[c] = d;

console.log(PersonalMovieDB);