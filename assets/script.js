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
let parallax1 = new TimelineMax();
let fadeIn1 = new TimelineMax();

fadeIn1
  .fromTo(".section-1", { opacity: 0 }, { opacity: 1, duration: 1.5 })
  .fromTo("#h1-section-1", { opacity: 0 }, { opacity: 1, duration: 1.2 });

parallax1.to("#h1-section-1", { y: -100 });

let scene1 = new ScrollMagic.Scene({
  triggerElement: ".section-1",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(parallax1)
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

//Section 2
let timeline3 = new TimelineMax();

timeline3
  .fromTo(".gv h2", { y: 50 }, { y: 0, duration: 3 })
  .fromTo(".gv h2", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "<")
  .fromTo("#vale", { y: 120 }, { y: 20, duration: 4 }, "<")
  .fromTo("#vale", { opacity: 0 }, { opacity: 1, duration: 2 }, "<")
  .fromTo("#gabri", { y: 50 }, { y: 20, duration: 4 }, "<")
  .fromTo("#gabri", { opacity: 0 }, { opacity: 1, duration: 2 }, "<")
  .fromTo(".gv-intro", { opacity: 0 }, { opacity: 1, duration: 3 }, "<")
  .fromTo(".gv-intro", { y: 50 }, { y: 0, duration: 3 }, "<");

let scene3 = new ScrollMagic.Scene({
  triggerElement: ".section-3",
  duration: "150%",
  triggerHook: 0.5,
})
  .setTween(timeline3)
  .addTo(controller);
