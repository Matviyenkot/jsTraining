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

let numOfFilms;

function start(){
     numOfFilms = +prompt('how much movies have you watched?', '2');

     while (numOfFilms == '' || numOfFilms == null || isNaN(numOfFilms) || numOfFilms < 0) {
        numOfFilms = +prompt('how much movies have you watched?', '2');
     }
}

function writeYourGenres (){
    for (let i = 1; i<=3; i++){
        const g = prompt(`your favorite genre on ${i} position`, '');
        PersonalMovieDB.genres[i-1] = g;
        console.log("done");
    }
}


const PersonalMovieDB = {
    count: numOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

    function rememberMyFilms(){
        for (let i=0;i<2;i++) {
            const a = prompt('what is last movie?', ''),
                  b = +prompt('which ball you give?', '');
        
            if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
            PersonalMovieDB.movies[a] = b;
            console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    }

    function detectPersonalLevel(){
        if (PersonalMovieDB.count <= 10){
            console.log('few');
        } else if (PersonalMovieDB.count > 10 && PersonalMovieDB < 30) {
            console.log('normal');
        } else if (PersonalMovieDB.count >= 30 ){
            console.log('a lot');
        } else {
            console.log('not found');
        }
    }

    function showMyDB(){
        if (PersonalMovieDB.private == false){
            console.log(PersonalMovieDB);
        }
    }

    start();

    rememberMyFilms();

    writeYourGenres();
    
    detectPersonalLevel();

    showMyDB();
// let num = 0;

// while(num <2){
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




