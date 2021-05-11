const resultScreen = document.querySelector('.result-screen');
let calcButtons = document.querySelectorAll('.btn');
let equal = document.querySelector('#equal');
let clr = document.querySelector('#clr');

calcButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        resultScreen.value += btn.value;
    });
});

clr.addEventListener('click', ()=> {
    resultScreen.value = "";
});

equal.addEventListener('click', () => {
    resultScreen.value = eval(resultScreen.value);
});

let del = document.querySelector('#del').addEventListener('click', () => {
    let txt = resultScreen.value;
    let value = txt.substr(0, txt.length -1);

    resultScreen.value = value;
});
// let defaults = "admin";
// let name = prompt("What is your name?");
// 
// if (name.length < 0 || name === '') {
// 
    // name = defaults;
// }
    // if (confirm("Are you sure you want to view the message?")) {
        // alert(`HELLo! ${name} i am glad to be with you ^_^`);
    // }
// 


