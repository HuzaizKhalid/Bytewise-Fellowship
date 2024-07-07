let rect = document.querySelector("#rectangle");

rect.addEventListener("mousemove", (details) => {
  let rectangleLocation = rect.getBoundingClientRect();
  //   console.log(rectangleLocation);
  let insideRectangleValue = details.clientX - rectangleLocation.left;
  //   console.log(insideRectangleValue);

  if (insideRectangleValue < rectangleLocation.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      rectangleLocation.width / 2,
      255,
      0,
      insideRectangleValue
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: Power4,
    });
  } else {
    let blueCar = gsap.utils.mapRange(
      rectangleLocation.width / 2,
      rectangleLocation.width,
      0,
      255,
      insideRectangleValue
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blueCar})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", () => {
  gsap.to(rect, {
    backgroundColor: "white",
    ease: Power4,
  });
});
