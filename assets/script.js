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

parallax1.to("#h1-section-1", { y: 100 });

let scene1 = new ScrollMagic.Scene({
  triggerElement: ".section-1",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(parallax1)
  .addTo(controller);

//Section 2
let fadeIn2 = new TimelineMax();
let parallax2 = new TimelineMax();

fadeIn2
  .fromTo(".slogan", { y: -25 }, { y: 25, duration: 3 })
  .fromTo(".slogan h2", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=3")
  .fromTo(".slogan p", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=2.5");

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".section-2",
  duration: "100%",
  triggerHook: 0.8,
})
  .setTween(fadeIn2)
  .addTo(controller);
