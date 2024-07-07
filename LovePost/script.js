const heart = document.querySelector("#image");
const hiddenHeart = document.querySelector(".hidden-heart");
const visibleHeart = document.querySelector(".visible-heart i");

heart.addEventListener("dblclick", () => {
  hiddenHeart.style.transform = "scale(2)";
  hiddenHeart.style.color = "red";
  setTimeout(() => {
    hiddenHeart.style.transform = "scale(0)";
  }, 1000); // Animation duration in milliseconds
});

visibleHeart.addEventListener("click", () => {
  if (visibleHeart.classList.contains("ri-heart-line")) {
    visibleHeart.classList.remove("ri-heart-line");
    visibleHeart.classList.add("ri-heart-fill");
    visibleHeart.style.color = "red";
  } else {
    visibleHeart.classList.remove("ri-heart-fill");
    visibleHeart.classList.add("ri-heart-line");
    visibleHeart.style.color = "black";
  }
});
