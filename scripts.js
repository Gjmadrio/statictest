console.clear();

gsap.registerPlugin(ScrollTrigger);

// ANIMATE WRAPPER OLIVE
let wrapper_olive = document.querySelectorAll(".wrapper_olive");

wrapper_olive.forEach((element) => {
  let tl_olive = gsap.timeline();

  ScrollTrigger.create({
    trigger: element,
    start: "top top",
    end: "bottom top",
    pin: true,
    markers: true,
    animation: tl_olive,
    refreshPriority: parseInt(element.dataset.priority)
  });
});

// ANIMATE WRAPPER ORANGE
let wrapper_orange = document.querySelectorAll(".wrapper_orange");

wrapper_orange.forEach((element) => {
  let tl_orange = gsap.timeline();

  ScrollTrigger.create({
    trigger: element,
    start: "top top",
    end: "bottom top",
    pin: true,
    //scrub: .5,
    markers: {
      startColor: "blue",
      endColor: "blue",
      fontSize: "18px",
      fontWeight: "bold",
      indent: 20
    },
    animation: tl_orange,
    refreshPriority: parseInt(element.dataset.priority)
  });
});

ScrollTrigger.refresh();