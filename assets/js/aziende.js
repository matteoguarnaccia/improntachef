gsap.registerPlugin(ScrollTrigger);

gsap.to("#aziende", { ease: Power1.easeIn, opacity: 1, duration: 1 }, "0.5");

//az-1
let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".az-1",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

tl1.to(".az-1 p", { y: 300, ease: "none" }, "<");

//az-2
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".az-2",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

tl2.fromTo(".az-2 p", { y: -300 }, { y: 300, ease: "none" }, "<");

//az-3

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".az-3",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

tl3.fromTo(".az-3 p", { y: -300 }, { y: 300, ease: "none" }, "<");

//az-4

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".az-4",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

tl4.fromTo(".az-4 p", { y: -300 }, { y: 300, ease: "none" }, "<");

//az-5

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".az-5",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

tl5.fromTo(".az-5 p", { y: -300 }, { y: 300, ease: "none" }, "<");
