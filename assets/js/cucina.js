gsap.registerPlugin(ScrollTrigger);

gsap.to("#cucina", { ease: Power1.easeIn, opacity: 1, duration: 1 }, "0.5");

//Cucina-1

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cucina-1",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

tl1.to(".cucina-1 .img-wrapper img", { y: "20%", ease: "none" });

//Cucina-2

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cucina-2",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

tl2.to(".cucina-2 .img-wrapper img", { y: "20%", ease: "none" });

//Cucina-3

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cucina-3",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

tl3.to(".cucina-3 .img-wrapper img", { y: "20%", ease: "none" });

//Cucina-4

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cucina-4",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

tl4.to(".cucina-4 .img-wrapper img", { y: "20%", ease: "none" });
