gsap.registerPlugin(ScrollTrigger);

gsap.to(".about-us", { ease: Power1.easeIn, opacity: 1, duration: 1 }, "0.5");

tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-us",
    start: "center center",
    end: "+=3000",
    scrub: 1,
    pin: true,
  },
});

tl.to(".gabriel-valeria", { bottom: "0%", ease: "none", duration: 4 }, "<")
  .to(".parallax.px1", { opacity: 1, duration: 0.5 }, "0.5")
  .to(".parallax.px2", { opacity: 1, duration: 0.5 }, "2")
  .to(".parallax.px3", { opacity: 1, duration: 0.5 }, "3");
