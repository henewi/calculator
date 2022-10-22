// clear button //
const clearBtn = document.getElementById('clearBtn')
const screencontent = document.getElementById('screencontent')
clearBtn.addEventListener('click', clear)
function clear() {
    screencontent.textContent=''
}

// buttons // 
// read the click from the button
// put that on the screen
const buttons = document.querySelectorAll('buttons')
const screen = document.querySelector('.screencontainer')

let currentNum = '';
let numbers = [];
let operator = '';

document.querySelectorAll('.btn').forEach(a => a.addEventListener('click', logDigit));

function logDigit(e) {
    currentNum += e.target.value;
    console.log(currentNum)
    updateScreen(currentNum);
}