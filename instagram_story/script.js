let images = [
  {
    dp: "https://images.unsplash.com/photo-1515212799670-2481411f0d64?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1617724757497-79b54c5444d2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1517498327491-f903e1e281cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1517498327491-f903e1e281cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let stories = document.querySelector(".stories");
let storyShow = document.querySelector(".story-card");

let clutter = "";

images.forEach((elem, idx) => {
  clutter += `<div id="story"><img id="${idx}" src = "${elem.dp}" alt = " " /></div>`;
});

stories.innerHTML = clutter;

let currentTimeout = null;
let currentStory = null;

stories.addEventListener("click", (elem) => {
  let clickedStoryId = elem.target.id;
  if (clickedStoryId === currentStory) {
    clearTimeout(currentTimeout);
    storyShow.style.display = "none";
    currentStory = null;
    return;
  }

  currentStory = clickedStoryId;
  storyShow.style.display = "block";
  storyShow.style.backgroundImage = `url(${images[clickedStoryId].story})`;

  currentTimeout = setTimeout(() => {
    storyShow.style.display = "none";
    currentStory = null;
  }, 3000);
});
