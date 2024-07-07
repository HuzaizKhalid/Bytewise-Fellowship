const btn = document.querySelector(".btn");
const h5 = document.querySelector("h5");
let check = 0;

btn.addEventListener("click", () => {
  if (check == 0) {
    h5.textContent = "Friends";
    h5.style.color = "green";
    btn.textContent = "Remove Friend";
    check = 1;
  } else {
    h5.textContent = "Stranger";
    h5.style.color = "red";
    btn.textContent = "Add Friend";
    check = 0;
  }
});
