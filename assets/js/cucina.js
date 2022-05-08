//Cucina-1

let controller = new ScrollMagic.Controller();
let timeline1 = new TimelineMax();

gsap.to("#cucina", { ease: Power1.easeIn, opacity: 1, duration: 1 }, "0.5");

timeline1.to(".cucina-1 .img-wrapper img", { y: 200, ease: "non2" });

let scene1 = new ScrollMagic.Scene({
  triggerElement: ".cucina-1",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline1)
  .addTo(controller);

//Cucina-2
let timeline2 = new TimelineMax();

timeline2.fromTo(
  ".cucina-2 .img-wrapper img",
  { y: -150 },
  { y: 150, ease: "none" }
);

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".cucina-2 .img-wrapper",
  duration: "200%",
  triggerHook: 1,
})
  .setTween(timeline2)
  .addTo(controller);

//Cucina-3
let timeline3 = new TimelineMax();

timeline3.fromTo(
  ".cucina-3 .img-wrapper img",
  { y: -150 },
  { y: 150, ease: "none" }
);

let scene3 = new ScrollMagic.Scene({
  triggerElement: ".cucina-3 .img-wrapper",
  duration: "200%",
  triggerHook: 1,
})
  .setTween(timeline3)
  .addTo(controller);

//Cucina-4
let timeline4 = new TimelineMax();

timeline4.fromTo(
  ".cucina-4 .img-wrapper img",
  { y: -150 },
  { y: 150, ease: "none" }
);

let scene4 = new ScrollMagic.Scene({
  triggerElement: ".cucina-4 .img-wrapper",
  duration: "200%",
  triggerHook: 1,
})
  .setTween(timeline4)
  .addTo(controller);
