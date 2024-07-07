const btn = document.querySelector("#counter");
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");

let count = 0;

increment.addEventListener("click", function () {
  count++;
  btn.textContent = count;
});

decrement.addEventListener("click", function () {
  count--;
  btn.textContent = count;
});
