gsap.registerPlugin(ScrollTrigger);

gsap.to("#privati", { ease: Power1.easeIn, opacity: 1, duration: 1 }, "0.5");

//pv-1
let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".pv-1",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

tl1.to(".pv-1", { backgroundPositionY: "-100%", ease: "none" });

//pv-2
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".pv-2",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

tl2.fromTo(
  ".pv-2",
  { backgroundPositionY: "-100%" },
  { backgroundPositionY: "100%", ease: "none" }
);

//pv-3

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".pv-3",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

tl3.fromTo(
  ".pv-3",
  { backgroundPositionY: "100%" },
  { backgroundPositionY: "-100%", ease: "none" }
);
