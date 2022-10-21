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