'use strict';

document.addEventListener('DOMContentLoaded', () => {

// const box = document.querySelector('.box');
// const btn = document.querySelector('.btn');
// const btn2 = document.querySelector('.btn2');
// let pos =0;


// function myAnimation(){
//     pos = 0;

//     const id = setInterval(move, 10);
//     function move(){
//         if(pos ==300){
//             clearInterval(id);
//             box.style.backgroundColor = 'blue';
//         } else {
//             pos ++;
//             box.style.top = pos + 'px';
//             box.style.left = pos + 'px';
//             box.style.backgroundColor = 'red';
//         }
//     }

    

// }

// function moveBack(){
// // let pos = 300;

//     const id = setInterval(move, 10);
//     function move(){
//         if(pos == 0){
//             clearInterval(id);
//             box.style.backgroundColor = 'red';
//         } else {
//             pos --;
//             box.style.top = pos + 'px';
//             box.style.left = pos + 'px';
//             box.style.backgroundColor = 'yellow';
//         }
        
//     }
    
// }


// btn.addEventListener('click', myAnimation);
// btn2.addEventListener('click', moveBack);

let start = new Date();

for(let i =1; i <= 1000000; i++){
    let some = i**3;
}

let end = new Date();

alert(`Цикл відпрацював за ${end - start} милисекунд`);

});