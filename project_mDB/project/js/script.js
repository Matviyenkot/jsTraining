

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
console.log(movieDB);

    const adv  = document.querySelectorAll(".promo__adv img"),
             poster = document.querySelector(".promo__bg"),
             genre = poster.querySelector(".promo__genre"),
             filmList = document.querySelectorAll(".promo__interactive-list"),
             addFilm = document.querySelector(".adding__input"),
             aprove = document.querySelector('form.add'),
             checkBox = document.querySelector("[type='checkbox']"), 
             deleteMovie = document.querySelectorAll('.delete');

    
             
    aprove.addEventListener('submit', (event) =>{
        event.preventDefault();

        let newMovie = addFilm.value;
        const   favorite = checkBox.checked;

        if(newMovie){

            if(newMovie.length > 21){
               newMovie = `${newMovie.substring(0,22)}...`;
            }

            movieDB.movies.push(newMovie);
            arraySort(movieDB.movies);

            filmList.forEach(item => {
                item.innerHTML = "";
            });
            
            createMovieList(movieDB.movies, filmList);
        }

        event.target.reset();
    });         
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    deleteAdv(adv);

    filmList.forEach(item => {
        item.innerHTML = "";
    });
    
    genre.textContent = "Drama";
    
    poster.style.backgroundImage="url('img/bg.jpg')";

    const arraySort = (arr) => {
        arr.sort();
    };
    
    arraySort(movieDB.movies);

    function createMovieList(films, parent){
        films.forEach((film, i) => {
            parent.forEach(item => {
                item.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>    
                `;
                
            }); 
        });
    }
    
    
    createMovieList(movieDB.movies, filmList);
   
});

