let btn = document.querySelector(".btn-fill");
let bx = document.querySelectorAll(".btn-filler");
let b1 = document.querySelector(".btn-filler-one");
let b2 = document.querySelector(".btn-filler-two");

const tl = gsap.timeline({paused:true});
const tl2 = gsap.timeline({paused:true});

const tlSB = gsap.timeline({paused:true});
const tlSBOUT = gsap.timeline({paused:true});

btn.addEventListener("mouseenter", () => {
    tl.restart();
    tl2.pause();

    tlSB.restart();
    tlSBOUT.pause();
})
    
btn.addEventListener("mouseleave", () => {
    tl2.restart();
    tl.pause();

    tlSBOUT.restart();
    tlSB.pause();
})

// btn

tl.set(btn, {
    willChange: "transform",
    scale: 1
}, 0);

tl.to(btn, {
    scaleX: 1.03,
    scaleY: .98,
    duration: 1,
    ease: "elastic.out(1, 0.3)",
    force3D: !0
}, 0);

tl2.to(btn, {
    scaleX: 1,
    scaleY: 1,
    duration: 1,
    ease: "elastic.out(1, 0.3)",
    force3D: !0
});

// btn-filler
    
tlSB.set(bx, {
    willChange: "transform",
    xPercent: -200,
}, 0);

tlSB.to(bx, {
    xPercent: -100,
    duration: 1,
    stagger: 0.2,
    ease: "expo.out",
    force3D: !0
}, 0);

tlSBOUT.to(bx, {
    xPercent: 0,
    duration: 1,
    stagger: -0.2,
    ease: "expo.out",
    force3D: !0
}, 0);