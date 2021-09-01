

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

    const adv  = document.querySelectorAll(".promo__adv img"),
             poster = document.querySelector(".promo__bg"),
             genre = poster.querySelector(".promo__genre"),
             filmList = document.querySelectorAll(".promo__interactive-list"),
             addFilm = document.querySelector(".adding__input"),
             aprove = document.querySelector('form.add'),
             checkBox = document.querySelector("[type='checkbox']"); 
          //   deleteMovie = document.querySelectorAll('.delete');

    
             
    aprove.addEventListener('submit', (event) =>{
        event.preventDefault();

        let newMovie = addFilm.value;
        const   favorite = checkBox.checked;

        if(newMovie){

            if(newMovie.length > 21){
               newMovie = `${newMovie.substring(0,22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newMovie);
            arraySort(movieDB.movies);

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
    
    

    function createMovieList(films, parent){
        filmList.forEach(item => {
            item.innerHTML = "";
        });

        arraySort(movieDB.movies);

        films.forEach((film, i) => {
            parent.forEach(item => {
                item.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>    
                `;
                
            }); 
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });

    }

    
    
    createMovieList(movieDB.movies, filmList);
   
});




//=========================================




