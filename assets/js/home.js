gsap.registerPlugin(ScrollTrigger);

gsap.to(".section-1", { ease: Power1.easeIn, opacity: 1, duration: 1 }, "0.5");

// gsap.to(
//   ".section-2 h1",
//   {
//     ease: Power1.easeIn,
//     opacity: 1,
//     duration: 0.8,
//   },
//   "1.5"
// );

//Section-1

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-1",
    start: "center center",
    end: "bottom top",
    scrub: true,
  },
});

tl1.to(".section-1 img", { y: -80, ease: "none" });

//Section 2

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2",
    start: "bottom bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-2",
      start: "bottom bottom",
      end: "bottom center",
      scrub: true,
      once: true,
    },
  })
  .to(".slogan h1", { opacity: 1 });

tl2.fromTo(".slogan", { y: 0 }, { y: -80, ease: "none", duration: 4 }, "-=2");
//Section 3

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-3",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
tl3
  .fromTo(".gv", { y: 80 }, { y: -80, duration: 3, ease: "none" })
  .fromTo("#vale", { y: 120 }, { y: -20, duration: 3 }, "<")
  .fromTo("#gabri", { y: 50 }, { y: -20, duration: 3 }, "<");

//section 4

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-4",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

tl4.fromTo(".section-4", { y: 80 }, { y: -80, ease: "none" });

//section 5

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-5",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

tl5.fromTo(".clienti", { y: 80 }, { y: -80, duration: 3, ease: "none" });

const swiper = new Swiper(".mySwiper", {
  freeMode: {
    enabled: true,
    momentum: true,
    sticky: true,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 6000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 4,
    },
  },
});
