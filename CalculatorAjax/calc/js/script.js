'use strict';
console.log('ok');
const inputRub = document.querySelector('#rub'),
        inputUSD = document.querySelector('#usd');  


inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', ()=>{
        if(request.status === 200){
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = "something wrong!";
        }
    });
});

inputUSD.addEventListener('input', () =>{
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', ()=>{
        if(request.status === 200){
            const data = JSON.parse(request.response);
            inputRub.value = (+inputUSD.value * data.current.usd).toFixed(2);
        } else {
            inputRub.value = "something wrong!";
        }
    });

});