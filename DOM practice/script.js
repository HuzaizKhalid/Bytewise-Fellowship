const btn = document.querySelector(".btn");

function mouseOver() {
  btn.style.backgroundColor = "green";
  btn.style.color = "white";
  btn.style.fontSize = "24px";
  btn.textContent = "Button Hovered!";
  btn.style.transition = "background-color 0.5s, color 0.5s, font-size 0.5s";
}

btn.addEventListener("mouseover", mouseOver);
