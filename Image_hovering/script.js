const elem1 = document.querySelector("#elem1");
const elemImage = document.querySelector("#elem1 img");

elem1.addEventListener("mousemove", (event) => {
  elem1.style.left = event.clientX + "px";
  elem1.style.top = event.clientY + "px";
});
