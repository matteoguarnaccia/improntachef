//About-us
let controller = new ScrollMagic.Controller();
let timeline1 = new TimelineMax();

gsap.to(".about-us", { ease: Power1.easeIn, opacity: 1, duration: 1 }, "0.5");

if (window.innerWidth > 768) {
  timeline1
    .to(".gabri .img-wrapper", { y: 200, ease: "none", duration: 4 }, "<")
    .to(".vale .descrizione", { y: 200, ease: "none", duration: 4 }, "<");
}

timeline1
  .to(".gabriel-valeria", { bottom: "0%", ease: "none", duration: 4 }, "<")
  .to(".parallax.px1", { opacity: 1, duration: 0.5 }, "0.5")
  .to(".parallax.px2", { opacity: 1, duration: 0.5 }, "2")
  .to(".parallax.px3", { opacity: 1, duration: 0.5 }, "3");

let scene1 = new ScrollMagic.Scene({
  triggerElement: ".about-us",
  duration: 3500,
  triggerHook: 0,
})
  .setTween(timeline1)
  .setPin(".about-us")
  .addTo(controller);
