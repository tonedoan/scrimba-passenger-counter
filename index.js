let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count++
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")

function save() {
    let countStr = " - " + count
    saveEl.textContent += countStr
    count = 0;
    countEl.textContent = 0;
}

