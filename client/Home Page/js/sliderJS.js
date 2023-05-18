gsap.registerPlugin(ScrollTrigger);


window.addEventListener("load", () => {
    gsap.to(".wone", {
        x : "-100vw",
        scrollTrigger : {
            scrub : 5,
            trigger : ".words",
            start : "top 110%"
        }
    })

    gsap.to(".wtwo", {
        x : "100vw",
        scrollTrigger : {
            scrub : 8,
            trigger : ".words",
            start : "top 110%"
        }
    })
})