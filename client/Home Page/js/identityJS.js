gsap.registerPlugin(ScrollTrigger);

// console.log("here");
gsap.from(".about__img", {
    xPercent : -110,
    duration: 1.5,
    width:"0",
    ease : Power2.out,
    scrollTrigger : {
        trigger : ".about__img",
        start : "top 70%",
        // toggleActions : "restart none none reset"
    }
})

gsap.from(".about__desc", {
    y: "50px",
    opacity: 0,
    duration: 0.6,
    ease : Expo.easeIn,
    scrollTrigger : {
        trigger: ".about__desc",
        start : "top 80%",
        // toggleActions : "restart none none reset"
    }
})


gsap.from(".about__title", {
    x: "100vw",
    duration : 1.5,
    opacity: 0,
    ease : Power2.out,
    scrollTrigger : {
        trigger: ".about__title",
        start : "top 70%",
        // toggleActions : "restart none none reset"
    }
})