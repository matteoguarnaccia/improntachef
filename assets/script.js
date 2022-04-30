// navbar
const toggle = document.getElementById("toggle");
const ddParent = document.getElementById("dd-parent");

toggle.onclick = () => {
  toggle.classList.toggle("active");
};

ddParent.onclick = () => {
  ddParent.classList.toggle("active");
};

//Animate on scroll
//Section 1
let controller = new ScrollMagic.Controller();
let timeline1 = new TimelineMax();

gsap.to(
  ".section-1",
  { ease: Power1.easeIn, opacity: 1, duration: 1.5 },
  "0.5"
);
gsap.to(
  ".section-1 img",
  { ease: Power1.easeIn, opacity: 1, duration: 1.5 },
  "2"
);

timeline1.to(".section-1 img", { y: -100 });

let scene1 = new ScrollMagic.Scene({
  triggerElement: ".section-1",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline1)
  .addTo(controller);

//Section 2
let timeline2 = new TimelineMax();

timeline2
  .fromTo(".slogan", { y: 100 }, { y: -100, duration: 3 })
  .fromTo(".slogan h2", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=3")
  .fromTo(".slogan p", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=2.5");

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".section-2",
  duration: "200%",
  triggerHook: 0.8,
})
  .setTween(timeline2)
  .addTo(controller);

//Section 3
let timeline3 = new TimelineMax();

timeline3
  .fromTo(".gv", { y: 50 }, { y: -50, duration: 3 })
  .fromTo(".gv h2", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "<")
  .fromTo("#vale", { y: 120 }, { y: -20, duration: 4 }, "<")
  .fromTo("#gabri", { y: 50 }, { y: -20, duration: 4 }, "<")
  .fromTo(".gv-intro", { opacity: 0 }, { opacity: 1, duration: 3 }, "<");

let scene3 = new ScrollMagic.Scene({
  triggerElement: ".section-3",
  duration: "150%",
  triggerHook: 0.8,
})
  .setTween(timeline3)
  .addTo(controller);

//section 4

let timeline4 = new TimelineMax();

timeline4
  .fromTo(".servizi", { y: 50 }, { y: -50, duration: 3 })
  .fromTo(".servizi", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "<");

let scene4 = new ScrollMagic.Scene({
  triggerElement: ".section-4",
  duration: "150%",
  triggerHook: 0.8,
})
  .setTween(timeline4)
  .addTo(controller);
