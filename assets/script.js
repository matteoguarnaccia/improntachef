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

timeline1.to(".section-1 img", { y: -80, ease: "none" });

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
  .fromTo(".slogan", { y: 80 }, { y: -80, duration: 3, ease: "none" })
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
  .fromTo(".gv", { y: 80 }, { y: -80, duration: 3, ease: "none" })
  .fromTo("#vale", { y: 120 }, { y: -20, duration: 3 }, "<")
  .fromTo("#gabri", { y: 50 }, { y: -20, duration: 3 }, "<");

let scene3 = new ScrollMagic.Scene({
  triggerElement: ".section-3",
  duration: "200%",
  triggerHook: 0.8,
})
  .setTween(timeline3)
  .addTo(controller);

//section 4

let timeline4 = new TimelineMax();

timeline4.fromTo(".servizi", { y: 80 }, { y: -80, duration: 3, ease: "none" });

let scene4 = new ScrollMagic.Scene({
  triggerElement: ".section-4",
  duration: "200%",
  triggerHook: 0.8,
})
  .setTween(timeline4)
  .addTo(controller);

//section 5

let timeline5 = new TimelineMax();

timeline5.fromTo(".clienti", { y: 80 }, { y: -80, duration: 3, ease: "none" });

let scene5 = new ScrollMagic.Scene({
  triggerElement: ".section-5",
  duration: "200%",
  triggerHook: 0.8,
})
  .setTween(timeline5)
  .addTo(controller);
