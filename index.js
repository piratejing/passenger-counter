document.getElementById("count-el").textContent = 0;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(saveEl);

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let previousEntries = count + " - ";
  saveEl.textContent += previousEntries;

  countEl.textContent = 0;
  count = 0;

  console.log(count);
}
