const container = document.querySelector(".container");
const cursor = document.querySelector("#cursor");

container.addEventListener("mousemove", (event) => {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});
