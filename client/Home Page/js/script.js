
TweenMax.from(".logo", 1, {
    opacity: 0,
    x: "-100vw",
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("nav ul li", 1, {
    opacity: 0,
    x: "-100vw",
    ease: Power3.easeInOut
}, 0.08)
