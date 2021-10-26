gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    // x: 600,
    duration: 8,
    scrollTrigger: {
        trigger:".square2",
        start: "top 80%",
        end: "top 30%",
        scrub: 4,
        toggleActions: "restart none none none", 
        pin: ".square",
        pinSpacing: true,
    // play pause resume reverse restart reset complete none  
    //              onEnter onLeave onEnterBack onLeaveBack
        // end: () => `+=${document.querySelector(".square").offsetHeight}`,
        // markers: true,
    }
});


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        // markers: true,
        start: "top 80%",
        end: "top 10%",
        scrub: true
    }
});

tl.to(".box", {x: 500, duration: 5})
    .to(".box", {y: 200, duration: 2})
    .to(".box", {x: 0, duration: 2});

ScrollTrigger.create({
    trigger: ".rect",
    start: "top 80%",
    end: "top 50%",
    markers: true,
    toggleClass: "rect-red"
})