gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".feature__item");

revealContainers.forEach((container) => {
  let image = container.querySelector(".item-image");
  let text = container.querySelector(".item-text")
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      // toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
  tl.from(text, 1.5, {
    opacity : 0,
    delay : -0.5,
    duration : 0.7,
    ease : Expo.easeOut
  })
});
