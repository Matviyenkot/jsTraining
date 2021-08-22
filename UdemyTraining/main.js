"use strict";

// const PersonalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false,
//     start: function(){
//          PersonalMovieDB.count = +prompt('how much movies have you watched?', '2');
   
//         while (PersonalMovieDB.count == '' || PersonalMovieDB.count == null || isNaN(PersonalMovieDB.count) || PersonalMovieDB.count < 0) {
//             PersonalMovieDB.count = +prompt('how much movies have you watched?', '2');            
//         }
//    },

//    rememberMyFilms: function(){
//     for (let i=0;i<2;i++) {
//         const a = prompt('what is last movie?', ''),
//               b = +prompt('which ball you give?', '');
    
//         if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
//         PersonalMovieDB.movies[a] = b;
//         console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
//     },

//     detectPersonalLevel: function(){
//         if (PersonalMovieDB.count <= 10){
//             console.log('few');
//         } else if (PersonalMovieDB.count > 10 && PersonalMovieDB < 30) {
//             console.log('normal');
//         } else if (PersonalMovieDB.count >= 30 ){
//             console.log('a lot');
//         } else {
//             console.log('not found');
//         }
//     },

//     showMyDB: function(){
//         if (PersonalMovieDB.private == false){
//             console.log(PersonalMovieDB);
//         }
//     },

//     toggleVisibleMyDB:function(){
//         if (PersonalMovieDB.private){
//             PersonalMovieDB.private = false;
//         } else {
//             PersonalMovieDB.private = true;
//         }
//     },

//     writeYourGenres: function (){
//         for (let i = 1; i<=3; i++){
//             const g = prompt(`your favorite genre on ${i} position`, '');
//             if ( g != null  || g != '') {
//                 PersonalMovieDB.genres[i-1] = g;
//             console.log("done");
//                 } else {
//                     console.log('error');
//                     i--;
//                 }
//         }
//     PersonalMovieDB.genres.forEach((item,i) => {
//         console.log(`Любимый жанр ${i + 1} - это ${item}`);
//     } ) ;   
//     }
// };

// PersonalMovieDB.writeYourGenres();

// console.log(2 && 1 && undefined && null && undefined);

// alert ( +"Infinity" );

const box = document.getElementById('box'),
    btns = document.querySelectorAll('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heatr');

    box.style.backgroundColor = 'yellow';

    btns[2].style.borderRadius = '70%';






