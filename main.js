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

    

// for (let i=0;i<2;i++) {
//     const a = prompt('what is last movie?', ''),
//           b = +prompt('which ball you give?', '');

//     if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
//     PersonalMovieDB.movies[a] = b;
//     console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

let num = 0;

while(num <2){
    const a = prompt('what is last movie?', ''),
          b = +prompt('which ball you give?', '');
          num++;
          if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
            PersonalMovieDB.movies[a] = b;
            console.log('done');
            } else {
                console.log('error');
                num--;
            }
}

// do{
//     const a = prompt('what is last movie?', ''),
//           b = +prompt('which ball you give?', '');
//           num++;
//           if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
//             PersonalMovieDB.movies[a] = b;
//             console.log('done');
//             } else {
//                 console.log('error');
//                 num--;
//             }
// }
// while(num<2);

if (PersonalMovieDB.count <= 10){
    console.log('few');
} else if (PersonalMovieDB.count > 10 && PersonalMovieDB < 30) {
    console.log('normal');
} else if (PersonalMovieDB.count >= 30 ){
    console.log('a lot');
} else {
    console.log('not found');
}


console.log(PersonalMovieDB);