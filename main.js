"use strict";

const result = confirm("are you here?");
console.log(result);

const answers = [];

answers[0] = prompt('what is your name?', '');
answers[1] = prompt('what is your surname?', '');
answers[2] = prompt('how old are you?', '');

document.write( typeof(answers) );

const myname = "Taras";

console.log (`Hi, ${myname}`);


alert();